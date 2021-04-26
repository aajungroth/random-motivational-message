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

// Introduction message
console.log('Motivational Message Incoming!\n');

console.log(getMessage());
