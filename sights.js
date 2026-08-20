const sights = [
  {
    name: 'Skanör sea bath',
    tag: 'Coast',
    note: 'Classic seaside dip, easygoing and close to town.',
    cost: 'low',
    avgSEK: 0,
    categories: ['coast', 'nature', 'alone'],
    url: 'https://www.google.com/maps/search/?api=1&query=Skan%C3%B6r+beach'
  },
  {
    name: 'Lomma beach',
    tag: 'Coast',
    note: 'Wide sandy stretch, good for a lazy afternoon.',
    cost: 'low',
    avgSEK: 0,
    categories: ['coast', 'nature', 'alone'],
    url: 'https://www.google.com/maps/search/?api=1&query=Lomma+beach+Sk%C3%A5ne'
  },
  {
    name: 'Hovs Hallar',
    tag: 'Coast',
    note: 'Dramatic cliffs and pebble coves for a walk by the sea.',
    cost: 'low',
    avgSEK: 0,
    categories: ['coast', 'nature', 'alone'],
    url: 'https://www.hovshallar.com/'
  },
  {
    name: 'Kullaberg',
    tag: 'Coast',
    note: "Rocky headland with some of Skåne's best sea views.",
    cost: 'low',
    avgSEK: 0,
    categories: ['coast', 'nature'],
    url: 'https://www.kullabergsnatur.se/'
  },
  {
    name: 'Sandhammaren beach',
    tag: 'Coast',
    note: "One of Sweden's best-loved stretches of soft white sand.",
    cost: 'low',
    avgSEK: 0,
    categories: ['coast', 'nature', 'alone'],
    url: 'https://www.google.com/maps/place/Sandhammar+Strand/@55.3856445,14.1965089,17z/data=!3m1!4b1!4m6!3m5!1s0x46545faf2f43b329:0xe4d5afd62cdd0d53!8m2!3d55.3856445!4d14.1965089!16s%2Fg%2F11gy0h00g2?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    name: 'Smygehuk',
    tag: 'Coast',
    note: "Sweden's southernmost point, with a lighthouse and open sea views.",
    cost: 'low',
    avgSEK: 0,
    categories: ['coast', 'cities', 'alone'],
    url: 'https://www.google.com/maps/search/?api=1&query=Smygehuk+Sk%C3%A5ne'
  },
  {
    name: 'Söderåsen National Park',
    tag: 'Nature',
    note: 'Deep ravines and beech forest, great for a real hike.',
    cost: 'low',
    avgSEK: 0,
    categories: ['nature', 'alone'],
    url: 'https://www.sverigesnationalparker.se/park/soderasens-nationalpark/'
  },
  {
    name: 'Stenshuvud National Park',
    tag: 'Nature',
    note: 'Coastal hill with mixed forest and beach views.',
    cost: 'low',
    avgSEK: 0,
    categories: ['nature', 'coast', 'alone'],
    url: 'https://www.sverigesnationalparker.se/park/stenshuvuds-nationalpark/'
  },
  {
    name: 'Naturum Vattenriket, Kristianstad',
    tag: 'Nature',
    note: 'Wetland nature reserve, good for birdlife and easy trails.',
    cost: 'low',
    avgSEK: 0,
    categories: ['nature', 'daytrip', 'alone'],
    url: 'https://vattenriket.kristianstad.se/'
  },
  {
    name: 'Krapperup Castle',
    tag: 'History',
    note: 'Historic castle grounds and gardens to wander.',
    cost: 'low',
    avgSEK: 0,
    categories: ['culture'],
    url: 'https://krapperup.se/'
  },
  {
    name: 'Lund university area',
    tag: 'History',
    note: 'Old university town, cathedral and cobbled streets.',
    cost: 'low',
    avgSEK: 0,
    categories: ['culture', 'cities', 'alone'],
    url: 'https://www.lunduniversity.lu.se/'
  },
  {
    name: 'Malmöhus Castle',
    tag: 'History',
    note: "Sweden's oldest surviving renaissance fortress, right in Malmö.",
    cost: 'low',
    avgSEK: 60,
    categories: ['culture', 'cities', 'alone'],
    url: 'https://malmo.se/Uppleva-och-gora/Konst-och-museer/Malmo-museum/Besok-Malmo-museum/Vara-byggnader/Slottet/Malmohus-slott.html'
  },
  {
    name: "Ales stenar (Ale's Stones)",
    tag: 'History',
    note: 'A striking Iron Age stone-ship monument above the coast in Österlen.',
    cost: 'low',
    avgSEK: 0,
    categories: ['culture', 'coast', 'nature', 'daytrip', 'alone'],
    url: 'https://www.google.com/maps/search/?api=1&query=Ales+stenar'
  },
  {
    name: 'Foteviken Museum (Viking Reserve)',
    tag: 'History',
    note: 'Reconstructed Viking-age village you can walk through, near Höllviken.',
    cost: 'flex',
    avgSEK: 100,
    categories: ['culture'],
    url: 'https://www.fotevikenvikingaby.se'
  },
  {
    name: 'Västra Hamnen & Turning Torso',
    tag: 'Malmö',
    note: "Modern waterfront district with Sweden's tallest building.",
    cost: 'low',
    avgSEK: 0,
    categories: ['cities', 'coast', 'alone'],
    url: 'https://www.google.com/maps/search/?api=1&query=V%C3%A4stra+Hamnen+Turning+Torso+Malm%C3%B6'
  },
  {
    name: 'Scaniaparken',
    tag: 'Malmö',
    note: 'Relaxed city park, good for a stroll or a picnic.',
    cost: 'low',
    avgSEK: 0,
    categories: ['cities', 'coast', 'nature', 'alone'],
    url: 'https://malmo.se/Uppleva-och-gora/Natur-och-parker/Parker-i-Malmo/Scaniaparken.html'
  },
  {
    name: 'Lilla Torg & Gamla Väster',
    tag: 'Malmö',
    note: "Malmö's cobbled old town square, cafés and colourful houses.",
    cost: 'low',
    avgSEK: 0,
    categories: ['cities', 'culture', 'food', 'alone'],
    url: 'https://www.google.com/maps/search/?api=1&query=Lilla+Torg+Malm%C3%B6'
  },
  {
    name: 'Möllevångstorget',
    tag: 'Malmö',
    note: 'Lively multicultural square with a market and street food.',
    cost: 'low',
    avgSEK: 0,
    categories: ['cities', 'food', 'alone'],
    url: 'https://www.google.com/maps/search/?api=1&query=M%C3%B6llev%C3%A5ngstorget+Malm%C3%B6'
  },
  {
    name: 'Multilevel zipline, Sandakra (near Hässleholm)',
    tag: 'Adventure',
    note: 'Treetop zipline course for an adrenaline hit.',
    cost: 'flex',
    avgSEK: 499,
    categories: ['fun', 'daytrip'],
    url: 'https://www.google.com/maps/search/?api=1&query=Sandakra+zipline+H%C3%A4ssleholm'
  },
  {
    name: 'Lilla Torg food market, Malmö',
    tag: 'Food',
    note: "Stalls and cafés on one of Malmö's prettiest squares.",
    cost: 'flex',
    avgSEK: 150,
    categories: ['food'],
    url: 'https://www.google.com/maps/place/Malmö+-+Lilla+Torg/@55.6051846,12.9962342,16z/data=!3m1!4b1!4m6!3m5!1s0x4653a3b3fe5c57f5:0x5ae847443add569a!8m2!3d55.6051846!4d12.9988061!16s%2Fg%2F11dyl6wfq?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    name: 'Fika in Gamla Väster',
    tag: 'Food',
    note: "Coffee and cake in Malmö's oldest, coziest streets.",
    cost: 'low',
    avgSEK: 70,
    categories: ['food', 'cities', 'alone'],
    url: 'https://www.google.com/maps/search/?api=1&query=Gamla+V%C3%A4ster+Malm%C3%B6'
  },
  {
    name: "Ystad's cafés and bakeries",
    tag: 'Food',
    note: 'Small-town fika stops among cobblestones and flowers.',
    cost: 'low',
    avgSEK: 70,
    categories: ['food'],
    url: 'https://www.google.com/maps/search/Ystads+Cafés/@55.4335048,13.809646,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    name: 'Kristianstad food scene',
    tag: 'Food',
    note: 'Known for its chocolate, coffee spots and hearty dinners.',
    cost: 'flex',
    avgSEK: 150,
    categories: ['food'],
    url: 'https://www.google.com/maps/search/?api=1&query=Kristianstad+food'
  },
  {
    name: 'Ystad old town',
    tag: 'Town',
    note: 'Cobbled streets, half-timbered houses, famous as the Wallander town.',
    cost: 'low',
    avgSEK: 0,
    categories: ['cities', 'culture', 'daytrip', 'alone'],
    url: 'https://www.visitystadosterlen.se/'
  },
  {
    name: 'Simrishamn',
    tag: 'Town',
    note: 'Quiet fishing town on the Österlen coast, good for a slow wander.',
    cost: 'low',
    avgSEK: 0,
    categories: ['cities', 'coast', 'daytrip', 'alone'],
    url: 'https://www.simrishamn.se/'
  },
  {
    name: 'Åhus',
    tag: 'Town',
    note: 'Classic Swedish summer resort town with a long sandy beach.',
    cost: 'low',
    avgSEK: 0,
    categories: ['cities', 'coast', 'daytrip', 'alone'],
    url: 'https://www.google.com/maps/search/?api=1&query=%C3%85hus+Sk%C3%A5ne'
  },
  {
    name: 'Cycle around Ven island',
    tag: 'Day trip',
    note: 'Take the ferry from Landskrona and explore Ven on one of its famous yellow rental bikes.',
    cost: 'flex',
    avgSEK: 300,
    categories: ['daytrip', 'nature', 'fun', 'alone'],
    url: 'https://www.ventrafiken.se/'
  },
  {
    name: 'Helsingborg',
    tag: 'Day trip',
    note: 'Harbour city with a hilltop keep, an easy train ride from Malmö.',
    cost: 'flex',
    avgSEK: 120,
    categories: ['daytrip', 'cities', 'culture', 'alone'],
    url: 'https://visithelsingborg.com/'
  },
  {
    name: 'Kristianstad & Ivö',
    tag: 'Day trip',
    note: 'Wetlands, a limestone island, and a relaxed north-eastern base.',
    cost: 'flex',
    avgSEK: 150,
    categories: ['daytrip', 'nature', 'cities', 'alone'],
    url: 'https://vattenriket.kristianstad.se/'
  },
  {
    name: 'Nyhavn & a canal tour',
    tag: 'Copenhagen',
    note: 'Colourful harbourfront; boat tours run past the Opera House and the Little Mermaid.',
    cost: 'flex',
    avgSEK: 160,
    categories: ['cities', 'fun'],
    url: 'https://www.visitcopenhagen.com/copenhagen/planning/nyhavn-gdk474735'
  },
  {
    name: 'Tivoli Gardens',
    tag: 'Copenhagen',
    note: 'Historic amusement park right in the city centre, especially good at night.',
    cost: 'flex',
    avgSEK: 200,
    categories: ['cities', 'fun'],
    url: 'https://www.tivoli.dk/'
  },
  {
    name: 'Rosenborg Castle & the Crown Jewels',
    tag: 'Copenhagen',
    note: 'Renaissance castle with the Danish crown jewels and a leafy royal garden.',
    cost: 'flex',
    avgSEK: 190,
    categories: ['cities', 'culture', 'alone'],
    url: 'https://www.kongernessamling.dk/rosenborg/'
  },
  {
    name: 'Torvehallerne food market',
    tag: 'Copenhagen',
    note: 'Glass-roofed market hall with dozens of Nordic food and coffee stalls.',
    cost: 'flex',
    avgSEK: 250,
    categories: ['cities', 'food', 'alone'],
    url: 'https://torvehallernekbh.dk/'
  },
  {
    name: 'Freetown Christiania',
    tag: 'Copenhagen',
    note: 'Self-governing neighbourhood known for street art and a laid-back, alternative vibe.',
    cost: 'low',
    avgSEK: 0,
    categories: ['cities', 'culture', 'alone'],
    url: 'https://www.visitcopenhagen.com/copenhagen/areas/neighborhoods/area-guide-christiania'
  },
  {
    name: 'Strøget & the Round Tower',
    tag: 'Copenhagen',
    note: "One of Europe's longest pedestrian streets, plus a climbable 17th-century tower.",
    cost: 'low',
    avgSEK: 60,
    categories: ['cities', 'culture', 'alone'],
    url: 'https://www.rundetaarn.dk/'
  },
  {
    name: 'The Little Mermaid statue',
    tag: 'Copenhagen',
    note: 'Iconic, famously small harbourside statue — worth a quick stop.',
    cost: 'low',
    avgSEK: 0,
    categories: ['cities', 'coast', 'alone'],
    url: 'https://www.google.com/maps/place/The+Little+Mermaid/@55.6928611,12.5944045,17z/data=!3m1!4b1!4m6!3m5!1s0x464c90eb8d422103:0xdfa8900ca2351e3c!8m2!3d55.69286!4d12.5992828!16s%2Fm%2F03b_vw4?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    name: 'Watch a film at Panora',
    tag: 'Cinema',
    note: 'An independent cinema near Triangeln with arthouse films, special screenings and occasional English-friendly events.',
    cost: 'flex',
    avgSEK: 100,
    categories: ['alone', 'cities', 'culture'],
    url: 'https://panora.se/'
  },
  {
    name: 'Browse Emporia or Triangeln',
    tag: 'Shopping',
    note: 'Easy indoor shopping, food and people-watching: Emporia is by Hyllie station and Triangeln is central.',
    cost: 'low',
    avgSEK: 0,
    categories: ['alone', 'cities'],
    url: 'https://malmo.se/World-Floorball-Championships/Shopping.html'
  },
  {
    name: 'Bowling and games at Big Bowl',
    tag: 'Bowling',
    note: 'Bowling plus other games in Malmö. Visitors under 18 should go before 21:00 on Friday or Saturday.',
    cost: 'flex',
    avgSEK: 150,
    categories: ['fun', 'cities'],
    url: 'https://bigbowl.se/'
  },
  {
    name: "O'Learys Entré game room",
    tag: 'Arcade',
    note: 'Bowling, shuffleboard, darts and a game room. Under-18s need a parent or legal guardian, so check before going.',
    cost: 'flex',
    avgSEK: 150,
    categories: ['fun', 'cities'],
    url: 'https://olearys.com/sv-se/malmoe-entre/activities/'
  },
  {
    name: 'Play pool at Interpool Malmö',
    tag: 'Pool & darts',
    note: 'Billiards, darts and shuffleboard in central Malmö. The venue is 21+ after 19:00.',
    cost: 'flex',
    avgSEK: 140,
    categories: ['fun', 'cities'],
    url: 'https://www.interpoolmalmo.com/'
  },
  {
    name: 'Stapelbäddsparken',
    tag: 'Skate & climb',
    note: 'A free outdoor skatepark in Västra Hamnen with bouldering rocks and space for roller sports.',
    cost: 'low',
    avgSEK: 0,
    categories: ['alone', 'fun', 'cities'],
    url: 'https://malmo.se/Uppleva-och-gora/Natur-och-parker/Parker-i-Malmo/Stapelbaddsparken.html'
  },
  {
    name: 'Try a Kul i Malmö activity',
    tag: 'Free activities',
    note: 'Free drop-in sports, creative activities and events for young people up to age 25; check the live calendar first.',
    cost: 'low',
    avgSEK: 0,
    categories: ['alone', 'fun', 'cities'],
    url: 'https://malmo.se/Kul-i-Malmo'
  },
  {
    name: 'Borrow sports gear at Fritidsbanken',
    tag: 'Free sport',
    note: 'Borrow sport and outdoor equipment free for two weeks from the Fritidsbanken inside Mobilia.',
    cost: 'low',
    avgSEK: 0,
    categories: ['alone', 'fun', 'cities'],
    url: 'https://malmo.se/fritidsbanken'
  },
  {
    name: 'Malmö Konsthall',
    tag: 'Art',
    note: 'A spacious contemporary-art gallery beside Triangeln; a simple free activity for an hour on your own.',
    cost: 'low',
    avgSEK: 0,
    categories: ['alone', 'culture', 'cities'],
    url: 'https://malmokonsthall.se/'
  },
  {
    name: 'Disgusting Food Museum',
    tag: 'Odd museum',
    note: 'A playful museum where you can see, smell and sometimes taste unusual foods from around the world.',
    cost: 'flex',
    avgSEK: 220,
    categories: ['alone', 'fun', 'culture', 'cities'],
    url: 'https://disgustingfoodmuseum.com/malmo/'
  },
  {
    name: 'Explore Malmö by bike',
    tag: 'Bike tour',
    note: 'Rent a bike and make a self-guided loop through Ribersborg, Västra Hamnen, the old town and Folkets Park.',
    cost: 'flex',
    avgSEK: 150,
    categories: ['alone', 'fun', 'cities', 'coast'],
    url: 'https://www.visitmalmo.se/en/see-do/'
  },
  {
    name: 'Högevall adventure pool',
    tag: 'Swimming',
    note: 'Lund indoor pool with long water slides, a wild-water channel and a wave pool.',
    cost: 'flex',
    avgSEK: 120,
    categories: ['alone', 'fun', 'cities'],
    url: 'https://lund.se/hogevall'
  },
  {
    name: 'Lund Botanical Garden',
    tag: 'Garden',
    note: 'A free green place for a walk, picnic or quiet break. The greenhouses are closed for renovation until spring 2027.',
    cost: 'low',
    avgSEK: 0,
    categories: ['alone', 'nature', 'culture', 'cities'],
    url: 'https://www.botan.lu.se/en/botanical-garden-0'
  },
  {
    name: 'Check Lund student events',
    tag: 'Student life',
    note: 'Look for concerts, quizzes, games, sport and performances. Some nation events require Studentlund membership.',
    cost: 'low',
    avgSEK: 80,
    categories: ['alone', 'fun', 'culture', 'cities'],
    url: 'https://visitlund.se/uppleva-och-gora/student-i-lund'
  },
  {
    name: 'Take the train to Copenhagen',
    tag: 'Day trip',
    note: 'An easy choose-your-own-adventure day: canals, street food, museums, shopping or Tivoli are all reachable on foot or metro.',
    cost: 'flex',
    avgSEK: 350,
    categories: ['fun', 'daytrip', 'alone', 'cities'],
    url: 'https://www.visitcopenhagen.com/'
  }
];

