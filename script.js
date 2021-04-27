// The message parts
const messagePart1 = [
  'Every new day',
  'Always remember to',
  'Thinking positively',
  'When the going gets tough',
  'Remember the good times,',
  'Today is a new day to',
  'Feel good,',
  'Practice makes perfect,',
  'Have a good attitude,',
  'Cheer up,',
];
const messagePart2 = [
    'be happy,',
    'dream big,',
    'keep believing,',
    'put a smile on your face,',
    'there is more than one way,',
    'always be grateful,',
    'believe in yourself,',
    'touch the sky,',
    'hustle,',
    'work hard,',
];
const messagePart3 = [
    'you can do it.',
    'start today.',
    'the best is ahead of us.',
    'you only live once.',
    'learn, live, love.',
    'life is good.',
    'just do it.',
    'Booyah!',
    'the early bird gets the worm.',
    'you have limitless potential.',
];

// The fruit list
const fruitList = [
  'Acerola – West Indian Cherry',
  'Apple',
  'Apricots',
  'Avocado',
  'Banana',
  'Blackberries',
  'Blackcurrant',
  'Blueberries',
  'Breadfruit',
  'Cantaloupe',
  'Carambola',
  'Cherimoya',
  'Cherries',
  'Clementine',
  'Coconut Meat',
  'Cranberries',
  'Custard-Apple',
  'Date Fruit',
  'Durian',
  'Elderberries',
  'Feijoa',
  'Figs',
  'Gooseberries',
  'Grapefruit',
  'Grapes',
  'Guava',
  'Honeydew Melon',
  'Jackfruit',
  'Java-Plum',
  'Jujube Fruit',
  'Kiwifruit',
  'Kumquat',
  'Lemon',
  'Lime',
  'Longan',
  'Loquat',
  'Lychee',
  'Mandarin',
  'Mango',
  'Mangosteen',
  'Mulberries',
  'Nectarine',
  'Olives',
  'Orange',
  'Papaya',
  'Passion Fruit',
  'Peaches',
  'Pear',
  'Persimmon – Japanese',
  'Pitaya (Dragonfruit)',
  'Pineapple',
  'Pitanga',
  'Plantain',
  'Plums',
  'Pomegranate',
  'Prickly Pear',
  'Prunes',
  'Pummelo',
  'Quince',
  'Raspberries',
  'Rhubarb',
  'Rose-Apple',
  'Sapodilla',
  'Sapote, Mamey',
  'Soursop',
  'Strawberries',
  'Sugar-Apple',
  'Tamarind',
  'Tangerine',
  'Watermelon',
];

// Get a random number from 0 to n - 1
const getRandomNumberInRange = (n) => {
  return Math.floor(Math.random() * n);
};

// Creates a random message
const getMessage = () => {
    let message = '';
    let messagePart1Index = getRandomNumberInRange(messagePart1.length);
    let messagePart2Index = getRandomNumberInRange(messagePart2.length);
    let messagePart3Index = getRandomNumberInRange(messagePart3.length);

    message += messagePart1[messagePart1Index] + ' ' 
    message += messagePart2[messagePart2Index] + ' '
    message += messagePart3[messagePart3Index];

    return message;
};

// Create a sperated list
const getSeparatedList = (list, n) => {
  let separatedList = '';

  for (let i = 0; i < n; i++) {
    let randomIndex = getRandomNumberInRange(list.length);

    separatedList += list[randomIndex];

    if (i < n - 1) {
      separatedList += ' | ';
    }
  }

  return separatedList;
};

// Introduction message
console.log('\nMotivational Message Incoming!\n');

// Motivational message
console.log(getMessage());

// Lucky fruit salad introduction mesage
console.log('\nYour lucky fruit salad is:\n');

// Lucky fruit salad message
console.log(getSeparatedList(fruitList, 5));

// Adds a new line
console.log();
