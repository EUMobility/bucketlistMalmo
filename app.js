let answers = {};
let step = 0;
let screen = 'intro'; // 'intro' -> 'quiz' -> 'results' | 'all' | 'currency'
let preCurrencyScreen = 'results';
let currencyMode = 'sek'; // 'sek' or a currency code like 'EUR'
let fxRate = null;
let fxError = false;
let lastPicks = {};

const card = document.getElementById('card');

const CURRENCY_SYMBOLS = {
  EUR: '€',
  USD: '$',
  GBP: '£',
  DKK: 'kr',
  NOK: 'kr'
};

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

const SIGHT_COORDS = {
  'Skanör sea bath': { lat: 55.4172, lng: 12.8358 },
  'Lomma beach': { lat: 55.6744, lng: 13.0645 },
  'Hovs Hallar': { lat: 56.4522, lng: 12.7118 },
  Kullaberg: { lat: 56.3039, lng: 12.4533 },
  'Sandhammaren beach': { lat: 55.3881, lng: 14.1947 },
  Smygehuk: { lat: 55.3389, lng: 13.3581 },
  'Söderåsen National Park': { lat: 56.0333, lng: 13.25 },
  'Stenshuvud National Park': { lat: 55.6592, lng: 14.2742 },
  'Naturum Vattenriket, Kristianstad': { lat: 56.0272, lng: 14.1533 },
  'Krapperup Castle': { lat: 56.2611, lng: 12.5306 },
  'Lund university area': { lat: 55.7058, lng: 13.1932 },
  'Malmöhus Castle': { lat: 55.605, lng: 12.988 },
  "Ales stenar (Ale's Stones)": { lat: 55.3828, lng: 14.0544 },
  'Foteviken Museum (Viking Reserve)': { lat: 55.4706, lng: 12.9567 },
  'Västra Hamnen & Turning Torso': { lat: 55.6133, lng: 12.9764 },
  Scaniaparken: { lat: 55.6158, lng: 12.9731 },
  'Lilla Torg & Gamla Väster': { lat: 55.6048, lng: 12.9972 },
  Möllevångstorget: { lat: 55.5919, lng: 13.0078 },
  'Multilevel zipline, Sandakra (near Hässleholm)': {
    lat: 56.1211,
    lng: 13.7822
  },
  'Lilla Torg food market, Malmö': { lat: 55.6048, lng: 12.9972 },
  'Fika in Gamla Väster': { lat: 55.6048, lng: 12.9972 },
  "Ystad's cafés and bakeries": { lat: 55.4294, lng: 13.82 },
  'Kristianstad food scene': { lat: 56.0312, lng: 14.1528 },
  'Ystad old town': { lat: 55.4294, lng: 13.82 },
  Simrishamn: { lat: 55.5556, lng: 14.3486 },
  Åhus: { lat: 55.925, lng: 14.2958 },
  'Cycle around Ven island': { lat: 55.9056, lng: 12.6986 },
  Helsingborg: { lat: 56.0467, lng: 12.6944 },
  'Kristianstad & Ivö': { lat: 56.1222, lng: 14.4056 },
  'Nyhavn & a canal tour': { lat: 55.6797, lng: 12.5914 },
  'Tivoli Gardens': { lat: 55.6736, lng: 12.5681 },
  'Rosenborg Castle & the Crown Jewels': { lat: 55.6858, lng: 12.5772 },
  'Torvehallerne food market': { lat: 55.6836, lng: 12.5694 },
  'Freetown Christiania': { lat: 55.6733, lng: 12.5983 },
  'Strøget & the Round Tower': { lat: 55.6814, lng: 12.5758 },
  'The Little Mermaid statue': { lat: 55.689, lng: 12.5992 },
  'Watch a film at Panora': { lat: 55.5936, lng: 13.0031 },
  'Browse Emporia or Triangeln': { lat: 55.5644, lng: 12.9733 },
  'Bowling and games at Big Bowl': { lat: 55.6033, lng: 13.0233 },
  "O'Learys Entré game room": { lat: 55.6067, lng: 13.0217 },
  'Play pool at Interpool Malmö': { lat: 55.6022, lng: 13.0014 },
  Stapelbäddsparken: { lat: 55.6144, lng: 12.9786 },
  'Try a Kul i Malmö activity': { lat: 55.6, lng: 13.0 },
  'Borrow sports gear at Fritidsbanken': { lat: 55.5808, lng: 12.9939 },
  'Malmö Konsthall': { lat: 55.5956, lng: 13.0008 },
  'Disgusting Food Museum': { lat: 55.6061, lng: 12.9997 },
  'Explore Malmö by bike': { lat: 55.605, lng: 12.988 },
  'Högevall adventure pool': { lat: 55.7003, lng: 13.1869 },
  'Lund Botanical Garden': { lat: 55.7042, lng: 13.2025 },
  'Check Lund student events': { lat: 55.7058, lng: 13.1932 },
  'Take the train to Copenhagen': { lat: 55.6728, lng: 12.5647 }
};

