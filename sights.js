const initialPlaces = {
  coast: [
    {
      tag: 'Coast',
      name: 'Skanör sea bath',
      note: 'Classic seaside dip, easygoing and close to town.',
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Coast',
      name: 'Lomma beach',
      note: 'Wide sandy stretch, good for a lazy afternoon.',
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Coast',
      name: 'Hovs Hallar',
      note: 'Dramatic cliffs and pebble coves for a walk by the sea.',
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Coast',
      name: 'Kullaberg',
      note: "Rocky headland with some of Skåne's best sea views.",
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Coast',
      name: 'Sandhammaren beach',
      note: "One of Sweden's best-loved stretches of soft white sand.",
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Coast',
      name: 'Smygehuk',
      note: "Sweden's southernmost point, with a lighthouse and open sea views.",
      cost: 'low',
      avgSEK: 0
    }
  ],
  nature: [
    {
      tag: 'Nature',
      name: 'Söderåsen National Park',
      note: 'Deep ravines and beech forest, great for a real hike.',
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Nature',
      name: 'Stenshuvud National Park',
      note: 'Coastal hill with mixed forest and beach views.',
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Nature',
      name: 'Kullaberg',
      note: 'Trails along dramatic cliffside nature.',
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Nature',
      name: 'Hovs Hallar',
      note: 'Short scenic trails along a rocky shoreline.',
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Nature',
      name: 'Naturum Vattenriket, Kristianstad',
      note: 'Wetland nature reserve, good for birdlife and easy trails.',
      cost: 'low',
      avgSEK: 0
    }
  ],
  culture: [
    {
      tag: 'History',
      name: 'Krapperup Castle',
      note: 'Historic castle grounds and gardens to wander.',
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'History',
      name: 'Lund university area',
      note: 'Old university town, cathedral and cobbled streets.',
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'History',
      name: 'Malmöhus Castle',
      note: "Sweden's oldest surviving renaissance fortress, right in Malmö.",
      cost: 'low',
      avgSEK: 60
    },
    {
      tag: 'History',
      name: "Ales stenar (Ale's Stones)",
      note: 'A striking Iron Age stone-ship monument above the coast in Österlen.',
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'History',
      name: 'Foteviken Museum (Viking Reserve)',
      note: 'Reconstructed Viking-age village you can walk through, near Höllviken.',
      cost: 'flex',
      avgSEK: 100
    }
  ],
  city: [
    {
      tag: 'Malmö',
      name: 'Västra Hamnen & Turning Torso',
      note: "Modern waterfront district with Sweden's tallest building.",
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Malmö',
      name: 'Scaniaparken',
      note: 'Relaxed city park, good for a stroll or a picnic.',
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Malmö',
      name: 'Lilla Torg & Gamla Väster',
      note: "Malmö's cobbled old town square, cafés and colourful houses.",
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Malmö',
      name: 'Möllevångstorget',
      note: 'Lively multicultural square with a market and street food.',
      cost: 'low',
      avgSEK: 0
    }
  ],
  adventure: [
    {
      tag: 'Adventure',
      name: 'Multilevel zipline, Sandakra (near Hässleholm)',
      note: 'Treetop zipline course for an adrenaline hit.',
      cost: 'flex',
      avgSEK: 499
    }
  ],
  food: [
    {
      tag: 'Food',
      name: 'Lilla Torg food market, Malmö',
      note: "Stalls and cafés on one of Malmö's prettiest squares.",
      cost: 'flex',
      avgSEK: 150
    },
    {
      tag: 'Food',
      name: 'Fika in Gamla Väster',
      note: "Coffee and cake in Malmö's oldest, coziest streets.",
      cost: 'low',
      avgSEK: 70
    },
    {
      tag: 'Food',
      name: "Ystad's cafés and bakeries",
      note: 'Small-town fika stops among cobblestones and flowers.',
      cost: 'low',
      avgSEK: 70
    },
    {
      tag: 'Food',
      name: 'Kristianstad food scene',
      note: 'Known for its chocolate, coffee spots and hearty dinners.',
      cost: 'flex',
      avgSEK: 150
    }
  ],
  towns: [
    {
      tag: 'Town',
      name: 'Ystad old town',
      note: 'Cobbled streets, half-timbered houses, famous as the Wallander town.',
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Town',
      name: 'Simrishamn',
      note: 'Quiet fishing town on the Österlen coast, good for a slow wander.',
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Town',
      name: 'Åhus',
      note: 'Classic Swedish summer resort town with a long sandy beach.',
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Town',
      name: 'Smygehuk',
      note: "Tiny village around Sweden's southernmost lighthouse.",
      cost: 'low',
      avgSEK: 0
    }
  ],
  daytrip: [
    {
      tag: 'Day trip',
      name: 'Cycle around Ven island',
      note: 'Take the ferry from Landskrona and explore Ven on one of its famous yellow rental bikes.',
      cost: 'flex',
      avgSEK: 300
    },
    {
      tag: 'Day trip',
      name: 'Helsingborg',
      note: 'Harbour city with a hilltop keep, an easy train ride from Malmö.',
      cost: 'flex',
      avgSEK: 120
    },
    {
      tag: 'Day trip',
      name: 'Kristianstad & Ivö',
      note: 'Wetlands, a limestone island, and a relaxed north-eastern base.',
      cost: 'flex',
      avgSEK: 150
    }
  ],
  copenhagen: [
    {
      tag: 'Copenhagen',
      name: 'Nyhavn & a canal tour',
      note: 'Colourful harbourfront; boat tours run past the Opera House and the Little Mermaid.',
      cost: 'flex',
      avgSEK: 160
    },
    {
      tag: 'Copenhagen',
      name: 'Tivoli Gardens',
      note: 'Historic amusement park right in the city centre, especially good at night.',
      cost: 'flex',
      avgSEK: 200
    },
    {
      tag: 'Copenhagen',
      name: 'Rosenborg Castle & the Crown Jewels',
      note: 'Renaissance castle with the Danish crown jewels and a leafy royal garden.',
      cost: 'flex',
      avgSEK: 190
    },
    {
      tag: 'Copenhagen',
      name: 'Torvehallerne food market',
      note: 'Glass-roofed market hall with dozens of Nordic food and coffee stalls.',
      cost: 'flex',
      avgSEK: 250
    },
    {
      tag: 'Copenhagen',
      name: 'Freetown Christiania',
      note: 'Self-governing neighbourhood known for street art and a laid-back, alternative vibe.',
      cost: 'low',
      avgSEK: 0
    },
    {
      tag: 'Copenhagen',
      name: 'Strøget & the Round Tower',
      note: "One of Europe's longest pedestrian streets, plus a climbable 17th-century tower.",
      cost: 'low',
      avgSEK: 60
    },
    {
      tag: 'Copenhagen',
      name: 'The Little Mermaid statue',
      note: 'Iconic, famously small harbourside statue — worth a quick stop.',
      cost: 'low',
      avgSEK: 0
    }
  ]
};

