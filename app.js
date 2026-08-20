let answers = {};
let step = 0;
let screen = 'intro'; // 'intro' -> 'quiz' -> 'results' | 'all' | 'currency'
let preCurrencyScreen = 'results';
let currencyMode = 'sek'; // 'sek' or a currency code like 'EUR'
let fxRate = null;
let fxError = false;
let recommendationSeed = Date.now();

const card = document.getElementById('card');

const CURRENCY_SYMBOLS = {
  EUR: '€',
  USD: '$',
  GBP: '£',
  DKK: 'kr',
  NOK: 'kr'
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
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/SEK');
    if (res.ok) {
      const data = await res.json();
      if (data && data.rates && data.rates[code]) {
        fxRate = data.rates[code];
        return true;
      }
    }
  } catch (e) {}

  try {
    const res2 = await fetch(
      `https://api.frankfurter.app/latest?from=SEK&to=${code}`
    );
    if (res2.ok) {
      const data2 = await res2.json();
      if (data2 && data2.rates && data2.rates[code] !== undefined) {
        fxRate = data2.rates[code];
        return true;
      }
    }
  } catch (e) {}

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
    <p class="sub" style="margin-bottom:22px;">Answer 5 quick questions and get realistic ideas based on your total time, transport and budget — starting from Malmö.</p>
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
  const pct = Math.round(((step + 1) / total) * 100);

  const q = questions[step];
  card.innerHTML = `
    <div class="qnum">Question ${step + 1} of ${total}</div>
    <div class="question">${q.q}</div>
    ${q.hint ? `<p class="question-hint">${q.hint}</p>` : ''}
    <div class="options">
      ${q.options.map((o) => `<button class="opt" data-value="${o.value}">${o.label}</button>`).join('')}
    </div>
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    ${step > 0 ? '<button class="quiz-back" id="quizBack">← Back</button>' : ''}
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

  const backButton = document.getElementById('quizBack');
  if (backButton) {
    backButton.addEventListener('click', () => {
      step--;
      renderQuestion();
    });
  }
}

function buildResults() {
  return RecommendationEngine.recommend(sights, answers, {
    count: 3,
    seed: recommendationSeed
  });
}

const CATEGORY_LABELS = {
  coast: 'Coast',
  nature: 'Nature',
  culture: 'Culture',
  cities: 'Cities & towns',
  fun: 'Fun adventure',
  alone: 'Good alone',
  food: 'Food',
  daytrip: 'Day trip'
};

function formatMinutes(minutes) {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return remainder ? `${hours} hr ${remainder} min` : `${hours} hr`;
}

function resultItemHTML(item) {
  const rankedResult = item && item.sight;
  const p = rankedResult ? item.sight : item;
  const estimate = rankedResult ? item.estimate : null;
  const infoLink = p.url
    ? `<a class="result-link" href="${p.url}" target="_blank" rel="noopener noreferrer">More info ↗</a>`
    : '';
  const categoryTags = p.categories
    .map((category) => `<span>${CATEGORY_LABELS[category]}</span>`)
    .join('');
  const practicalDetails = estimate
    ? `<div class="practical-details">
        <span>About ${formatMinutes(estimate.totalMinutes)} total</span>
        <span>${estimate.travelMinutes} min each way</span>
        <span>${p.planning.destination}</span>
      </div>`
    : '';
  const reason =
    rankedResult && item.reasons.length
      ? `<p class="match-reason">Why it fits: ${item.reasons.join(' · ')}</p>`
      : '';
  const warning =
    rankedResult && item.mismatches.length
      ? `<p class="match-warning">Closest option: ${item.mismatches.join(' and ')}.</p>`
      : '';
  const displayedCost = estimate ? estimate.totalCostSEK : p.avgSEK;
  const displayedCostClass = displayedCost <= 150 ? 'low' : 'flex';

  return `
    <div class="result-item">
      <div class="result-tag">${p.tag}</div>
      <div class="result-body">
        <strong>${p.name} <span class="cost-badge ${displayedCostClass}">${formatPrice(displayedCost)}</span></strong>
        <span>${p.note}</span>
        ${practicalDetails}
        ${reason}
        ${warning}
        <div class="category-tags">${categoryTags}</div>
        ${infoLink}
      </div>
    </div>
  `;
}

function renderResults() {
  const result = buildResults();
  const transport = RecommendationEngine.TRANSPORT_LABELS[answers.transport];
  const resultMessage = result.exact
    ? `${result.totalExact} activities fit your practical limits. These are your best matches for going by ${transport}.`
    : `Nothing fits all three practical limits exactly. These are the closest options, with each compromise clearly marked.`;

  card.innerHTML = `
    <div class="results">
      <h2>Your Skåne picks</h2>
      <p class="sub">${resultMessage} Prices and travel times are approximate.</p>
      ${result.picks.map(resultItemHTML).join('')}
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
    'daytrip'
  ];
  const groupTitles = {
    coast: 'Coast & beaches',
    nature: 'Nature & hiking',
    culture: 'History & culture',
    cities: 'Explore cities & towns',
    fun: 'Fun adventures & games',
    alone: 'Good to do alone',
    food: 'Food & fika',
    daytrip: 'Day trips'
  };

  card.innerHTML = `
    <div class="results all-list">
      <h2>Every activity on the list</h2>
      <p class="sub">The full Skåne bucket list, grouped by category.</p>
      ${groupOrder
        .map(
          (key) => `
        <div class="category-group">
          <button class="group-header" data-key="${key}">
            <span>${groupTitles[key]} (${places[key] ? places[key].length : 0})</span>
            <span class="chevron">►</span>
          </button>
          <div class="group-content" id="group-${key}" style="display: none;">
            ${places[key] ? places[key].map(resultItemHTML).join('') : ''}
          </div>
        </div>
      `
        )
        .join('')}
      <div class="action-row">
        <button class="restart" id="backToResults">Back to my picks</button>
        <button class="restart secondary" id="restart2">Start over</button>
        <button class="restart secondary" id="openCurrency2">${currencyLabel()}</button>
      </div>
    </div>
  `;

  card.querySelectorAll('.group-header').forEach((btn) => {
    btn.addEventListener('click', () => {
      const content = card.querySelector(`#group-${btn.dataset.key}`);
      const chevron = btn.querySelector('.chevron');
      const isHidden = content.style.display === 'none';
      content.style.display = isHidden ? 'block' : 'none';
      chevron.textContent = isHidden ? '▼' : '►';
    });
  });

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
  recommendationSeed = Date.now();
  renderQuestion();
}

renderIntro();
