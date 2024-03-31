const questions = [
    { question: "1. Who sang the title song for the lastest Bond film, No Time to Die", options: ["Adele", "Sam Smith", "JBillie Eilish"], correct: 2, answered: false },
    { question: "2. Which flies a green, white, and orange (in that order) tricolor flag?", options: ["Ireland", "Ivory Coast", "Italy"], correct: 0, answered: false },
    { question: "3. What company makes the Xperia model of smartphone?", options: ["Samsung", "Sony", "Nokia"], correct: 1, answered: false},
    { question: "4. Which city is home to the Brandenburg Gate?", options: ["Vienna", "Zurich", "Berlin"], correct: 2, answered: false },
    { question: "5. Which of the following is NOT a fruit?", options: ["Rhubarb", "Tomatoes", "Avocados"], correct: 0, answered: false },
    { question: "6. Where was the first example of paper money used?", options: ["China", "Turkey", "Greece"], correct: 0, answered: false },
    { question: "7. Who is generally considered the inventor of the motor car?", options: ["Henry Ford", "Karl Benz", "Henry M. Leland"], correct: 1, answered: false },
    { question: "8. If you were looking at Iguazu Falls, on what continent would you be?", options: ["Asia", "Africa", "South America"], correct: 2, answered: false },
    { question: "9. What number was the Apollo mission that successfully put a man on the moon for the first time in human history? ", options: ["Apollo 11", "Apollo 12", "Apollo 13"], correct: 0, answered: false },
    { question: "10. Which of the following languages has the longest alphabet?", options: ["Greek", "Russian", "Arabic"], correct: 1, answered: false },
  
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
  