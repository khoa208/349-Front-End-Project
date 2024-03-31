const questions = [
    { question: "1. Who was the lead singer of the band The Who?", options: ["Roger Daltrey", "Don Henley", "Robert Plant"], correct: 0, answered: false },
    { question: "2. What spirit is used in making a Tom Collins?", options: ["Vodka", "Rum", "Gin"], correct: 2, answered: false },
    { question: "3. The fear of insects is known as what?", options: ["Entomophobia", "Arachnophobia", "Ailurophobia"], correct: 0, answered: false},
    { question: "4. What was the name of the Franco-British supersonic commercial plane that operated from 1976-2003?", options: ["Accord", "Concorde", "Mirage"], correct: 1, answered: false },
    { question: "5. Which horoscope sign is a fish?", options: ["Aquarius", "Cancer", "Pisces"], correct: 2, answered: false },
    { question: "6. What is the largest US state (by landmass)?", options: ["Texas", "Alaska", "California"], correct: 1, answered: false },
    { question: "7. Which app has the most total users?", options: ["TikTok", "Snapchat", "Instagram"], correct: 2, answered: false },
    { question: "8. Which Game of Thrones character is known as the Young Wolf?", options: ["Robb Stark", "Arya Stark", "Sansa Stark"], correct: 0, answered: false },
    { question: "9. What city hosted the 2002 Olympic Games?", options: ["Tokyo", "Beijing", "Sydney"], correct: 2, answered: false },
    { question: "10. How many plays do people (generally) believe that Shakespeare wrote?", options: ["27", "37", "47"], correct: 1, answered: false },
  
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
  