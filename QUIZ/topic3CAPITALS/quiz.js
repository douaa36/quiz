let quizData = [
    {
      question: "What is the capital city of Australia?",
      choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswer: "Canberra"
    },
    {
      question: "What is the capital city of Japan?",
      choices: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
      correctAnswer: "Tokyo"
    },
    {
      question: "Which city serves as the capital of France?",
      choices: ["Marseille", "Lyon", "Paris", "Nice"],
      correctAnswer: "Paris"
    },
    {
      question: "What is the capital city of Brazil??",
      choices: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
      correctAnswer: "Brasília"
    },
    {
      question: "What is the capital city of Russia?",
      choices: ["Saint Petersburg", "Moscow", "Novosibirsk", "Vladivostok"],
      correctAnswer: "Moscow"
    },
    {
      question: "Which city serves as the capital of Italy?",
      choices: ["Rome", "Milan", "Florence", "Naples"],
      correctAnswer: "Rome"
    },
    {
      question: "What is the capital city of Canada?",
      choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      correctAnswer: "Ottawa"
    },
    {
      question: "What is the capital city of South Africa?",
      choices: ["Cape Town", "Pretoria", "Johannesburg", "Durban"],
      correctAnswer: "Pretoria"
    },
    {
      question: "Which city is the capital of Argentina?",
      choices: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"],
      correctAnswer: "Buenos Aires"
    },
    {
      question: "What is the capital city of Spain?",
      choices: ["Barcelona", "Madrid", "Valencia", "Seville"],
      correctAnswer: "Madrid"
    }
  
  ];
  let questioncontent=document.getElementById('question')
  let choicecontent = document.getElementById('choices')
  
  let resultcontent = document.getElementById('result')
  let currentquestion = 0
  let score = 0
  
  function  displayquestion() {
      let currentquizdata= quizData[currentquestion];
      questioncontent.textContent =currentquizdata.question;
      choicecontent.innerHTML = '';
    currentquizdata.choices.forEach(choice => {
      let button = document.createElement('button');
      button.textContent = choice;
      button.classList.add('choice');
      button.addEventListener('click', checkAnswer);
      choicecontent.appendChild(button);
      choicecontent.appendChild(document.createElement('br'));
    });
  }
  
  function checkAnswer(event){
      let selectedchoice = event.target.textContent;
    let currentquizdata = quizData[currentquestion];
    if (selectedchoice == currentquizdata.correctAnswer) {
      score++;
   
    }
    currentquestion++;
    if (currentquestion < quizData.length) {
      displayquestion();
    } else {
  
      showResult();
    }
  }
  
  function showResult() {
    questioncontent.textContent = '';
    choicecontent.textContent = '';
  if (score === quizData.length) {
      resultcontent.textContent = `Congratulations! You got all the answers right! Your score: ${score}/${quizData.length}`;
    } else {
      resultcontent.textContent = `Great effort! Keep trying to improve your score! Your score: ${score}/${quizData.length}`;
    }
  }
  
  displayquestion();