// Approximate planning data from central Malmö. Travel times are one-way;
// travel costs are rough return-trip estimates. They are deliberately kept in
// one place so they can be checked and updated without touching the quiz logic.
const destinationCatalog = {
  malmo: {
    label: 'Malmö',
    travel: {
      walk: { minutes: 15, costSEK: 0 },
      bike: { minutes: 10, costSEK: 0 },
      transit: { minutes: 15, costSEK: 64 },
      car: { minutes: 12, costSEK: 50 }
    }
  },
  lomma: {
    label: 'Lomma',
    travel: {
      bike: { minutes: 50, costSEK: 0 },
      transit: { minutes: 30, costSEK: 110 },
      car: { minutes: 25, costSEK: 70 }
    }
  },
  skanor: {
    label: 'Skanör',
    travel: {
      bike: { minutes: 100, costSEK: 0 },
      transit: { minutes: 65, costSEK: 130 },
      car: { minutes: 35, costSEK: 110 }
    }
  },
  bjare: {
    label: 'Bjäre Peninsula',
    travel: {
      transit: { minutes: 150, costSEK: 300 },
      car: { minutes: 95, costSEK: 260 }
    }
  },
  kullaberg: {
    label: 'Kullaberg',
    travel: {
      transit: { minutes: 150, costSEK: 300 },
      car: { minutes: 90, costSEK: 250 }
    }
  },
  sandhammaren: {
    label: 'Sandhammaren',
    travel: {
      transit: { minutes: 145, costSEK: 260 },
      car: { minutes: 80, costSEK: 220 }
    }
  },
  smygehuk: {
    label: 'Smygehuk',
    travel: {
      transit: { minutes: 90, costSEK: 180 },
      car: { minutes: 55, costSEK: 150 }
    }
  },
  soderasen: {
    label: 'Söderåsen',
    travel: {
      transit: { minutes: 100, costSEK: 220 },
      car: { minutes: 65, costSEK: 180 }
    }
  },
  stenshuvud: {
    label: 'Stenshuvud',
    travel: {
      transit: { minutes: 150, costSEK: 280 },
      car: { minutes: 90, costSEK: 240 }
    }
  },
  kristianstad: {
    label: 'Kristianstad',
    travel: {
      transit: { minutes: 80, costSEK: 230 },
      car: { minutes: 75, costSEK: 210 }
    }
  },
  krapperup: {
    label: 'Krapperup',
    travel: {
      transit: { minutes: 145, costSEK: 290 },
      car: { minutes: 85, costSEK: 230 }
    }
  },
  lund: {
    label: 'Lund',
    travel: {
      bike: { minutes: 70, costSEK: 0 },
      transit: { minutes: 25, costSEK: 120 },
      car: { minutes: 25, costSEK: 90 }
    }
  },
  ales: {
    label: 'Kåseberga',
    travel: {
      transit: { minutes: 120, costSEK: 250 },
      car: { minutes: 75, costSEK: 210 }
    }
  },
  hollviken: {
    label: 'Höllviken',
    travel: {
      bike: { minutes: 80, costSEK: 0 },
      transit: { minutes: 50, costSEK: 130 },
      car: { minutes: 30, costSEK: 100 }
    }
  },
  hassleholm: {
    label: 'Hässleholm area',
    travel: {
      transit: { minutes: 110, costSEK: 260 },
      car: { minutes: 85, costSEK: 230 }
    }
  },
  ystad: {
    label: 'Ystad',
    travel: {
      transit: { minutes: 60, costSEK: 180 },
      car: { minutes: 50, costSEK: 150 }
    }
  },
  simrishamn: {
    label: 'Simrishamn',
    travel: {
      transit: { minutes: 95, costSEK: 230 },
      car: { minutes: 75, costSEK: 210 }
    }
  },
  ahus: {
    label: 'Åhus',
    travel: {
      transit: { minutes: 115, costSEK: 260 },
      car: { minutes: 90, costSEK: 240 }
    }
  },
  ven: {
    label: 'Ven',
    travel: {
      transit: { minutes: 105, costSEK: 280 },
      car: { minutes: 85, costSEK: 260 }
    }
  },
  helsingborg: {
    label: 'Helsingborg',
    travel: {
      transit: { minutes: 50, costSEK: 200 },
      car: { minutes: 65, costSEK: 190 }
    }
  },
  copenhagen: {
    label: 'Copenhagen',
    travel: {
      transit: { minutes: 45, costSEK: 300 },
      car: { minutes: 55, costSEK: 500 }
    }
  }
};

