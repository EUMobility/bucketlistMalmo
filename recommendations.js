(function exposeRecommendationEngine(root) {
  const TIME_LIMITS = { short: 120, half: 300, full: 720 };
  const BUDGET_LIMITS = { free: 0, 150: 150, 400: 400, flex: Infinity };
  const TRANSPORT_LABELS = {
    walk: 'walking',
    bike: 'bike',
    transit: 'public transport',
    car: 'car'
  };

  function splitSituation(value = 'either-either') {
    const [setting = 'either', company = 'either'] = value.split('-');
    return { setting, company };
  }

  function estimateActivity(sight, answers) {
    const trip = sight.planning.travel[answers.transport];
    if (!trip) return null;

    return {
      travelMinutes: trip.minutes,
      totalMinutes: sight.planning.activityMinutes + trip.minutes * 2,
      totalCostSEK: sight.avgSEK + trip.costSEK
    };
  }

  function practicalMismatches(sight, answers, estimate) {
    const mismatches = [];
    const timeLimit = TIME_LIMITS[answers.time];
    const budgetLimit = BUDGET_LIMITS[answers.budget];

    if (!estimate) {
      mismatches.push(`not practical by ${TRANSPORT_LABELS[answers.transport]}`);
      return mismatches;
    }
    if (estimate.totalMinutes > timeLimit) {
      mismatches.push('needs more time than selected');
    }
    if (estimate.totalCostSEK > budgetLimit) {
      mismatches.push('costs more than the selected budget');
    }
    return mismatches;
  }

  function stableNoise(name, seed) {
    let hash = Number(seed) || 1;
    for (let i = 0; i < name.length; i += 1) {
      hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
    }
    return (hash % 1000) / 1000;
  }

  function preferenceScore(sight, answers, estimate, seed) {
    const { setting, company } = splitSituation(answers.situation);
    const timeLimit = TIME_LIMITS[answers.time];
    const budgetLimit = BUDGET_LIMITS[answers.budget];
    let score = stableNoise(sight.name, seed) * 3;

    if (answers.interest === 'surprise') {
      score += stableNoise(sight.name, Number(seed) + 97) * 35;
    } else if (sight.planning.interests.includes(answers.interest)) {
      score += 45;
    }

    if (setting === 'either') score += 8;
    else if (sight.planning.setting === setting) score += 20;
    else if (sight.planning.setting === 'either') score += 13;

    if (company === 'either') score += 6;
    else if (sight.planning.company.includes(company)) score += 16;

    if (estimate) {
      const timeUse = estimate.totalMinutes / timeLimit;
      score += Math.max(0, 12 - Math.abs(0.7 - timeUse) * 12);
      if (budgetLimit !== Infinity && estimate.totalCostSEK <= budgetLimit) {
        score += 6 * (1 - estimate.totalCostSEK / Math.max(1, budgetLimit));
      }
    }

    if (sight.planning.destination === 'Malmö') score += 4;
    return score;
  }

  function buildReasons(sight, answers) {
    const { setting, company } = splitSituation(answers.situation);
    const reasons = [];

    if (
      answers.interest !== 'surprise' &&
      sight.planning.interests.includes(answers.interest)
    ) {
      reasons.push('matches what sounds fun');
    }
    if (
      setting !== 'either' &&
      (sight.planning.setting === setting || sight.planning.setting === 'either')
    ) {
      reasons.push(`${setting}-friendly`);
    }
    if (company !== 'either' && sight.planning.company.includes(company)) {
      reasons.push(company === 'alone' ? 'good on your own' : 'good with people');
    }
    if (sight.planning.destination === 'Malmö') reasons.push('stays in Malmö');
    return reasons.slice(0, 2);
  }

  function fallbackPenalty(sight, answers, estimate) {
    const timeLimit = TIME_LIMITS[answers.time];
    const budgetLimit = BUDGET_LIMITS[answers.budget];
    if (!estimate) return 100000;

    const extraMinutes = Math.max(0, estimate.totalMinutes - timeLimit);
    const extraCost =
      budgetLimit === Infinity
        ? 0
        : Math.max(0, estimate.totalCostSEK - budgetLimit);
    return extraMinutes * 10 + extraCost * 4;
  }

  function recommend(sights, answers, options = {}) {
    const count = options.count || 3;
    const seed = options.seed || 1;
    const evaluated = sights.map((sight) => {
      const estimate = estimateActivity(sight, answers);
      const mismatches = practicalMismatches(sight, answers, estimate);
      return {
        sight,
        estimate,
        mismatches,
        score: preferenceScore(sight, answers, estimate, seed),
        reasons: buildReasons(sight, answers)
      };
    });

    const exact = evaluated
      .filter((item) => item.mismatches.length === 0)
      .sort((a, b) => b.score - a.score);

    if (exact.length > 0) {
      return {
        picks: exact.slice(0, count),
        exact: true,
        totalExact: exact.length
      };
    }

    const closest = evaluated
      .filter((item) => item.estimate)
      .sort((a, b) => {
        const penaltyDifference =
          fallbackPenalty(a.sight, answers, a.estimate) -
          fallbackPenalty(b.sight, answers, b.estimate);
        return penaltyDifference || b.score - a.score;
      });

    return { picks: closest.slice(0, count), exact: false, totalExact: 0 };
  }

  const engine = {
    TIME_LIMITS,
    BUDGET_LIMITS,
    TRANSPORT_LABELS,
    estimateActivity,
    practicalMismatches,
    recommend,
    splitSituation
  };

  root.RecommendationEngine = engine;
  if (typeof module !== 'undefined' && module.exports) module.exports = engine;
})(typeof window !== 'undefined' ? window : globalThis);
