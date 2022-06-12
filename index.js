// const tutorials = [
//   'what does the this keyword mean?',
//   'What is the Constructor OO pattern?',
//   'implementing Blockchain Web API',
//   'The Test Driven Development Workflow',
//   'What is NaN and how Can we Check for it',
//   'What is the difference between stopPropagation and preventDefault?',
//   'Immutable State and Pure Functions',
//   'what is the difference between == and ===?',
//   'what is the difference between event capturing and bubbling?',
//   'what is JSONP?'
// ];
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const tutorial='what does the this keyword mean?'
var capitalizedString=(string)=>string[0].toUpperCase() + string.slice(1).toLowerCase();

var words=tutorial.split(' ').map(capitalizedString);
const tutorialSentence=words.join(' ')

console.log(tutorialSentence);

const tutorial1= 'What is the Constructor OO pattern?'
var capitalizedString=(string)=>string[0].toUpperCase() + string.slice(1).toLowerCase();
var words=tutorial1.split(' ').map(capitalizedString);
const tutorial1Sentence=words.join(' ')
console.log(tutorial1Sentence);

const tutorial2= 'implementing Blockchain Web API'
var capitalizedString=(string)=>string[0].toUpperCase() + string.slice(1).toLowerCase();
var words=tutorial2.split(' ').map(capitalizedString);
const tutorial2Sentence=words.join(' ')
console.log(tutorial2Sentence);

const tutorial3='The Test Driven Development Workflow'
var capitalizedString=(string)=>string[0].toUpperCase() + string.slice(1).toLowerCase();
var words=tutorial3.split(' ').map(capitalizedString);
const tutorial3Sentence=words.join(' ')
console.log(tutorial3Sentence);

const tutorial4='What is NaN and how Can we Check for it'
var capitalizedString=(string)=>string[0].toUpperCase() + string.slice(1).toLowerCase();
var words=tutorial4.split(' ').map(capitalizedString);
const tutorial4Sentence=words.join(' ')
console.log(tutorial4Sentence);

const tutorial5= 'What is the difference between stopPropagation and preventDefault?'
var capitalizedString=(string)=>string[0].toUpperCase() + string.slice(1).toLowerCase();
var words=tutorial5.split(' ').map(capitalizedString);
const tutorial5Sentence=words.join(' ')
console.log(tutorial5Sentence);

const tutorial6 =  'Immutable State and Pure Functions'
var capitalizedString=(string)=>string[0].toUpperCase() + string.slice(1).toLowerCase();
var words=tutorial6.split(' ').map(capitalizedString);
const tutorial6Sentence=words.join(' ')
console.log(tutorial6Sentence);

const tutorial7= 'what is the difference between == and ===?'
var capitalizedString=(string)=>string[0].toUpperCase() + string.slice(1).toLowerCase();
var words=tutorial7.split(' ').map(capitalizedString);
const tutorial7Sentence=words.join(' ')
console.log(tutorial7Sentence);

const tutorial8= 'what is the difference between event capturing and bubbling?'
var capitalizedString=(string)=>string[0].toUpperCase() + string.slice(1).toLowerCase();
var words=tutorial8.split(' ').map(capitalizedString);
const tutorial8Sentence=words.join(' ')
console.log(tutorial8Sentence);

const tutorial9= 'what is JSONP?'
var capitalizedString=(string)=>string[0].toUpperCase() + string.slice(1).toLowerCase();
var words=tutorial9.split(' ').map(capitalizedString);
const tutorial9Sentence=words.join(' ')
console.log(tutorial9Sentence);

 const titleCased = () => {
  return tutorials.map(line =>{
    const tutorials=line.split(' ');
    const capitalizedStrings=tutorials.map( string =>string[0].toUpperCase() + string.slice(1));
    const response=capitalizedStrings.join(' ');
    return response;

  });
 }