// A sight can suit several moods. Keep each sight only once in the source data;
// the category lists used by the quiz are generated below.
const extraCategories = {
  'Skanör sea bath': ['nature', 'alone'],
  'Lomma beach': ['nature', 'alone'],
  'Hovs Hallar': ['coast', 'nature', 'alone'],
  Kullaberg: ['coast', 'nature', 'adventure'],
  'Sandhammaren beach': ['nature', 'alone'],
  Smygehuk: ['coast', 'towns', 'alone'],
  'Söderåsen National Park': ['alone', 'adventure'],
  'Stenshuvud National Park': ['coast', 'alone'],
  'Naturum Vattenriket, Kristianstad': ['daytrip', 'alone'],
  'Lund university area': ['lund', 'alone'],
  'Malmöhus Castle': ['city', 'alone'],
  "Ales stenar (Ale's Stones)": ['coast', 'nature', 'daytrip', 'alone'],
  'Västra Hamnen & Turning Torso': ['coast', 'alone'],
  Scaniaparken: ['coast', 'nature', 'alone'],
  'Lilla Torg & Gamla Väster': ['culture', 'food', 'alone'],
  Möllevångstorget: ['food', 'alone'],
  'Multilevel zipline, Sandakra (near Hässleholm)': ['fun', 'daytrip'],
  'Fika in Gamla Väster': ['city', 'alone'],
  'Ystad old town': ['culture', 'daytrip', 'alone'],
  Simrishamn: ['coast', 'daytrip', 'alone'],
  Åhus: ['coast', 'daytrip', 'alone'],
  'Cycle around Ven island': ['nature', 'fun', 'alone'],
  Helsingborg: ['towns', 'culture', 'alone'],
  'Kristianstad & Ivö': ['nature', 'towns', 'alone'],
  'Nyhavn & a canal tour': ['fun'],
  'Tivoli Gardens': ['fun', 'adventure'],
  'Rosenborg Castle & the Crown Jewels': ['culture', 'alone'],
  'Torvehallerne food market': ['food', 'alone'],
  'Freetown Christiania': ['culture', 'alone'],
  'Strøget & the Round Tower': ['culture', 'alone'],
  'The Little Mermaid statue': ['coast', 'alone']
};

