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
      { label: 'A day trip somewhere new', value: 'daytrip' }
    ]
  },
  {
    q: 'How much time do you have?',
    key: 'time',
    options: [
      { label: 'Just a couple of hours', value: 'short' },
      { label: 'Half a day', value: 'half' },
      { label: 'The whole day', value: 'full' }
    ]
  },
  {
    q: "Who's coming with you?",
    key: 'company',
    options: [
      { label: 'Going alone', value: 'solo' },
      { label: 'With friends', value: 'friends' }
    ]
  },
  {
    q: 'How far are you willing to go?',
    key: 'distance',
    options: [
      { label: 'Keep it nearby', value: 'near' },
      { label: "Up to an hour's drive", value: 'medium' },
      { label: 'Anywhere in Skåne', value: 'far' }
    ]
  },
  {
    q: "What's your budget for the day?",
    key: 'budget',
    options: [
      { label: 'Keep it cheap', value: 'low' },
      { label: 'Happy to spend a bit more', value: 'flex' }
    ]
  }
];
