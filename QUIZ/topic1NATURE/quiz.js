//list of questions
let quizData = [
    {
      question: "Which layer of the Earth's atmosphere is closest to the surface?",
      choices: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      correctAnswer: "Troposphere"
    },
    {
      question: "What is the largest mammal on Earth?",
      choices: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
      correctAnswer: "Blue Whale"
    },
    {
      question: "Which of the following is not a type of rock?",
      choices: ["Igneous", "Sedimentary", "Metamorphic", "Transparent"],
      correctAnswer: "Transparent"
    },
    {
      question: "What is the process by which water vapor turns into liquid water?",
      choices: ["Melting", "Evaporation", "Condensation", "Sublimation"],
      correctAnswer: "Condensation"
    },
    {
      question: "Which of the following is a renewable energy source?",
      choices: ["Coal", "Natural Gas", "Solar", "Petroleum"],
      correctAnswer: "Solar"
    },
    {
      question: "What is the process by which plants make their own food using sunlight?",
      choices: ["Respiration", "Transpiration", "Photosynthesis", "Germination"],
      correctAnswer: "Photosynthesis"
    },
    {
      question: "What is the process by which an animal changes its physical form as it grows?",
      choices: ["Photosynthesis", "Metamorphosis", "Germination", "Evolution"],
      correctAnswer: "Metamorphosis"
    },
    {
      question: "What is the term for the process by which rocks are broken down into smaller fragments by chemical reactions with water, air, or other substances?",
      choices: ["Erosion", "Weathering", "Deposition", "Sedimentation"],
      correctAnswer: "Weathering"
    },
    {
      question: "Which planet is known as the (Red Planet)?",
      choices: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the name for a group of fish?",
      choices: ["Flock", "Herd", "School", "Pack"],
      correctAnswer: "School"
    }
  
  ];
  let questioncontent=document.getElementById('question')
  let choicecontent = document.getElementById('choices')
  
  let resultcontent = document.getElementById('result')
  let currentquestion = 0
  let score = 0
  //function for displaying the questions and choices as buttons
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
  // function for checking the answer and score
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
  //showing the score
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