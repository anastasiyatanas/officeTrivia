
var timer
var startBtn
$('#start').on('click', function(){
  $('#start').remove();
  addQuestions();
  timer=setInterval(countDown,1000)
})
var game = {
  questions:questions,
  currentQuestions:0,
  counter:30,
  correct:0,
  incorrect:0,
  
}

var questions = [
  {
      question: "What Dundies award does Phyllis take home?",
      answers: ["The Busiest Beaver  Dundie", "The Bushiest Beaver dundie", "Spicy Curry Dundie", "Whitest Sneakers Dundie"],
      answer: "The Bushiest Beaver dundie"
  },
  {
      question: "What is the book Michael Scott wrote",
      answers: ["The Great Adventures of Michael Scott", "Somehow I Manage", "Golden Face", "Thats What She Said"],
      answer: "Somehow I Manage"
  },
  {
      question: "Who does Angela name her son after?",
      answers: ["The mayer", "Her grandmother", "Her cat", "A Bible Character"],
      answer: "Her cat"
  },
  {
      question: "Who did Phyllis stuff into a drawer?",
      answers: ["Angelas cat", "Jesus", "Santa Clause", "Dwight"],
      answer: "Jesus"
  },
  {
      question: "'There's too many people on this Earth. We need a new plague.'",
      answers: ["Stanly", "Dwight", "Kevin", "Michael"],
      answer: "Dwight"
  },   
  {
    question: "How do Schrutes make sure that the dead the bury are truly dead?",
    answers: ["dig up the  grave a week later.", "leave them out for a week", "beat them with a bat", "Shotgun to the face"],
    answer: "Shotgun to the face"
},
{
    question: "In which business does Dwight steal the chandelier in his perfect crime?",
    answers: ["Shane Co", "Tiffanys", "Walmart", "The Beet Farm"],
    answer: "Jesus"
},
{
    question: "'I like waking up to  the smell of bacon. Sue Me'",
    answers: ["Meradeth", "Erin", "Kevin", "Michael"],
    answer: "Michael"
},   
  {
    question: "Who  has a worm guy?",
    answers: ["Creed", "Kelly", "Andy", "Erin"],
    answer: "Creed"
}
];

function countDown(){
  game.counter--;
  $('#counter').html(game.counter);
  if(game.counter<=0){
    console.log("You Done!"); 
    timeUp();
  }
}
function timeUp(){
  clearInterval(timer);
  submitGame();
  alert("You Done!");
  console.log("You Done!");
}
function stopTimer() {
  clearInterval(timer);
  submitGame();
}
function addQuestions() {
 $('.question-box').html("");
 for (var i=0; i < questions.length; i++){
   $('.question-box').append($("<h4>" + questions[i].question + "</h4>"));
   for (var k=0; k<questions[i].answers.length; k++) {
     var questionRadioName = "question-"+i;
     $('.question-box').append($("<input type='radio' value='"+ questions[i].answers[k] + "' name=" + questionRadioName + ">"+ questions[i].answers[k]+ "<br>"));
   }
   $('.question-box').append('<hr>');
   $('#buttons').on('click', function(){
    $('#start').append();
  })
  }
}

 


function shuffleQuestions(){
    questions.sort(function(a, b){return 0.5 - Math.random()});
}

function shuffleAnswers(){
  for (var i=0; i<questions.length; i++) {
    questions[i].answers.sort(function(a, b){return 0.5 - Math.random()});
  }
}

function submitGame() {
  console.log("you");
    for (var i=0; i<questions.length; i++)  {
      debugger
       // $.each($("input[name='question-" + i + "']:checked"), function(index, value) {
         // console.log(index, value);
           // console.log($(this).attr('value'));
           var questionName = "question-"+i;
           var value = $("input[name="+questionName+"]:checked").val();
           console.log(value);
            var userGuess = value;
            if (userGuess === questions[i].answer) {
                console.log('correct');
                game.correct++;
            } else {
                console.log('incorrect');
                game.incorrect++;
            }
        //});  
    }
    $('.correct').text(game.correct);
    $('.incorrect').text(game.incorrect);
    $('.end-screen').show();
}



 