const destinationGroups = {
  skanor: ['Skanör sea bath'],
  lomma: ['Lomma beach'],
  bjare: ['Hovs Hallar'],
  kullaberg: ['Kullaberg'],
  sandhammaren: ['Sandhammaren beach'],
  smygehuk: ['Smygehuk'],
  soderasen: ['Söderåsen National Park'],
  stenshuvud: ['Stenshuvud National Park'],
  kristianstad: [
    'Naturum Vattenriket, Kristianstad',
    'Kristianstad food scene',
    'Kristianstad & Ivö'
  ],
  krapperup: ['Krapperup Castle'],
  lund: [
    'Lund university area',
    'Högevall adventure pool',
    'Lund Botanical Garden',
    'Check Lund student events'
  ],
  ales: ["Ales stenar (Ale's Stones)"],
  hollviken: ['Foteviken Museum (Viking Reserve)'],
  hassleholm: ['Multilevel zipline, Sandakra (near Hässleholm)'],
  ystad: ["Ystad's cafés and bakeries", 'Ystad old town'],
  simrishamn: ['Simrishamn'],
  ahus: ['Åhus'],
  ven: ['Cycle around Ven island'],
  helsingborg: ['Helsingborg'],
  copenhagen: [
    'Nyhavn & a canal tour',
    'Tivoli Gardens',
    'Rosenborg Castle & the Crown Jewels',
    'Torvehallerne food market',
    'Freetown Christiania',
    'Strøget & the Round Tower',
    'The Little Mermaid statue',
    'Take the train to Copenhagen'
  ],
  malmo: [
    'Malmöhus Castle',
    'Västra Hamnen & Turning Torso',
    'Scaniaparken',
    'Lilla Torg & Gamla Väster',
    'Möllevångstorget',
    'Lilla Torg food market, Malmö',
    'Fika in Gamla Väster',
    'Watch a film at Panora',
    'Browse Emporia or Triangeln',
    'Bowling and games at Big Bowl',
    "O'Learys Entré game room",
    'Play pool at Interpool Malmö',
    'Stapelbäddsparken',
    'Try a Kul i Malmö activity',
    'Borrow sports gear at Fritidsbanken',
    'Malmö Konsthall',
    'Disgusting Food Museum',
    'Explore Malmö by bike'
  ]
};

