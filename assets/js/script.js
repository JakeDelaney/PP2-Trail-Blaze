/**
 * An event listener that waits for DOM to finish loading
 * Two functions are then called, one shuffles the order of array items
 * and the other function displays a question from index [0] of the array
 */
document.addEventListener("DOMContentLoaded", function() {
  shuffle(questionArray); //shuffles the array
  displayQuestion(); //displays first question
});


/**
 * DOM elements are retrieved by ClassName or Id, and are stored in variables for later use
 */
let welcomePage = document.getElementsByClassName("welcome-page-wrapper")[0];
let gamePage = document.getElementsByClassName("game-wrapper")[0];
let finalScorePage = document.getElementsByClassName("final-score-wrapper")[0];
const startBtn = document.getElementById("start--btn");
const quizQuestion = document.getElementById("question");
const quizAnswerBtn = document.getElementsByClassName("answer--btn");
const resetBtn = document.getElementById("reset--btn");
const returnStartBtn = document.getElementById("return-start--btn");

let currentQuestionIndex = 1; // keeps track of current question index, increments each time user submits an answer
let scoreCounter = 0; // keeps track of score counter, each correct answer increments counter by 1

let questionArray = [ //creates an array of questions, possible answers, and correct answers
    {
      question: "What is the capital city of Australia?",
      choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correctAnswer: "Canberra"
    },
    {
      question: "Which continent is the largest in terms of land area?",
      choices: ["Africa", "Asia", "North America", "Europe"],
      correctAnswer: "Asia"
    },
    {
      question: "What is the longest river in the world?",
      choices: ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"],
      correctAnswer: "Nile River"
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      choices: ["China", "India", "Japan", "South Korea"],
      correctAnswer: "Japan"
    },
    {
      question: "What is the tallest mountain in the world?",
      choices: ["Mount Everest", "K2", "Kangchenjunga", "Mount Kilimanjaro"],
      correctAnswer: "Mount Everest"
    },
    {
      question: "Which ocean is the largest in the world?",
      choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean"
    },
    {
      question: "Which country is both in Europe and Asia?",
      choices: ["Russia", "Spain", "Kazakhstan", "Armenia"],
      correctAnswer: "Russia"
    },
    {
      question: "What is the official language of Brazil?",
      choices: ["Spanish", "Portuguese", "English", "French"],
      correctAnswer: "Portuguese"
    },
    {
      question: "Which African country is known as the 'Pearl of Africa'?",
      choices: ["Kenya", "Tanzania", "Uganda", "Ethiopia"],
      correctAnswer: "Uganda"
    },
    {
      question: "Which city is located at the mouth of the Amazon River?",
      choices: ["Rio de Janeiro", "Lima", "Buenos Aires", "Belem"],
      correctAnswer: "Belem"
    },
    {
      question: "Which country is known as the 'Land Down Under'?",
      choices: ["New Zealand", "Australia", "Argentina", "South Africa"],
      correctAnswer: "Australia"
    },
    {
      question: "What is the largest desert in the world?",
      choices: ["Sahara Desert", "Gobi Desert", "Arabian Desert", "Antarctic Desert"],
      correctAnswer: "Antarctic Desert"
    },
    {
      question: "Which city is located on two continents?",
      choices: ["Istanbul", "Cairo", "Athens", "Rome"],
      correctAnswer: "Istanbul"
    },
    {
      question: "Which country is famous for its tulips and windmills?",
      choices: ["Germany", "Netherlands", "Denmark", "Sweden"],
      correctAnswer: "Netherlands"
    },
    {
      question: "Which is the smallest country in the world by land area?",
      choices: ["Vatican City", "Monaco", "San Marino", "Nauru"],
      correctAnswer: "Vatican City"
    },
    {
      question: "What is the national language of Japan?",
      choices: ["Japanese", "Mandarin", "Korean", "Thai"],
      correctAnswer: "Japanese"
    },
    {
      question: "Which river flows through the Grand Canyon?",
      choices: ["Mississippi River", "Colorado River", "Columbia River", "Yukon River"],
      correctAnswer: "Colorado River"
    },
    {
      question: "What is the largest city in Canada?",
      choices: ["Toronto", "Vancouver", "Montreal", "Calgary"],
      correctAnswer: "Toronto"
    },
    {
      question: "Which country is home to the famous Angkor Wat temple complex?",
      choices: ["Cambodia", "Thailand", "Vietnam", "Myanmar"],
      correctAnswer: "Cambodia"
    },
    {
      question: "Which mountain range is located in South America?",
      choices: ["Rocky Mountains", "Andes Mountains", "Himalayas", "Alps"],
      correctAnswer: "Andes Mountains"
    },
    {
       question: "Which African country is the most populous?",
      choices: ["Nigeria", "Egypt", "South Africa", "Ethiopia"],
       correctAnswer: "Nigeria"
    },
    {
      question: "What is the capital city of Canada?",
      choices: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
      correctAnswer: "Ottawa"
    },
    {
      question: "Which country is known for the famous landmark, Machu Picchu?",
      choices: ["Mexico", "Brazil", "Peru", "Argentina"],
      correctAnswer: "Peru"
    },
    {
       question: "What is the largest lake in Africa?",
       choices: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
       correctAnswer: "Lake Victoria"
    },
    {
      question: "Which city is known as the 'Eternal City'?",
      choices: ["Paris", "Rome", "Madrid", "Athens"],
      correctAnswer: "Rome"
    },
    {
      question: "In which country is the Acropolis located?",
      choices: ["Greece", "Italy", "Egypt", "Spain"],
      correctAnswer: "Greece"
    },
    {
      question: "Which country is famous for the Colosseum?",
      choices: ["Italy", "Greece", "Spain", "Turkey"],
      correctAnswer: "Italy"
    },
    {
    question: "What is the national animal of Canada?",
    choices: ["Beaver", "Moose", "Bald Eagle", "Polar Bear"],
    correctAnswer: "Beaver"
    },
    {
      question: "Which city is known as the 'City of Lights'?",
      choices: ["Paris", "Las Vegas", "Dubai", "Sydney"],
      correctAnswer: "Paris"
    },
    {
      question: "In which country is the Kruger National Park located?",
      choices: ["South Africa", "Kenya", "Tanzania", "Namibia"],
      correctAnswer: "South Africa"
    },
    {
      question: "What is the national dish of Italy?",
      choices: ["Pizza", "Pasta", "Sushi", "Tacos"],
      correctAnswer: "Pizza"
    },
    {
      question: "Which city is famous for its carnival celebration?",
      choices: ["Rio de Janeiro", "New Orleans", "Venice", "Sydney"],
      correctAnswer: "Rio de Janeiro"
    },
    {
      question: "Which country is known for Mount Fuji?",
      choices: ["Japan", "South Korea", "China", "Vietnam"],
      correctAnswer: "Japan"
    },
    {
      question: "What is the highest waterfall in the world?",
      choices: ["Angel Falls", "Niagara Falls", "Iguazu Falls", "Victoria Falls"],
      correctAnswer: "Angel Falls"
    },
    {
      question: "Which city is known as the 'City of Seven Hills'?",
      choices: ["Rome", "Lisbon", "San Francisco", "Edinburgh"],
      correctAnswer: "Rome"
    },
    {
      question: "Which city is known as the 'Pearl of the Orient'?",
      choices: ["Hong Kong", "Tokyo", "Shanghai", "Singapore"],
      correctAnswer: "Hong Kong"
    },
    {
      question: "Which country is famous for the Maasai Mara National Reserve?",
      choices: ["Kenya", "Ethiopia", "Uganda", "South Africa"],
      correctAnswer: "Kenya"
    },
    {
      question: "What is the national flower of England?",
      choices: ["Rose", "Tulip", "Lily", "Daffodil"],
      correctAnswer: "Rose"
    },
    {
      question: "In which country is the Serengeti National Park located?",
      choices: ["Tanzania", "Kenya", "South Africa", "Uganda"],
      correctAnswer: "Tanzania"
    },
    {
      question: "In which country is the Ayers Rock (Uluru) located?",
      choices: ["Australia", "New Zealand", "Indonesia", "Fiji"],
      correctAnswer: "Australia"
    },
  ];


