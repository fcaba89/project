const questions = [
  "The Earth is flat.",
  "Cats can fly.",
  "Water boils at 100 degrees Celsius."
];

const answers = [false, false, true];

const questionText = document.querySelector('.question');
const trueBtn = document.querySelector('.true-btn');
const falseBtn = document.querySelector('.false-btn');
const result = document.querySelector('.result');

let currentQuestion = 0;
displayQuestion();

trueBtn.addEventListener('click', () => checkAnswer(true));
falseBtn.addEventListener('click', () => checkAnswer(false));

function displayQuestion() {
  if (currentQuestion < questions.length) {
    questionText.textContent = questions[currentQuestion];
  } else {
    questionText.textContent = "Quiz finished!";
    trueBtn.disabled = true;
    falseBtn.disabled = true;
  }
}

function checkAnswer(userAnswer) {
  const correctAnswer = answers[currentQuestion];
  if (userAnswer === correctAnswer) {
    result.textContent = "Correct!";
  } else {
    result.textContent = "Wrong!";
  }
  currentQuestion++;
  setTimeout(() => {
    result.textContent = "";
    displayQuestion();
  }, 1500);
}