const RAINY_SIGHTS = [
  'Watch a film at Panora',
  'Browse Emporia or Triangeln',
  'Bowling and games at Big Bowl',
  "O'Learys Entré game room",
  'Play pool at Interpool Malmö',
  'Malmö Konsthall',
  'Disgusting Food Museum',
  'Högevall adventure pool',
  'Torvehallerne food market',
  'Rosenborg Castle & the Crown Jewels',
  'Malmöhus Castle',
  'Fika in Gamla Väster',
  'Lilla Torg food market, Malmö',
  "Ystad's cafés and bakeries",
  'Kristianstad food scene'
];

function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

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
    renderCustomPicks(
      lastPicks.title || 'Your Skåne picks',
      lastPicks.sub || 'Here is what fits:',
      lastPicks.items || []
    );
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
    <p class="sub" style="margin-bottom:20px;">Answer 4 quick questions to get picks from your Skåne bucket list.</p>

    <div class="options" style="margin-bottom:28px;">
      <button class="opt primary-cta" id="startBtn">Take Quiz →</button>
    </div>

    <div class="qnum" style="opacity:0.6; font-size:0.85rem; margin-bottom:17px;">OR QUICK START</div>
    <div class="shortcuts-list">
      <button class="opt subtle-shortcut" id="nearbyBtn">Give me something nearby</button>
      <button class="opt subtle-shortcut" id="rainBtn">It's raining - what can I do?</button>
      <button class="opt subtle-shortcut" id="surpriseBtn">Surprise me</button>
      <button class="opt subtle-shortcut" id="allSightsBtn">All sights</button>
    </div>
  `;

  document.getElementById('startBtn').addEventListener('click', () => {
    screen = 'quiz';
    step = 0;
    renderQuestion();
  });

  document
    .getElementById('nearbyBtn')
    .addEventListener('click', handleNearbyShortcut);
  document
    .getElementById('rainBtn')
    .addEventListener('click', handleRainShortcut);
  document
    .getElementById('surpriseBtn')
    .addEventListener('click', handleSurpriseShortcut);
  document
    .getElementById('allSightsBtn')
    .addEventListener('click', renderAllActivities);
}

function handleNearbyShortcut() {
  card.innerHTML = `
    <div class="qnum">Location</div>
    <div class="question">Finding sights near you…</div>
    <p class="sub">Please confirm the location permission in your browser.</p>
  `;

  if (!navigator.geolocation) {
    card.innerHTML = `
      <div class="question">Geolocation is not supported by your browser.</div>
      <div class="action-row"><button class="restart" id="backBtn">Back</button></div>
    `;
    document.getElementById('backBtn').addEventListener('click', renderIntro);
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const userLat = pos.coords.latitude;
      const userLng = pos.coords.longitude;

      const sightsWithDist = sights.map((s) => {
        const coords = SIGHT_COORDS[s.name];
        const dist = coords
          ? getDistanceKm(userLat, userLng, coords.lat, coords.lng)
          : Infinity;
        return { ...s, distanceKm: dist };
      });

      sightsWithDist.sort((a, b) => a.distanceKm - b.distanceKm);
      const closest = sightsWithDist.slice(0, 3);

      renderCustomPicks(
        'Nearby picks',
        'Here are the sights closest to your current location:',
        closest
      );
    },
    () => {
      card.innerHTML = `
        <div class="qnum">Location Access</div>
        <div class="question">Could not get location</div>
        <p class="sub">Location access was denied or failed. You can still use the quiz or other shortcuts.</p>
        <div class="action-row"><button class="restart" id="backBtn">Back</button></div>
      `;
      document.getElementById('backBtn').addEventListener('click', renderIntro);
    },
    { maximumAge: 60000, timeout: 10000 }
  );
}

function handleRainShortcut() {
  const indoor = sights.filter((s) => RAINY_SIGHTS.includes(s.name));
  const shuffled = [...indoor].sort(() => 0.5 - Math.random());
  renderCustomPicks(
    'Rainy day options',
    'Stay dry with these indoor-friendly spots:',
    shuffled.slice(0, 3)
  );
}

function handleSurpriseShortcut() {
  const shuffled = [...sights].sort(() => 0.5 - Math.random());
  renderCustomPicks(
    'Surprise picks',
    'Here are 3 random spots from the bucket list:',
    shuffled.slice(0, 3)
  );
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

function resultItemHTML(p) {
  const infoLink = p.url
    ? `<a class="result-link" href="${p.url}" target="_blank" rel="noopener noreferrer">More info ↗</a>`
    : '';
  const categoryTags = p.categories
    .map((category) => `<span>${CATEGORY_LABELS[category] || category}</span>`)
    .join('');
  const distTag =
    p.distanceKm !== undefined && p.distanceKm !== Infinity
      ? ` <span class="cost-badge low">~${p.distanceKm.toFixed(1)} km</span>`
      : '';

  return `
    <div class="result-item">
      <div class="result-tag">${p.tag}</div>
      <div class="result-body">
        <strong>${p.name} <span class="cost-badge ${p.cost}">${formatPrice(p.avgSEK)}</span>${distTag}</strong>
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

  renderCustomPicks(
    'Your Skåne picks',
    `Sounds like you're after ${moodLabel}, ${budgetNote}. Here's what fits:`,
    picks
  );
}

