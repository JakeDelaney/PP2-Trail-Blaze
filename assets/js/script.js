document.addEventListener("DOMContentLoaded", function(){
  alert("DOM loaded")
  shuffle(questionArray)
  console.log(questionArray[0].question)
})

startGame(){
  displayQuestion()
}

const quizQuestion = document.getElementById("question");
const quizChoices = document.getElementsByClassName("answer--btn");
const submitBtn = document.getElementById("submit--btn");
const resetBtn = document.getElementById("reset--btn");
let currentQuestiontIndex = 0; // keeps track of current question index

let questionArray = [ //creates an array of questions, possible answers, and a correct answer
    {
      question: "What is the capital city of Australia?",
      possibleAnswers: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correctAnswer: "Canberra"
    },
    {
      question: "Which continent is the largest in terms of land area?",
      possibleAnswers: ["Africa", "Asia", "North America", "Europe"],
      correctAnswer: "Asia"
    },
    {
      question: "What is the longest river in the world?",
      possibleAnswers: ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"],
      correctAnswer: "Nile River"
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      possibleAnswers: ["China", "India", "Japan", "South Korea"],
      correctAnswer: "Japan"
    },
    {
      question: "What is the tallest mountain in the world?",
      possibleAnswers: ["Mount Everest", "K2", "Kangchenjunga", "Mount Kilimanjaro"],
      correctAnswer: "Mount Everest"
    },
    {
      question: "Which ocean is the largest in the world?",
      possibleAnswers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean"
    },
    {
      question: "Which country is both in Europe and Asia?",
      possibleAnswers: ["Russia", "Turkey", "Kazakhstan", "Armenia"],
      correctAnswer: "Russia"
    },
    {
      question: "What is the official language of Brazil?",
      possibleAnswers: ["Spanish", "Portuguese", "English", "French"],
      correctAnswer: "Portuguese"
    },
    {
      question: "Which African country is known as the 'Pearl of Africa'?",
      possibleAnswers: ["Kenya", "Tanzania", "Uganda", "Ethiopia"],
      correctAnswer: "Uganda"
    },
    {
      question: "Which city is located at the mouth of the Amazon River?",
      possibleAnswers: ["Rio de Janeiro", "Lima", "Buenos Aires", "Belem"],
      correctAnswer: "Belem"
    },
    {
        question: "Which country is known as the 'Land Down Under'?",
        possibleAnswers: ["New Zealand", "Australia", "Argentina", "South Africa"],
        correctAnswer: "Australia"
      },
      {
        question: "What is the largest desert in the world?",
        possibleAnswers: ["Sahara Desert", "Gobi Desert", "Arabian Desert", "Antarctic Desert"],
        correctAnswer: "Sahara Desert"
      },
      {
        question: "Which city is located on two continents?",
        possibleAnswers: ["Istanbul", "Cairo", "Athens", "Rome"],
        correctAnswer: "Istanbul"
      },
      {
        question: "Which country is famous for its tulips and windmills?",
        possibleAnswers: ["Germany", "Netherlands", "Denmark", "Sweden"],
        correctAnswer: "Netherlands"
      },
      {
        question: "Which is the smallest country in the world by land area?",
        possibleAnswers: ["Vatican City", "Monaco", "San Marino", "Nauru"],
        correctAnswer: "Vatican City"
      },
      {
        question: "What is the national language of Japan?",
        possibleAnswers: ["Japanese", "Mandarin", "Korean", "Thai"],
        correctAnswer: "Japanese"
      },
      {
        question: "Which river flows through the Grand Canyon?",
        possibleAnswers: ["Mississippi River", "Colorado River", "Columbia River", "Yukon River"],
        correctAnswer: "Colorado River"
      },
      {
        question: "What is the largest city in Canada?",
        possibleAnswers: ["Toronto", "Vancouver", "Montreal", "Calgary"],
        correctAnswer: "Toronto"
      },
      {
        question: "Which country is home to the famous Angkor Wat temple complex?",
        possibleAnswers: ["Cambodia", "Thailand", "Vietnam", "Myanmar"],
        correctAnswer: "Cambodia"
      },
      {
        question: "Which mountain range is located in South America?",
        possibleAnswers: ["Rocky Mountains", "Andes Mountains", "Himalayas", "Alps"],
        correctAnswer: "Andes Mountains"
      },
      {
        question: "Which African country is the most populous?",
        possibleAnswers: ["Nigeria", "Egypt", "South Africa", "Ethiopia"],
        correctAnswer: "Nigeria"
      },
      {
        question: "What is the capital city of Canada?",
        possibleAnswers: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
        correctAnswer: "Ottawa"
      },
      {
        question: "Which country is known for the famous landmark, Machu Picchu?",
        possibleAnswers: ["Mexico", "Brazil", "Peru", "Argentina"],
        correctAnswer: "Peru"
      },
      {
        question: "What is the largest lake in Africa?",
        possibleAnswers: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
        correctAnswer: "Lake Victoria"
      },
      {
        question: "Which city is known as the 'Eternal City'?",
        possibleAnswers: ["Paris", "Rome", "Madrid", "Athens"],
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

shuffle(questionArray)



