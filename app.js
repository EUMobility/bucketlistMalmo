const questions = [
  {
    q: 'What kind of day are you after?',
    key: 'mood',
    options: [
      { label: 'Relax by the water', value: 'coast' },
      { label: 'An active hike outdoors', value: 'nature' },
      { label: 'Castles and old history', value: 'culture' },
      { label: 'Explore cities and towns', value: 'cities' },
      { label: 'Fun adventures and games', value: 'fun' },
      { label: "I'm alone and bored", value: 'alone' },
      { label: 'Food, markets and fika', value: 'food' },
      { label: 'A day trip somewhere new', value: 'daytrip' },
    ],
  },
  {
    q: 'How much time do you have?',
    key: 'time',
    options: [
      { label: 'Just a couple of hours', value: 'short' },
      { label: 'Half a day', value: 'half' },
      { label: 'The whole day', value: 'full' },
    ],
  },
  {
    q: "Who's coming with you?",
    key: 'company',
    options: [
      { label: 'Going alone', value: 'solo' },
      { label: 'With friends', value: 'friends' },
    ],
  },
  {
    q: 'How far are you willing to go?',
    key: 'distance',
    options: [
      { label: 'Keep it nearby', value: 'near' },
      { label: "Up to an hour's drive", value: 'medium' },
      { label: 'Anywhere in Skåne', value: 'far' },
    ],
  },
  {
    q: "What's your budget for the day?",
    key: 'budget',
    options: [
      { label: 'Keep it cheap', value: 'low' },
      { label: 'Happy to spend a bit more', value: 'flex' },
    ],
  },
];

let answers = {};
let step = 0;
let screen = 'intro'; // 'intro' -> 'quiz' -> 'results' | 'all' | 'currency'
let preCurrencyScreen = 'results';
let currencyMode = 'sek'; // 'sek' or a currency code like 'EUR'
let fxRate = null;
let fxError = false;

const card = document.getElementById('card');

const CURRENCY_SYMBOLS = {
  EUR: '€',
  USD: '$',
  GBP: '£',
  DKK: 'kr',
  NOK: 'kr',
};

function currencyLabel() {
  return currencyMode === 'sek'
    ? 'Currency: SEK only'
    : `Currency: SEK + ${currencyMode}`;
}

function formatPrice(avgSEK) {
  if (avgSEK === 0) return 'Free';
  let out = `~${avgSEK} kr`;
  if (currencyMode !== 'sek' && fxRate) {
    const converted = avgSEK * fxRate;
    const symbol = CURRENCY_SYMBOLS[currencyMode] || currencyMode + ' ';
    const decimals = converted < 20 ? 2 : 0;
    out += ` (~${symbol}${converted.toFixed(decimals)})`;
  }
  return out;
}

async function fetchRate(code) {
  // Try provider 1: open.er-api.com (all currencies, no key)
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/SEK');
    if (res.ok) {
      const data = await res.json();
      if (data && data.rates && data.rates[code]) {
        fxRate = data.rates[code];
        return true;
      }
    }
  } catch (e) {
    /* try next provider */
  }

  // Try provider 2: Frankfurter (ECB-backed, no key, covers major currencies)
  try {
    const res2 = await fetch(
      `https://api.frankfurter.app/latest?from=SEK&to=${code}`,
    );
    if (res2.ok) {
      const data2 = await res2.json();
      if (data2 && data2.rates && data2.rates[code] !== undefined) {
        fxRate = data2.rates[code];
        return true;
      }
    }
  } catch (e) {
    /* both failed */
  }

  return false;
}

function renderFetchingRate() {
  card.innerHTML = `<div class="question">Getting exchange rate…</div>`;
}

function renderManualRateFallback(code) {
  card.innerHTML = `
    <div class="qnum">Couldn't reach a live rate</div>
    <div class="question">This sandbox may be blocking outside network calls. Enter today's rate yourself, or skip conversion.</div>
    <p class="sub" style="margin-bottom:14px;">How many ${code} does 1 Swedish krona (SEK) buy? (e.g. 0.087 for EUR)</p>
    <div class="custom-currency">
      <input type="text" inputmode="decimal" placeholder="e.g. 0.087" id="manualRate">
      <button id="manualGo">Use this</button>
    </div>
    <div class="action-row">
      <button class="restart secondary" id="skipConversion">Just show SEK instead</button>
    </div>
  `;
  document.getElementById('manualGo').addEventListener('click', () => {
    const val = parseFloat(document.getElementById('manualRate').value);
    if (!val || val <= 0) return;
    fxRate = val;
    fxError = false;
    finishCurrencyStep();
  });
  document.getElementById('skipConversion').addEventListener('click', () => {
    currencyMode = 'sek';
    fxError = false;
    finishCurrencyStep();
  });
}

