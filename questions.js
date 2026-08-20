const questions = [
  {
    q: 'How much total time do you have?',
    hint: 'This includes getting there and back to Malmö.',
    key: 'time',
    options: [
      { label: '1–2 hours', value: 'short' },
      { label: 'Half a day', value: 'half' },
      { label: 'A full day', value: 'full' }
    ]
  },
  {
    q: 'How will you travel from Malmö?',
    hint: 'We will only suggest places you can reasonably reach this way.',
    key: 'transport',
    options: [
      { label: 'Walk', value: 'walk' },
      { label: 'Bike', value: 'bike' },
      { label: 'Public transport', value: 'transit' },
      { label: 'Car', value: 'car' }
    ]
  },
  {
    q: 'What is your total budget?',
    hint: 'The estimate includes the activity and a return trip from Malmö.',
    key: 'budget',
    options: [
      { label: 'Free', value: 'free' },
      { label: 'Up to 150 SEK', value: '150' },
      { label: 'Up to 400 SEK', value: '400' },
      { label: 'Flexible', value: 'flex' }
    ]
  },
  {
    q: 'What fits your situation?',
    hint: 'Choose the closest match. “Either” means the weather does not matter.',
    key: 'situation',
    options: [
      { label: 'Indoors, on my own', value: 'indoor-alone' },
      { label: 'Indoors, with people', value: 'indoor-people' },
      { label: 'Outdoors, on my own', value: 'outdoor-alone' },
      { label: 'Outdoors, with people', value: 'outdoor-people' },
      { label: 'Either, on my own', value: 'either-alone' },
      { label: 'Either, with people', value: 'either-people' },
      { label: 'Anything works', value: 'either-either' }
    ]
  },
  {
    q: 'What sounds fun?',
    hint: 'This shapes the ranking after the practical filters are applied.',
    key: 'interest',
    options: [
      { label: 'Nature and the coast', value: 'nature' },
      { label: 'Food and fika', value: 'food' },
      { label: 'Culture and local places', value: 'culture' },
      { label: 'Sports, games and adventure', value: 'games' },
      { label: 'Surprise me', value: 'surprise' }
    ]
  }
];