welcomePage.style.visibility = "visible";
gamePage.style.visibility = "hidden";
finalScorePage.style.visibility = "hidden";
startBtn.addEventListener("click", startGame);

function startGame(){
  gamePage.style.visibility = "visible";
  welcomePage.style.visibility = "hidden";
}


/** 
 * This function shuffles the questionArray
 * using the Fisher - Yates Shuffle algorithm
 * https://bost.ocks.org/mike/shuffle/
*/
function shuffle(questionArray){
  let m = questionArray.length, t, i;
  while (m){
    i = Math.floor(Math.random() * m --);
    t = questionArray[m];
    questionArray[m] = questionArray[i];
    questionArray[i] = t;
  }
  return questionArray;
}


/**
 * Function that assigns the values of the question & choices objects, 
 * within the questionArray, to the innerHTML of DOM elements.
 * The Function also iterates through the quizAnswerBtns 
 * and adds an event listener to each of them.
 */
function displayQuestion(){
  let currentQuestion = questionArray[currentQuestionIndex]; // Based on the incremented value of currentQuestionIndex, retrieves a question object from array and assigns to currentQuestion variable (each increment assigns the next question)
  let currentChoices = currentQuestion.choices; // stores choices array from question object within currentChoices variable

  quizQuestion.innerHTML = currentQuestion.question; // retrieves question object and assigns to text content of HTML element within quizQuestion varaible

  for (let i = 0; i < currentChoices.length; i++){ //for loop iterates over choices array, and assigns items to text content of HTML elements within quizAnswerBtn variable
    quizAnswerBtn[i].innerHTML = currentChoices[i];
    quizAnswerBtn[i].addEventListener("click", submitAnswer); // each iteration adds an event listener to the quizAnswerBtns, which listens out for a 'click' before calling submitAction()
  }
}