const destinationByName = Object.fromEntries(
  Object.entries(destinationGroups).flatMap(([destination, names]) =>
    names.map((name) => [name, destination])
  )
);

const durationByName = {
  'The Little Mermaid statue': 45,
  'Möllevångstorget': 60,
  'Borrow sports gear at Fritidsbanken': 60,
  'Malmö Konsthall': 75,
  'Fika in Gamla Väster': 75,
  'Scaniaparken': 90,
  'Stapelbäddsparken': 90,
  'Lilla Torg & Gamla Väster': 90,
  'Lilla Torg food market, Malmö': 90,
  'Disgusting Food Museum': 90,
  'Västra Hamnen & Turning Torso': 120,
  'Malmöhus Castle': 120,
  'Watch a film at Panora': 150,
  'Explore Malmö by bike': 180,
  'Söderåsen National Park': 240,
  'Stenshuvud National Park': 240,
  'Hovs Hallar': 240,
  'Kullaberg': 240,
  'Kristianstad & Ivö': 300,
  'Cycle around Ven island': 300,
  'Take the train to Copenhagen': 360
};

const indoorActivities = new Set([
  'Malmöhus Castle',
  'Foteviken Museum (Viking Reserve)',
  'Watch a film at Panora',
  'Browse Emporia or Triangeln',
  'Bowling and games at Big Bowl',
  "O'Learys Entré game room",
  'Play pool at Interpool Malmö',
  'Malmö Konsthall',
  'Disgusting Food Museum',
  'Högevall adventure pool',
  'Rosenborg Castle & the Crown Jewels'
]);

