//the following object stores all of our questions, their answers, current question number
//and also the current scores

const store = {
    questions: [
      {
        question: 'What is the capital of Illinois?',
        category: 'GEOGRAPHY',
        answers: [
          'Aurora',
          'Chicago',
          'Rockford',
          'Springfield'
        ],
        correctAnswer: 'Springfield'
      },
      {
        question: 'Which of the following is NOT a moon of Jupiter?',
        category: 'ASTRONOMY',
        answers: [
          'Miranda',
          'Ganymede',
          'Europa',
          'Callisto'
        ],
        correctAnswer: 'Miranda'
      },
      {
      question: 'Which city is traditionally said to be built on seven hills?',
      category: 'HISTORY',
      answers: [
        'Athens',
        'Jerusalem',
        'Rome',
        'San Francisco'
      ],
      correctAnswer: 'Rome'
      },
      {
        question: 'A variety of vulgar latin spoken in the Western Roman Empire eventually developed into the langues d\'oil and d\'oc that then evolved into which two distinct languages?',
        category: 'LANGUAGES',
        answers: [
          'Spanish and Portuguese',
          'French and Occitan',
          'Catalan and Monagesque',
          'Italian and Sardinian'
        ],
        correctAnswer: 'French and Occitan'
      }, 
      {
        question: 'What is the most abundant element in the earth\'s crust?',
        category: 'EARTH SCIENCES',
        answers: [
          'Carbon',
          'Nitrogen',
          'Sulfur',
          'Oxygen'
        ],
        correctAnswer: 'Oxygen'
        },
        {
          question: 'Which country has the longest coastline?',
          category: 'GEOGRAPHY',
          answers: [
            'Canada',
            'Indonesia',
            'Japan',
            'Russia'
          ],
          correctAnswer: 'Canada'
          },
          {
            question: 'Which planet radiates more heat than it gets from the sun?',
            category: 'ASTRONOMY',
            answers: [
              'Jupiter',
              'Saturn',
              'Neptune',
              'All of the Above'
            ],
            correctAnswer: 'All of the Above'
            },
            {
              question: 'In which country did the Easter Rising take place in 1916?',
              category: 'HISTORY',
              answers: [
                'Armenia',
                'Ireland',
                'Italy',
                'Russia'
              ],
              correctAnswer: 'Ireland'
              },
              {
                question: 'Which language was successfully revived by Eliezer Ben Yehuda after having no native speaker for centuries, and is now the primary language spoken in a country of over 8 million citizens?',
                category: 'LANGUAGES',
                answers: [
                  'Hebrew',
                  'Togan',
                  'Belarusian',
                  'Serbian'
                ],
                correctAnswer: 'Hebrew'
                },
                {
                  question: 'What is the name of the famous fault along California?',
                  category: 'EARTH SCIENCES',
                  answers: [
                    'Mariana\'s fault',
                    'San Francisco Fault',
                    'Itsnotyar Fault',
                    'San Andrea\'s fault'
                  ],
                  correctAnswer: 'San Andrea\'s fault'
                  }

    ],
    questionNumber: 0,
    correct: 0,
    incorrect: 0
  };

  //we declare an html variable that contains the default html file for the main page

  let html =  `<div class="welcomePage">
  <h3 class="welcomeMessage">Hey there! Let's nerd out a bit. 
      I will ask you ten questions, two from each category: geography,
      astronomy, history, languages, and earth sciences. Are you ready?
  </h3>
  <button class="startQuiz" alt="Let's go" autofocus>Let's go!</button>
  <img src="https://media.giphy.com/media/F9xSlEGUPObba/giphy.gif" alt="Cady character from mean girls saying Jambo">
</div>`;
  