const researchedSights = [
  {
    tag: 'Cinema',
    name: 'Watch a film at Panora',
    note: 'An independent cinema near Triangeln with arthouse films, special screenings and occasional English-friendly events.',
    cost: 'flex',
    avgSEK: 100,
    categories: ['alone', 'city', 'culture'],
    url: 'https://panora.se/'
  },
  {
    tag: 'Shopping',
    name: 'Browse Emporia or Triangeln',
    note: 'Easy indoor shopping, food and people-watching: Emporia is by Hyllie station and Triangeln is central.',
    cost: 'low',
    avgSEK: 0,
    categories: ['alone', 'city'],
    url: 'https://malmo.se/World-Floorball-Championships/Shopping.html'
  },
  {
    tag: 'Bowling',
    name: 'Bowling and games at Big Bowl',
    note: 'Bowling plus other games in Malmö. Visitors under 18 should go before 21:00 on Friday or Saturday.',
    cost: 'flex',
    avgSEK: 150,
    categories: ['fun', 'adventure', 'city'],
    url: 'https://bigbowl.se/'
  },
  {
    tag: 'Arcade',
    name: "O'Learys Entré game room",
    note: 'Bowling, shuffleboard, darts and a game room. Under-18s need a parent or legal guardian, so check before going.',
    cost: 'flex',
    avgSEK: 150,
    categories: ['fun', 'city'],
    url: 'https://olearys.com/sv-se/malmoe-entre/activities/'
  },
  {
    tag: 'Pool & darts',
    name: 'Play pool at Interpool Malmö',
    note: 'Billiards, darts and shuffleboard in central Malmö. The venue is 21+ after 19:00.',
    cost: 'flex',
    avgSEK: 140,
    categories: ['fun', 'city'],
    url: 'https://www.interpoolmalmo.com/'
  },
  {
    tag: 'Skate & climb',
    name: 'Stapelbäddsparken',
    note: 'A free outdoor skatepark in Västra Hamnen with bouldering rocks and space for roller sports.',
    cost: 'low',
    avgSEK: 0,
    categories: ['alone', 'fun', 'adventure', 'city'],
    url: 'https://malmo.se/Uppleva-och-gora/Natur-och-parker/Parker-i-Malmo/Stapelbaddsparken.html'
  },
  {
    tag: 'Free activities',
    name: 'Try a Kul i Malmö activity',
    note: 'Free drop-in sports, creative activities and events for young people up to age 25; check the live calendar first.',
    cost: 'low',
    avgSEK: 0,
    categories: ['alone', 'fun', 'city'],
    url: 'https://malmo.se/Kul-i-Malmo'
  },
  {
    tag: 'Free sport',
    name: 'Borrow sports gear at Fritidsbanken',
    note: 'Borrow sport and outdoor equipment free for two weeks from the Fritidsbanken inside Mobilia.',
    cost: 'low',
    avgSEK: 0,
    categories: ['alone', 'fun', 'city'],
    url: 'https://malmo.se/fritidsbanken'
  },
  {
    tag: 'Art',
    name: 'Malmö Konsthall',
    note: 'A spacious contemporary-art gallery beside Triangeln; a simple free activity for an hour on your own.',
    cost: 'low',
    avgSEK: 0,
    categories: ['alone', 'culture', 'city'],
    url: 'https://malmokonsthall.se/'
  },
  {
    tag: 'Odd museum',
    name: 'Disgusting Food Museum',
    note: 'A playful museum where you can see, smell and sometimes taste unusual foods from around the world.',
    cost: 'flex',
    avgSEK: 220,
    categories: ['alone', 'fun', 'culture', 'city'],
    url: 'https://disgustingfoodmuseum.com/malmo/'
  },
  {
    tag: 'Bike tour',
    name: 'Explore Malmö by bike',
    note: 'Rent a bike and make a self-guided loop through Ribersborg, Västra Hamnen, the old town and Folkets Park.',
    cost: 'flex',
    avgSEK: 150,
    categories: ['alone', 'fun', 'city', 'coast'],
    url: 'https://www.visitmalmo.se/en/see-do/'
  },
  {
    tag: 'Swimming',
    name: 'Högevall adventure pool',
    note: 'Lund indoor pool with long water slides, a wild-water channel and a wave pool.',
    cost: 'flex',
    avgSEK: 120,
    categories: ['alone', 'fun', 'adventure', 'lund'],
    url: 'https://visitlund.se/uppleva-och-gora/aktiviteter-och-natur/barnens-lund'
  },
  {
    tag: 'Garden',
    name: 'Lund Botanical Garden',
    note: 'A free green place for a walk, picnic or quiet break. The greenhouses are closed for renovation until spring 2027.',
    cost: 'low',
    avgSEK: 0,
    categories: ['alone', 'nature', 'culture', 'lund'],
    url: 'https://visitlund.se/uppleva-och-gora/aktiviteter-och-natur/barnens-lund'
  },
  {
    tag: 'Student life',
    name: 'Check Lund student events',
    note: 'Look for concerts, quizzes, games, sport and performances. Some nation events require Studentlund membership.',
    cost: 'low',
    avgSEK: 80,
    categories: ['alone', 'fun', 'culture', 'lund'],
    url: 'https://visitlund.se/uppleva-och-gora/student-i-lund'
  },
  {
    tag: 'Day trip',
    name: 'Take the train to Copenhagen',
    note: 'An easy choose-your-own-adventure day: canals, street food, museums, shopping or Tivoli are all reachable on foot or metro.',
    cost: 'flex',
    avgSEK: 350,
    categories: ['fun', 'daytrip', 'copenhagen', 'alone'],
    url: 'https://www.visitcopenhagen.com/'
  }
];

