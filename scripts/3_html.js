//Variables
// -- DOM elements
const startBtnElement = document.querySelector('#start-btn');
const nextBtnElement = document.querySelector('#next-btn');

const quizQuestionElement = document.querySelector('#quiz__question');
const questionElement = document.querySelector('#question');
const answersBtnsElement = document.querySelector('#answers-btns');
const resultElement = document.querySelector('#result');

// -- logic
let questions = [];
let index;
let score = 0;

let btnClass = 'btn-html'; //CHANGE DEPENDING ON QUIZ TYPE(btn-js/btn-css/btn-html)
let questionsEndpoint = '../data/HTML_questions.json'; //CHANGE DEPENDING ON QUIZ TYPE

let startBtnBackgroundColor = 'var(--html-color)';

// importing modules
import fetchData from './modules/fetch.js';
import Quiz from './modules/quiz.js';

//-- fetching data (questions from data folfer to questions array)
fetchData(questionsEndpoint, questions);
//Functions
// // --- starting game (after pressing "START QUIZ")

// --- reseting "NEXT QUESTION" button and setting new question

// --- selecting answer (by clicking on it's button)

// -- showing question and answers from questions array

// -- showing next question (after clicking "NEXT QUESTION")

// -- reseting "NEXT QUESTION" button and answer buttons (removing previous ones)

// instance of Quiz Class
const quiz = new Quiz(
  startBtnElement,
  nextBtnElement,
  quizQuestionElement,
  questionElement,
  answersBtnsElement,
  resultElement,
  questions,
  index,
  score,
  btnClass
);
//Events
document.addEventListener('DOMContentLoaded', () => {
  startBtnElement.style.backgroundColor = startBtnBackgroundColor;
});
startBtnElement.addEventListener('click', () => quiz.startQuiz());
nextBtnElement.addEventListener('click', () => quiz.showNextQuestion());