function finishCurrencyStep() {
  if (preCurrencyScreen === 'all') {
    screen = 'all';
    renderAllActivities();
  } else {
    screen = 'results';
    renderResults();
  }
}

function renderCurrencyStep() {
  preCurrencyScreen = screen;
  screen = 'currency';
  card.innerHTML = `
    <div class="qnum">Prices</div>
    <div class="question">How would you like to see prices?</div>
    <div class="options">
      <button class="opt" data-code="sek">Just show SEK (Swedish kronor)</button>
      <button class="opt" data-code="EUR">Also convert to euros (EUR)</button>
      <button class="opt" data-code="USD">Also convert to US dollars (USD)</button>
      <button class="opt" data-code="GBP">Also convert to British pounds (GBP)</button>
      <button class="opt" data-code="DKK">Also convert to Danish kroner (DKK)</button>
    </div>
    <div id="customCurrencyWrap"></div>
    <div class="action-row">
      <button class="restart secondary" id="cancelCurrency">Cancel</button>
    </div>
  `;

  document
    .getElementById('cancelCurrency')
    .addEventListener('click', finishCurrencyStep);

  card.querySelectorAll('.opt').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const code = btn.dataset.code;
      if (code === 'other') {
        const wrap = document.getElementById('customCurrencyWrap');
        wrap.innerHTML = `
          <div class="custom-currency">
            <input type="text" maxlength="3" placeholder="e.g. PLN, INR, CNY" id="customCode">
            <button id="customGo">Use this</button>
          </div>
        `;
        document
          .getElementById('customGo')
          .addEventListener('click', async () => {
            const val = document
              .getElementById('customCode')
              .value.trim()
              .toUpperCase();
            if (val.length !== 3) return;
            currencyMode = val;
            renderFetchingRate();
            const ok = await fetchRate(val);
            if (ok) {
              fxError = false;
              finishCurrencyStep();
            } else {
              fxError = true;
              renderManualRateFallback(val);
            }
          });
        return;
      }
      if (code === 'sek') {
        currencyMode = 'sek';
        finishCurrencyStep();
      } else {
        currencyMode = code;
        renderFetchingRate();
        const ok = await fetchRate(code);
        if (ok) {
          fxError = false;
          finishCurrencyStep();
        } else {
          fxError = true;
          renderManualRateFallback(code);
        }
      }
    });
  });
}

function renderIntro() {
  screen = 'intro';
  card.innerHTML = `
    <div class="qnum">Welcome</div>
    <div class="question">Find your next Skåne adventure</div>
    <p class="sub" style="margin-bottom:22px;">Answer 5 quick questions about the kind of day you're after, and get a few solid picks from the Skåne bucket list — beaches, hikes, castles, food, and more — with a rough idea of what they'll cost.</p>
    <div class="options">
      <button class="opt" id="startBtn">Let's go →</button>
    </div>
  `;
  document.getElementById('startBtn').addEventListener('click', () => {
    screen = 'quiz';
    step = 0;
    renderQuestion();
  });
}

function renderQuestion() {
  const total = questions.length;
  const pct = Math.round((step / total) * 100);

  const q = questions[step];
  card.innerHTML = `
    <div class="qnum">Question ${step + 1} of ${total}</div>
    <div class="question">${q.q}</div>
    <div class="options">
      ${q.options.map((o) => `<button class="opt" data-value="${o.value}">${o.label}</button>`).join('')}
    </div>
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
  `;

  card.querySelectorAll('.opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      answers[q.key] = btn.dataset.value;
      step++;
      if (step < questions.length) {
        renderQuestion();
      } else {
        screen = 'results';
        renderResults();
      }
    });
  });
}

function pickCount() {
  if (answers.time === 'short') return 1;
  if (answers.time === 'half') return 2;
  return 3;
}

