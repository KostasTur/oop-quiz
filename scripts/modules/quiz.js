export default class Quiz {
  constructor(
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
  ) {
    this.startBtnElement = startBtnElement;
    this.nextBtnElement = nextBtnElement;
    this.quizQuestionElement = quizQuestionElement;
    this.questionElement = questionElement;
    this.answersBtnsElement = answersBtnsElement;
    this.resultElement = resultElement;
    this.questions = questions;
    this.index = index;
    this.score = score;
    this.btnClass = btnClass;
  }
  // --- starting game (after pressing "START QUIZ")
  startQuiz() {
    this.startBtnElement.classList.add('hide');
    this.quizQuestionElement.classList.remove('hide');

    // -- resetting score and index
    if (!this.resultElement.classList.contains('hide')) {
      this.resultElement.classList.add('hide');
      this.score = 0;
    }
    this.index = 0;
    this.setNextQuestion();
  }
  // --- reseting "NEXT QUESTION" button and setting new
  setNextQuestion() {
    this.resetState();

    this.showQuestion(this.questions[this.index]);
  }
  // --- selecting answer (by clicking on it's button)
  selectAnswer(e, self) {
    let correct = e.target.dataset.correct;
    if (correct) {
      e.target.classList.add('correct');
      e.target.innerHTML += ` <i class="fas fa-check"></i>`;
      this.score++;
    } else {
      e.target.classList.add('wrong');
      e.target.innerHTML += ` <i class="fas fa-times"></i>`;
    }

    Array.from(self.answersBtnsElement.children).forEach(
      (btn) => (btn.disabled = true)
    );

    if (this.questions.length > this.index + 1) {
      this.nextBtnElement.classList.remove('hide');
    } else {
      this.startBtnElement.innerText = 'RESTART QUIZ';
      this.startBtnElement.classList.remove('hide');
      this.resultElement.classList.remove('hide');

      if (this.score === this.questions.length) {
        this.resultElement.innerHTML = `
        <h1><i class="fas fa-trophy"></i></h1>
        <h3>Congrats! You are a champ and ansered ${this.questions.length} questions correct!</h3>
        `;
      } else if (this.score < this.questions.length / 2) {
        this.resultElement.innerHTML = `
        <h1><i class="fas fa-heart-broken"></i></h1>
        <h3>Not Bad! But you have some room to improove :) You scored ${this.score} from ${this.questions.length} questions!</h3>
        `;
      } else {
        this.resultElement.innerHTML = `
          <h1><i class="fas fa-paper-plane"></i></h1>
          <h3>Nice! Your score is ${this.score} from ${this.questions.length}. Don't stop learning!</h3>
          `;
      }
    }
  }
  // -- showing question and answers from questions array
  showQuestion(question) {
    this.questionElement.innerText = question.question;
    let self = this;
    question.answers.forEach((answer) => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn', this.btnClass);

      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', (e) => this.selectAnswer(e, self));

      this.answersBtnsElement.appendChild(button);
    });
  }
  // -- showing next question (after clicking "NEXT QUESTION")
  showNextQuestion() {
    this.index++;
    this.setNextQuestion();
  }
  // -- reseting "NEXT QUESTION" button and answer buttons (removing previous ones)
  resetState() {
    this.nextBtnElement.classList.add('hide');
    while (this.answersBtnsElement.firstChild) {
      this.answersBtnsElement.removeChild(this.answersBtnsElement.firstChild);
    }
  }
}