const sightMap = new Map();

Object.entries(initialPlaces).forEach(([category, categorySights]) => {
  categorySights.forEach((sight) => {
    const existing = sightMap.get(sight.name);
    const categories = [category, ...(extraCategories[sight.name] || [])];

    if (existing) {
      existing.categories = [
        ...new Set([...existing.categories, ...categories])
      ];
    } else {
      sightMap.set(sight.name, {
        ...sight,
        categories: [...new Set(categories)]
      });
    }
  });
});

researchedSights.forEach((sight) => sightMap.set(sight.name, sight));

const sights = [...sightMap.values()];

// These four labels describe destinations rather than different moods, so they
// share one category. The adrenaline sights already fit nature or fun.
sights.forEach((sight) => {
  const isCityOrTown = sight.categories.some((category) =>
    ['city', 'lund', 'towns', 'copenhagen'].includes(category)
  );
  const simplifiedCategories = sight.categories.filter(
    (category) =>
      !['city', 'lund', 'towns', 'copenhagen', 'adventure'].includes(category)
  );

  sight.categories = [
    ...new Set([...simplifiedCategories, ...(isCityOrTown ? ['cities'] : [])])
  ];
});

const categoryKeys = [
  'coast',
  'nature',
  'culture',
  'cities',
  'fun',
  'alone',
  'food',
  'daytrip'
];

const categoryPriorities = {
  alone: [
    'Watch a film at Panora',
    'Browse Emporia or Triangeln',
    'Malmö Konsthall',
    'Try a Kul i Malmö activity',
    'Borrow sports gear at Fritidsbanken',
    'Stapelbäddsparken'
  ],
  fun: [
    'Bowling and games at Big Bowl',
    "O'Learys Entré game room",
    'Play pool at Interpool Malmö',
    'Cycle around Ven island',
    'Take the train to Copenhagen'
  ],
  cities: [
    'Lilla Torg & Gamla Väster',
    'Lund university area',
    'Ystad old town',
    'Take the train to Copenhagen',
    'Högevall adventure pool',
    'Check Lund student events',
    'Lund Botanical Garden'
  ]
};

const places = Object.fromEntries(
  categoryKeys.map((category) => {
    const priority = categoryPriorities[category] || [];
    const categorySights = sights
      .filter((sight) => sight.categories.includes(category))
      .sort((a, b) => {
        const aIndex = priority.indexOf(a.name);
        const bIndex = priority.indexOf(b.name);
        return (aIndex < 0 ? 999 : aIndex) - (bIndex < 0 ? 999 : bIndex);
      });

    return [category, categorySights];
  })
);

// Copenhagen is easily reached from Malmö by train (Öresundståg, roughly 35–40 minutes
// each way); its prices were originally in DKK and are converted here to rough SEK
// equivalents for consistency with the rest of the list.

// Note: prices are rough per-person averages (entry fees, a ferry/train ticket,
// or a typical fika/meal spend) to give a feel for cost, not a quote.