/**
 * Function that checks if the innerHTML content of the quizAnswerBtn 
 * variable matches the correctAnswer property.
  Either the correctScore or incorrectScore variables will be incremented by 1 
  and assigned to the innerHTML content of their associated elements.
 */
function submitAnswer(){
  let selectedAnswer = this.innerHTML; //takes innerHTML content from clicked quizAnswerBtn and assigns to selectedAnswer variable
  let currentQuestion = questionArray[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correctAnswer){ //if innerHTML content of selectedAnswer matches correctAnswer property of currentQuestion object, execute below code block
    scoreCounter++; //increment correct score by 1
    document.getElementById("score-counter").innerHTML = scoreCounter; //set innerHTML content of "correct-answer" element to value of correctScore

  } else{ //else if innerHTML content does not match correctAnswer property, execute below code block
    document.getElementById("score-counter").innerHTML = scoreCounter; //set innerHTML content to to value of incorrectScore
  }

  for (let i = 0; i < quizAnswerBtn.length; i++){ 
    quizAnswerBtn[i].style.backgroundColor = "red"; //iterate through the quizAnswerBtn array, and apply the color red to each button
    if (quizAnswerBtn[i].innerHTML === currentQuestion.correctAnswer){ 
      quizAnswerBtn[i].style.backgroundColor = "green"; //change the color to green if the innerHTML of the buttom is equal to the correctAnswer property
    } 
  }

  /**
   * function within submitAnswer() that adds a delay to displaying the next question.
   * This function also reverts any style color added to the quizAnswerBtn array.
   */
  setTimeout(function () {
    if (currentQuestionIndex === 15){
      welcomePage.style.visibility = "hidden";
      gamePage.style.visibility = "hidden";
      finalScorePage.style.visibility = "visible";
      document.getElementById("final-score").innerHTML = scoreCounter;
    }
  currentQuestionIndex++; //increment this variable by 1, allowing the next indexed question to be displayed
  document.getElementById("question-counter").innerHTML = currentQuestionIndex;
  displayQuestion(); //pull the next question from the array
  for (let i = 0; i < quizAnswerBtn.length; i++){
    quizAnswerBtn[i].style.backgroundColor =""; //iterates through quizAnswerBtn array and reverts colors back to none
  } }, 2000); //function delays by 2 seconds
}

function reloadGame(){
  window.location.reload();
}

resetBtn.addEventListener("click", reloadGame);
returnStartBtn.addEventListener("click", reloadGame);