function renderCustomPicks(title, subtitle, picks) {
  screen = 'results';
  lastPicks = { title, sub: subtitle, items: picks };

  card.innerHTML = `
    <div class="results">
      <h2>${title}</h2>
      <p class="sub">${subtitle}</p>
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

  const hasPicks = lastPicks && lastPicks.items && lastPicks.items.length > 0;

  // Wenn Ergebnisse da sind: "Back to picks" + "Start over". Sonst nur "Back to start".
  const buttonsHTML = hasPicks
    ? `
      <button class="restart" id="backToResults">Back to picks</button>
      <button class="restart secondary" id="restart2">Start over</button>
    `
    : `
      <button class="restart" id="backToStart">Back to start</button>
    `;

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
        ${buttonsHTML}
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

  if (hasPicks) {
    document.getElementById('backToResults').addEventListener('click', () => {
      renderCustomPicks(lastPicks.title, lastPicks.sub, lastPicks.items);
    });
    document.getElementById('restart2').addEventListener('click', resetAll);
  } else {
    document.getElementById('backToStart').addEventListener('click', resetAll);
  }

  document
    .getElementById('openCurrency2')
    .addEventListener('click', renderCurrencyStep);
}

function resetAll() {
  answers = {};
  step = 0;
  lastPicks = {};
  renderIntro();
}

renderIntro();
