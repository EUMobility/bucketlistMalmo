const questions = [
  {
    q: 'What kind of day are you after?',
    key: 'mood',
    options: [
      { label: 'Relax by the water', value: 'coast' },
      { label: 'An active hike outdoors', value: 'nature' },
      { label: 'Castles and old history', value: 'culture' },
      { label: 'City energy in Malmö', value: 'city' },
      { label: 'An adrenaline rush', value: 'adventure' },
      { label: 'Food, markets and fika', value: 'food' },
      { label: 'A charming small town', value: 'towns' },
      { label: 'A day trip somewhere new', value: 'daytrip' },
      { label: 'A day exploring Copenhagen', value: 'copenhagen' },
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

const places = {
  coast: [
    {
      tag: 'Coast',
      name: 'Skanör sea bath',
      note: 'Classic seaside dip, easygoing and close to town.',
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Coast',
      name: 'Lomma beach',
      note: 'Wide sandy stretch, good for a lazy afternoon.',
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Coast',
      name: 'Hovs Hallar',
      note: 'Dramatic cliffs and pebble coves for a walk by the sea.',
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Coast',
      name: 'Kullaberg',
      note: "Rocky headland with some of Skåne's best sea views.",
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Coast',
      name: 'Sandhammaren beach',
      note: "One of Sweden's best-loved stretches of soft white sand.",
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Coast',
      name: 'Smygehuk',
      note: "Sweden's southernmost point, with a lighthouse and open sea views.",
      cost: 'low',
      avgSEK: 0,
    },
  ],
  nature: [
    {
      tag: 'Nature',
      name: 'Söderåsen National Park',
      note: 'Deep ravines and beech forest, great for a real hike.',
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Nature',
      name: 'Stenshuvud National Park',
      note: 'Coastal hill with mixed forest and beach views.',
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Nature',
      name: 'Kullaberg nature reserve',
      note: 'Trails along dramatic cliffside nature.',
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Nature',
      name: 'Hovs Hallar',
      note: 'Short scenic trails along a rocky shoreline.',
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Nature',
      name: 'Naturum Vattenriket, Kristianstad',
      note: 'Wetland nature reserve, good for birdlife and easy trails.',
      cost: 'low',
      avgSEK: 0,
    },
  ],
  culture: [
    {
      tag: 'History',
      name: 'Krapperup Castle',
      note: 'Historic castle grounds and gardens to wander.',
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'History',
      name: 'Lund university area',
      note: 'Old university town, cathedral and cobbled streets.',
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'History',
      name: 'Malmöhus Castle',
      note: "Sweden's oldest surviving renaissance fortress, right in Malmö.",
      cost: 'low',
      avgSEK: 60,
    },
    {
      tag: 'History',
      name: "Ales stenar (Ale's Stones)",
      note: 'A striking Iron Age stone-ship monument above the coast in Österlen.',
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'History',
      name: 'Foteviken Museum (Viking Reserve)',
      note: 'Reconstructed Viking-age village you can walk through, near Höllviken.',
      cost: 'flex',
      avgSEK: 100,
    },
  ],
  city: [
    {
      tag: 'Malmö',
      name: 'Västra Hamnen & Turning Torso',
      note: "Modern waterfront district with Sweden's tallest building.",
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Malmö',
      name: 'Scaniaparken',
      note: 'Relaxed city park, good for a stroll or a picnic.',
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Malmö',
      name: 'Lilla Torg & Gamla Väster',
      note: "Malmö's cobbled old town square, cafés and colourful houses.",
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Malmö',
      name: 'Möllevångstorget',
      note: 'Lively multicultural square with a market and street food.',
      cost: 'low',
      avgSEK: 0,
    },
  ],
  adventure: [
    {
      tag: 'Adventure',
      name: 'Multilevel zipline, Sandakra (near Hässleholm)',
      note: 'Treetop zipline course for an adrenaline hit.',
      cost: 'flex',
      avgSEK: 499,
    },
  ],
  food: [
    {
      tag: 'Food',
      name: 'Lilla Torg food market, Malmö',
      note: "Stalls and cafés on one of Malmö's prettiest squares.",
      cost: 'flex',
      avgSEK: 150,
    },
    {
      tag: 'Food',
      name: 'Fika in Gamla Väster',
      note: "Coffee and cake in Malmö's oldest, coziest streets.",
      cost: 'low',
      avgSEK: 70,
    },
    {
      tag: 'Food',
      name: "Ystad's cafés and bakeries",
      note: 'Small-town fika stops among cobblestones and flowers.',
      cost: 'low',
      avgSEK: 70,
    },
    {
      tag: 'Food',
      name: 'Kristianstad food scene',
      note: 'Known for its chocolate, coffee spots and hearty dinners.',
      cost: 'flex',
      avgSEK: 150,
    },
  ],
  towns: [
    {
      tag: 'Town',
      name: 'Ystad old town',
      note: 'Cobbled streets, half-timbered houses, famous as the Wallander town.',
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Town',
      name: 'Simrishamn',
      note: 'Quiet fishing town on the Österlen coast, good for a slow wander.',
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Town',
      name: 'Åhus',
      note: 'Classic Swedish summer resort town with a long sandy beach.',
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Town',
      name: 'Smygehuk village',
      note: "Tiny village around Sweden's southernmost lighthouse.",
      cost: 'low',
      avgSEK: 0,
    },
  ],
  daytrip: [
    {
      tag: 'Day trip',
      name: 'Ven island',
      note: 'Bike around this small island in the Öresund, with farm shops and a distillery.',
      cost: 'flex',
      avgSEK: 300,
    },
    {
      tag: 'Day trip',
      name: 'Helsingborg',
      note: 'Harbour city with a hilltop keep, an easy train ride from Malmö.',
      cost: 'flex',
      avgSEK: 120,
    },
    {
      tag: 'Day trip',
      name: 'Kristianstad & Ivö',
      note: 'Wetlands, a limestone island, and a relaxed north-eastern base.',
      cost: 'flex',
      avgSEK: 150,
    },
  ],
  copenhagen: [
    {
      tag: 'Copenhagen',
      name: 'Nyhavn & a canal tour',
      note: 'Colourful harbourfront; boat tours run past the Opera House and the Little Mermaid.',
      cost: 'flex',
      avgSEK: 160,
    },
    {
      tag: 'Copenhagen',
      name: 'Tivoli Gardens',
      note: 'Historic amusement park right in the city centre, especially good at night.',
      cost: 'flex',
      avgSEK: 200,
    },
    {
      tag: 'Copenhagen',
      name: 'Rosenborg Castle & the Crown Jewels',
      note: 'Renaissance castle with the Danish crown jewels and a leafy royal garden.',
      cost: 'flex',
      avgSEK: 190,
    },
    {
      tag: 'Copenhagen',
      name: 'Torvehallerne food market',
      note: 'Glass-roofed market hall with dozens of Nordic food and coffee stalls.',
      cost: 'flex',
      avgSEK: 250,
    },
    {
      tag: 'Copenhagen',
      name: 'Freetown Christiania',
      note: 'Self-governing neighbourhood known for street art and a laid-back, alternative vibe.',
      cost: 'low',
      avgSEK: 0,
    },
    {
      tag: 'Copenhagen',
      name: 'Strøget & the Round Tower',
      note: "One of Europe's longest pedestrian streets, plus a climbable 17th-century tower.",
      cost: 'low',
      avgSEK: 60,
    },
    {
      tag: 'Copenhagen',
      name: 'The Little Mermaid statue',
      note: 'Iconic, famously small harbourside statue — worth a quick stop.',
      cost: 'low',
      avgSEK: 0,
    },
  ],
};

// Copenhagen is easily reached from Malmö by train (Öresundståg, roughly 35–40 minutes
// each way); its prices were originally in DKK and are converted here to rough SEK
// equivalents for consistency with the rest of the list.

// Note: prices are rough per-person averages (entry fees, a ferry/train ticket,
// or a typical fika/meal spend) to give a feel for cost, not a quote.

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

  // If no options or not a lot are found, shows some near-by options
  let extra = [];
  if (primary.length < count) {
    Object.keys(places).forEach((key) => {
      if (key !== mood) extra = extra.concat(places[key]);
    });
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

function resultItemHTML(p) {
  return `
    <div class="result-item">
      <div class="result-tag">${p.tag}</div>
      <div class="result-body">
        <strong>${p.name} <span class="cost-badge ${p.cost}">${formatPrice(p.avgSEK)}</span></strong>
        <span>${p.note}</span>
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
    city: 'city energy in Malmö',
    adventure: 'a bit of adrenaline',
    food: 'good food and fika',
    towns: 'a charming small town',
    daytrip: 'a day trip somewhere new',
    copenhagen: 'a day exploring Copenhagen',
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
    'city',
    'adventure',
    'food',
    'towns',
    'daytrip',
    'copenhagen',
  ];
  const groupTitles = {
    coast: 'Coast & beaches',
    nature: 'Nature & hiking',
    culture: 'History & culture',
    city: 'Malmö',
    adventure: 'Adventure',
    food: 'Food & fika',
    towns: 'Charming towns',
    daytrip: 'Day trips',
    copenhagen: 'Copenhagen',
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
