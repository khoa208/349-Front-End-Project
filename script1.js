const questions = [
  { question: "1. What is capital of Canada?", options: ["Quabec", "Ottawa", "Toronto", "Victoria"], correct: 1, answered: false },
  { question: "2. What is the capital of Australia?", options: ["Canberra", "Sydney", "Melbourne", "Darwin"], correct: 0, answered: false },
  { question: "3. Which of the following is not an organ in the human body?", options: ["Pancreas", "Gallbaldeer", "Ulna", "Eye"], correct: 2, answered: false},
  { question: "4. What is the main ingredient of mince pie?", options: ["Cherries", "Dried fuit", "Rhubarb", "Pork"], correct: 1, answered: false },
  { question: "5. A squid has ___ an octopus?", options: ["Less arms than", "The same amount of arms as", "More arms than", "None of the above is correct"], correct: 2, answered: false },
  { question: "6. Which of the following franchies did not have music composed by John Williams?", options: ["Batman", "Jurassic Park", "Harry Potter", "Star Wars"], correct: 0, answered: false },
  { question: "7. In what year was the Berlin Wall torn down?", options: ["1981", "1986", "1989", "1991"], correct: 2, answered: false },
  { question: "8. In the song 'Tik Tok', Kesha kicks dudes to the burb unless they look like which musician?", options: ["John Mayer", "James Taylor", "Steven Tyler", "Mick Jagger"], correct: 3, answered: false },
  { question: "9. Which of the following is not a literary bear?", options: ["Clifford", "Corduroy", "Winnie the Pooh", "Paddington"], correct: 0, answered: false },
  { question: "10. Which South American country has the capital city of Quito?", options: ["Colombia", "Ecuador", "Paraguay", "Guyana"], correct: 1, answered: false },

];

let currentQuestionIndex = 0;
let correctCount = 0;

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").innerText = currentQuestion.question;
  const optionsButtons = document.querySelectorAll(".option");
  optionsButtons.forEach((button, index) => {
    button.innerText = currentQuestion.options[index];
    // Modify the onclick handler to check if the question has been answered
    button.onclick = () => {
      if (!currentQuestion.answered) {
        checkAnswer(index); // Call function checkAnswer(selected) to display 'correct' or 'wrong' answer
        currentQuestion.answered = true; // Mark the question as answered
        // Disable all option buttons for this question
        optionsButtons.forEach(btn => {
          btn.disabled = true;
          btn.classList.add('disabled');
        });
      }
    };
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestionIndex].correct;
  if (correct === selected) {
    correctCount++;
    document.getElementById("result").innerText = "Correct!";
  } else {
    document.getElementById("result").innerText = "Wrong!";
  }

  if (currentQuestionIndex < questions.length) {
    document.getElementById("next-button").style.display = 'block';
  }
}

document.getElementById("next-button").onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    document.getElementById("result").innerHTML = "";
    document.getElementById("next-button").style.display = 'none';
    // Re-enable all option buttons for the new question
    const optionsButtons = document.querySelectorAll(".option");
    optionsButtons.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('disabled');
    });
  } else {
    document.getElementById("quiz-container").innerHTML = `<h1>Quiz Completed!</h1><div id='result'>Your final score is ${correctCount}/${questions.length}.</div><br><div><button id="main-menu-btn" class="option" onclick="window.location.href='main.html';">Main menu</button></div>`;
  }
};

displayQuestion();

