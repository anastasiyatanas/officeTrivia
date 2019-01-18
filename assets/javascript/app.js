
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
  counter:20,
  correct:0,
  incorrect:0,
  
}

var questions = [
  {
      question: "According to Phoebe, what is a lobster?",
      answers: ["Something expensive you eat.", "A person whom another is meant to be with forever.", "A dance move.", "A slang word."],
      answer: "A person whom another is meant to be with forever."
  },
  {
      question: "What two people never get together romantically?",
      answers: ["Monica and Chandler.", "Joey and Rachel", "Joey and Phoebe", "Ross and Rachel"],
      answer: "Joey and Phoebe"
  },
  {
      question: "What was thefirst outfit we see Rachel in the pilot episode?",
      answers: ["A wedding dress.", "Jeans and a jacket.", "A red rain coat", "Her work uniform."],
      answer: "A wedding dress."
  },
  {
      question: "What is Dwight's Sensei's name?",
      answers: ["Stuart", "Mr. Miyagi", "George", "Ira"],
      answer: "a nubbin"
  },
  {
      question: "Who's the first to find out about Monica and Chandler?",
      answers: ["Phoebe", "Ross", "Rachel", "Joey"],
      answer: "Joey"
  },    
  {
    question: "'WE WERE ON A BREAK!'",
    answers: ["Monica", "Ross", "Chandler", "Joey"],
    answer: "Ross"
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



 