//this function renders our page
 function renderQuizApp() {
   console.log("quiz app is rendered");
   $("main").html(html);
 };
 
 //this function changes the html's value into the question page's
 function loadQuiz() {
   let number = store.questionNumber;
   let selection = store.questions[number].answers;
   console.log(`Quiz No. ${number + 1} is loaded.`)
   return  `<div class="questionPage">
   <h3>
   QUESTION ${number + 1}: ${store.questions[number].category}: ${store.questions[number].question}
</h3>
   <form class="question-form">
       <input type="radio" name="answer" id="answer-a" class="answer" value="${selection[0]}" required>
       <label for="answer">${selection[0]}</label><br>
       <input type="radio" name="answer" id="answer-b" class="answer" value="${selection[1]}">
       <label for="answer">${selection[1]}</label><br>
       <input type="radio" name="answer" id="answer-c" class="answer" value="${selection[2]}">
       <label for="answer">${selection[2]}</label><br>
       <input type="radio" name="answer" id="answer-d" class="answer" value="${selection[3]}">
       <label for="answer">${selection[3]}</label><br>
       <button type="submit" class="answerSubmit">Submit Answer</button>
   </form>
   <p>Correct: ${store.correct}</p><p>Incorrect: ${store.incorrect}</p>
</div>`
 }

 //this function changes the html value if the user selects a correct answer

 function isCorrect(answer) {
   console.log("Page for correct answers loaded!")
   html =  `<div class="correctPage">
   <h3>Great job! ${answer} is the correct answer!</h3>
   <p>Correct: ${store.correct}</p><p>Incorrect: ${store.incorrect}</p>
   <button class="nextQuestion">Next Question</button>
   <img src="https://media.giphy.com/media/l4q7TIW8nEZYOJUf6/giphy.gif" alt="Bravocado">
</div>`
 }

 //this function changes the html value if the user selects the wrong answer

 function isIncorrect(answer) {
   console.log("Page for wrong answers loaded!")
   html =  `<div class="wrongPage">
   <h3>Oh no! The correct answer is ${answer}. Better luck next time!</h3>
   <p>Correct: ${store.correct}</p><p>Incorrect: ${store.incorrect}</p>
   <button class="nextQuestion">Next Question</button>
   <img src="https://media.giphy.com/media/xUPGcl3ijl0vAEyIDK/giphy.gif" alt="there was an attempt">
</div>`
 }

 //this function changes the html value when the user finishes the last question

 function endPage() {
   console.log("End page is triggered");
   html =  `<div class="endOfQuiz">
   <h3>All done! Let's see how you did!</h3>
   <h3>Correct: ${store.correct}</h3>
   <h3>Incorrect: ${store.incorrect}</h3>
   <button class="restartQuiz" alt="do it again">Do it again!</button>
   <img src="https://media.giphy.com/media/3o85xK9ReqLLQD8GL6/giphy.gif" alt="dancing glob">
</div>`
  store.incorrect = 0;
  store.correct = 0;
  store.questionNumber = 0;
 }

 //this function checks whether the answer is correct or incorrect

 function answerCheck(review) {
  let i = store.questionNumber;
  let result = (review === store.questions[i].correctAnswer) ? "Correct" : "Incorrect";
  if(result === "Correct"){
    store.correct += 1;
    isCorrect(store.questions[i].correctAnswer);
  } else {
    store.incorrect += 1;
    isIncorrect(store.questions[i].correctAnswer);
  }
  console.log(`The answer is ${result}!`)
  store.questionNumber++
 }

 //function that gets triggered when the start quiz button is clicked
 function handleStartQuiz() {
   $(".startQuiz").click(function(event) {
   console.log("Start quiz has been clicked");
   html = loadQuiz();
   main();
   });
 }


//function that gets triggered when the user submits an answer
 function handleSubmit() {
   $(".question-form").submit(event => {
     event.preventDefault();
     console.log("Answer submit was clicked");
     let userAnswer = $("input[name='answer']:checked").val();
     answerCheck(userAnswer);
     main();
   })
   
}
//function that gets triggered when the user clicks the button for the next question
function handleNextQuestion() {
  $(".nextQuestion").click(function(event) {
  console.log( `clicked to load question ${store.questionNumber + 1}`);
  if(store.questionNumber < 10) {
  html = loadQuiz();
  } else {
    endPage();
  }
  main();
  });
}

//function that gets triggered when the restart quiz button is clicked
function handleRestart() {
  $(".restartQuiz").click(function(event) {
    console.log("Restart quiz has been clicked");
    html = loadQuiz();
    main();
    });
}

  function main(){
    renderQuizApp();
    handleStartQuiz();
    handleSubmit();
    handleNextQuestion();
    handleRestart();
  };

  $(main());
