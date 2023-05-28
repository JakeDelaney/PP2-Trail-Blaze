document.addEventListener("DOMContentLoaded", function() {
  shuffle(questionArray);
  displayQuestion();
});

/*startGame(){
  displayQuestion()
}*/

const quizQuestion = document.getElementById("question");
const answerBtn = document.getElementsByClassName("answer--btn");
const submitBtn = document.getElementById("submit--btn");
const resetBtn = document.getElementById("reset--btn");
let currentQuestionIndex = 0; // keeps track of current question index

let questionArray = [ //creates an array of questions, possible answers, and a correct answer
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
      choices: ["Russia", "Turkey", "Kazakhstan", "Armenia"],
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
      correctAnswer: "Sahara Desert"
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
    }
  ];


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

function displayQuestion(){
  const currentQuestion = questionArray[currentQuestionIndex];
  const currentChoices = currentQuestion.choices;
  console.log(currentQuestion)
  console.log(currentChoices)

  quizQuestion.innerHTML = currentQuestion.question;

  for (let j = 0; j < currentChoices.length; j++){
    answerBtn[j].innerHTML = currentChoices[j];
  }
}


displayQuestion()

function submitAnswer(){
  if (currentQuestionIndex === 10){
    alert("test")
  }
  currentQuestionIndex++;
  displayQuestion()
}


submitBtn.addEventListener("click", submitAnswer)

submitAnswer()