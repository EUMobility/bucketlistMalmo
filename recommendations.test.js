const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const engine = require('./recommendations.js');

const context = { console };
vm.createContext(context);
vm.runInContext(
  `${fs.readFileSync('./sights.js', 'utf8')}\nglobalThis.testSights = sights;`,
  context
);
const testSights = context.testSights;

assert.equal(testSights.length, 51);
assert.ok(testSights.every((sight) => sight.planning));

const scenarios = [
  {
    time: 'short',
    transport: 'walk',
    budget: 'free',
    situation: 'either-alone',
    interest: 'surprise'
  },
  {
    time: 'half',
    transport: 'transit',
    budget: '150',
    situation: 'indoor-alone',
    interest: 'culture'
  },
  {
    time: 'full',
    transport: 'car',
    budget: '400',
    situation: 'outdoor-people',
    interest: 'nature'
  }
];

for (const answers of scenarios) {
  const result = engine.recommend(testSights, answers, { seed: 42 });
  assert.ok(result.picks.length > 0);
  if (result.exact) {
    assert.ok(result.picks.every((pick) => pick.mismatches.length === 0));
  }
}

const values = {
  time: ['short', 'half', 'full'],
  transport: ['walk', 'bike', 'transit', 'car'],
  budget: ['free', '150', '400', 'flex'],
  situation: [
    'indoor-alone',
    'indoor-people',
    'outdoor-alone',
    'outdoor-people',
    'either-alone',
    'either-people',
    'either-either'
  ],
  interest: ['nature', 'food', 'culture', 'games', 'surprise']
};

let combinationCount = 0;
for (const time of values.time) {
  for (const transport of values.transport) {
    for (const budget of values.budget) {
      for (const situation of values.situation) {
        for (const interest of values.interest) {
          const answers = { time, transport, budget, situation, interest };
          const result = engine.recommend(testSights, answers, { seed: 42 });
          assert.ok(result.picks.length > 0);
          assert.ok(result.picks.length <= 3);
          if (result.exact) {
            assert.ok(result.picks.every((pick) => pick.mismatches.length === 0));
          } else {
            assert.ok(result.picks.every((pick) => pick.mismatches.length > 0));
          }
          combinationCount++;
        }
      }
    }
  }
}
assert.equal(combinationCount, 1680);

const impossible = engine.recommend(
  testSights,
  {
    time: 'short',
    transport: 'car',
    budget: 'free',
    situation: 'either-either',
    interest: 'surprise'
  },
  { seed: 42 }
);
assert.equal(impossible.exact, false);
assert.ok(impossible.picks.every((pick) => pick.mismatches.length > 0));

console.log(`Recommendation engine tests passed (${combinationCount} combinations).`);
