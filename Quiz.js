const questions = [
    {
      question: "What is the capital of India?",
      options: ["New Delhi", "Mumbai", "Hyderabad", "Kolkata"],
      answer: "New Delhi"
    },
    {
      question: "Who discovered gravity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      answer: "Isaac Newton"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean"
    },
    {
      question: "What is the chemical symbol for Gold?",
      options: ["Au", "Ag", "Gd", "Go"],
      answer: "Au"
    },
    {
      question: "Which language is used for web apps?",
      options: ["Python", "PHP", "JavaScript", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "Which is the smallest continent?",
      options: ["Europe", "Australia", "Antarctica", "South America"],
      answer: "Australia"
    },
    {
      question: "How many bones are in the human body?",
      options: ["206", "201", "198", "211"],
      answer: "206"
    },
    {
      question: "Which planet is closest to the sun?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      answer: "Mercury"
    },
    {
      question: "What does CPU stand for?",
      options: ["Central Process Unit", "Central Processing Unit", "Computer Processing Unit", "Control Process Unit"],
      answer: "Central Processing Unit"
    },
    {
      question: "What is H2O?",
      options: ["Hydrogen Peroxide", "Water", "Salt", "Oxygen"],
      answer: "Water"
    },
    {
      question: "In which year did India gain independence?",
      options: ["1945", "1947", "1950", "1942"],
      answer: "1947"
    },
    {
      question: "Which organ purifies blood in the human body?",
      options: ["Heart", "Lungs", "Liver", "Kidney"],
      answer: "Kidney"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "HTML stands for?",
      options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HyperText Marketing Language", "HighText Machine Language"],
      answer: "HyperText Markup Language"
    },
    {
      question: "Which gas is most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Nitrogen"
    }
  ];
  
  
  let currentQuestion = 0;
  let score = 0;
  let timer;
  let timeLeft = 30;
  
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const nextBtn = document.getElementById('next-btn');
  const resultEl = document.getElementById('result');
  const timerEl = document.getElementById('timer');
  
  function startTimer() {
    timeLeft = 30;
    timerEl.textContent = `Time: ${timeLeft}s`;
    clearInterval(timer);
    timer = setInterval(() => {
      timeLeft--;
      timerEl.textContent = `Time: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        showNextQuestion();
      }
    }, 1000);
  }
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';
    q.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.className = 'option';
      btn.onclick = () => checkAnswer(option);
      optionsEl.appendChild(btn);
    });
    nextBtn.style.display = 'none';
    startTimer();
  }
  
  function checkAnswer(selected) {
    clearInterval(timer);
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
      score++;
    }
    document.querySelectorAll('.option').forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correct) {
        btn.style.backgroundColor = '#a5d6a7'; // green
      } else if (btn.textContent === selected) {
        btn.style.backgroundColor = '#ef9a9a'; // red
      }
    });
    nextBtn.style.display = 'block';
  }
  
  function showNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionEl.style.display = 'none';
    optionsEl.style.display = 'none';
    timerEl.style.display = 'none';
    nextBtn.style.display = 'none';
    resultEl.innerHTML = `Quiz Over! You scored ${score} out of ${questions.length}.`;
  }
  
  nextBtn.addEventListener('click', showNextQuestion);
  
  // Start quiz
  loadQuestion();
  