function buildResults() {
  const mood = answers.mood;
  let primary = places[mood] ? [...places[mood]] : [];
  const count = pickCount();

  // Budget preference: if keeping it cheap, favor low-cost picks first;
  // if flexible, no filtering needed since flex covers everything.
  if (answers.budget === 'low') {
    primary.sort(
      (a, b) => (a.cost === 'low' ? 0 : 1) - (b.cost === 'low' ? 0 : 1),
    );
  }

  // When someone is going alone, prefer activities marked as solo-friendly.
  if (answers.company === 'solo' && mood !== 'alone') {
    primary.sort(
      (a, b) =>
        (a.categories.includes('alone') ? 0 : 1) -
        (b.categories.includes('alone') ? 0 : 1),
    );
  }

  // If no options or not a lot are found, shows some near-by options
  let extra = [];
  if (primary.length < count) {
    extra = sights.filter((sight) => !sight.categories.includes(mood));
    if (answers.budget === 'low') {
      extra.sort(
        (a, b) => (a.cost === 'low' ? 0 : 1) - (b.cost === 'low' ? 0 : 1),
      );
    }
  }

  let picks = primary.slice(0, count);
  if (picks.length < count) {
    picks = picks.concat(extra.slice(0, count - picks.length));
  }
  return picks;
}

const CATEGORY_LABELS = {
  coast: 'Coast',
  nature: 'Nature',
  culture: 'Culture',
  cities: 'Cities & towns',
  fun: 'Fun adventure',
  alone: 'Good alone',
  food: 'Food',
  daytrip: 'Day trip',
};

function resultItemHTML(p) {
  const infoLink = p.url
    ? `<a class="result-link" href="${p.url}" target="_blank" rel="noopener noreferrer">Official info ↗</a>`
    : '';
  const categoryTags = p.categories
    .map((category) => `<span>${CATEGORY_LABELS[category]}</span>`)
    .join('');

  return `
    <div class="result-item">
      <div class="result-tag">${p.tag}</div>
      <div class="result-body">
        <strong>${p.name} <span class="cost-badge ${p.cost}">${formatPrice(p.avgSEK)}</span></strong>
        <span>${p.note}</span>
        <div class="category-tags">${categoryTags}</div>
        ${infoLink}
      </div>
    </div>
  `;
}

function renderResults() {
  const picks = buildResults();
  const moodLabel = {
    coast: 'a day by the water',
    nature: 'an active day outdoors',
    culture: 'some history and old streets',
    cities: 'a city or charming town to explore',
    fun: 'bowling, games or a fun adventure',
    alone: 'something enjoyable to do on your own',
    food: 'good food and fika',
    daytrip: 'a day trip somewhere new',
  }[answers.mood];
  const budgetNote =
    answers.budget === 'low'
      ? 'keeping costs low'
      : 'open to spending a bit more';

  card.innerHTML = `
    <div class="results">
      <h2>Your Skåne picks</h2>
      <p class="sub">Sounds like you're after ${moodLabel}, ${budgetNote}. Here's what fits:</p>
      ${picks.map(resultItemHTML).join('')}
      <div class="action-row">
        <button class="restart" id="restart">Start over</button>
        <button class="restart secondary" id="seeAll">See every activity</button>
        <button class="restart secondary" id="openCurrency">${currencyLabel()}</button>
      </div>
    </div>
  `;
  document.getElementById('restart').addEventListener('click', resetAll);
  document
    .getElementById('seeAll')
    .addEventListener('click', renderAllActivities);
  document
    .getElementById('openCurrency')
    .addEventListener('click', renderCurrencyStep);
}

function renderAllActivities() {
  screen = 'all';
  const groupOrder = [
    'coast',
    'nature',
    'culture',
    'cities',
    'fun',
    'alone',
    'food',
    'daytrip',
  ];
  const groupTitles = {
    coast: 'Coast & beaches',
    nature: 'Nature & hiking',
    culture: 'History & culture',
    cities: 'Explore cities & towns',
    fun: 'Fun adventures & games',
    alone: 'Good to do alone',
    food: 'Food & fika',
    daytrip: 'Day trips',
  };

  card.innerHTML = `
    <div class="results all-list">
      <h2>Every activity on the list</h2>
      <p class="sub">The full Skåne bucket list, grouped by category.</p>
      ${groupOrder
        .map(
          (key) => `
        <div class="group-title">${groupTitles[key]}</div>
        ${places[key].map(resultItemHTML).join('')}
      `,
        )
        .join('')}
      <div class="action-row">
        <button class="restart" id="backToResults">Back to my picks</button>
        <button class="restart secondary" id="restart2">Start over</button>
        <button class="restart secondary" id="openCurrency2">${currencyLabel()}</button>
      </div>
    </div>
  `;
  document.getElementById('restart2').addEventListener('click', resetAll);
  document.getElementById('backToResults').addEventListener('click', () => {
    screen = 'results';
    renderResults();
  });
  document
    .getElementById('openCurrency2')
    .addEventListener('click', renderCurrencyStep);
}

function resetAll() {
  answers = {};
  step = 0;
  screen = 'quiz';
  renderQuestion();
}

renderIntro();
