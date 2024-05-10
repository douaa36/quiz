
let quizData = [
    {
      question: "Who was the first person to step onto the surface of the Moon?",
      choices: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
      correctAnswer: "Neil Armstrong"
    },
    {
      question: "Which city hosted the first modern Olympic Games in 1896?",
      choices: ["Paris", "London", "Athens", "Rome"],
      correctAnswer: "Athens"
    },
    {
      question: "What is the capital city of Australia?",
      choices: ["Melbourne", "Sydney", "Canberra", "Brisbane"],
      correctAnswer: "Canberra"
    },
    {
      question: "Which country is known as the (Land of the Rising Sun)?",
      choices: ["China", "South Korea", "Japan", "Vietnam"],
      correctAnswer: "Japan"
    },
    {
      question: "What is the largest organ in the human body?",
      choices: ["Liver", "Skin", "Heart", "Brain"],
      correctAnswer: "Skin"
    },
    {
      question: "Who wrote the play (Romeo and Juliet)?",
      choices: ["William Shakespeare", "Christopher Marlowe", "John Milton", "Geoffrey Chaucer"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "What is the capital city of Canada?",
      choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      correctAnswer: "Ottawa"
    },
    {
      question: "Who was the first female Prime Minister of the United Kingdom?",
      choices: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"],
      correctAnswer: "Margaret Thatcher"
    },
    {
      question: "What is the longest river in the world?",
      choices: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
      correctAnswer: "Amazon River"
    },
    {
      question: "What is the capital city of Brazil?",
      choices: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
      correctAnswer: "Brasília"
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