const flexibleSettingActivities = new Set([
  'Lund university area',
  'Lilla Torg & Gamla Väster',
  'Möllevångstorget',
  'Lilla Torg food market, Malmö',
  'Fika in Gamla Väster',
  "Ystad's cafés and bakeries",
  'Kristianstad food scene',
  'Ystad old town',
  'Simrishamn',
  'Åhus',
  'Helsingborg',
  'Nyhavn & a canal tour',
  'Tivoli Gardens',
  'Torvehallerne food market',
  'Freetown Christiania',
  'Strøget & the Round Tower',
  'Try a Kul i Malmö activity',
  'Check Lund student events',
  'Take the train to Copenhagen'
]);

const peopleFocusedActivities = new Set([
  'Multilevel zipline, Sandakra (near Hässleholm)',
  'Bowling and games at Big Bowl',
  "O'Learys Entré game room",
  'Play pool at Interpool Malmö'
]);

function inferInterests(categories) {
  const interests = [];
  if (categories.includes('nature') || categories.includes('coast')) {
    interests.push('nature');
  }
  if (categories.includes('food')) interests.push('food');
  if (
    categories.includes('culture') ||
    categories.includes('cities') ||
    categories.includes('daytrip')
  ) {
    interests.push('culture');
  }
  if (categories.includes('fun')) interests.push('games');
  return interests;
}

sights.forEach((sight) => {
  const destinationKey = destinationByName[sight.name];
  const destination = destinationCatalog[destinationKey];

  if (!destination) {
    throw new Error(`Missing planning data for ${sight.name}`);
  }

  sight.planning = {
    destination: destination.label,
    travel: destination.travel,
    activityMinutes:
      durationByName[sight.name] ||
      (sight.categories.includes('daytrip') ? 240 : 120),
    setting: indoorActivities.has(sight.name)
      ? 'indoor'
      : flexibleSettingActivities.has(sight.name)
        ? 'either'
        : 'outdoor',
    company: peopleFocusedActivities.has(sight.name)
      ? ['people']
      : ['alone', 'people'],
    interests: inferInterests(sight.categories)
  };
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

const places = Object.fromEntries(
  categoryKeys.map((cat) => [
    cat,
    sights.filter((sight) => sight.categories.includes(cat))
  ])
);
