var name = prompt('What is your name?');

console.log('Username: ' + name);

alert('Glad you want to play the game, ' + name + '. We think you\'ll find it quite edutaining. Let\'s get started.');

var questions = ['Is my middle name Paul', 'Do I play the guitar', 'Am I left-handed', 'How old am I', 'Do I love biking', 'How many eyeballs do I have'];
var answers = ['yes', 'yes', 'yes', 34, 'yes', 2];
var correctAnswers = 0;
var corrections = ['My middle name is Paul.', 'I do play the guitar.', 'I am left-handed.', 'I am 34 years old.', 'I do love biking.', 'I have two eyeballs.'];
var result = document.getElementById('results');



function quiz() {
  for (var i = 0; i < questions.length;) {

    var response = prompt(questions[i] + '?');
    var questNum = i+1;
    var ans = document.getElementById("answer" + questNum.toString());

    var logMsg = function() {
      return questions[i] + '? User responded "' + response + '". ';
    }

    function correctAns () {
      correctAnswers += 1;
      console.log(logMsg() + "Correct.");
      ans.innerHTML = 'Correct!';
      i++;
    }

    function incorrectAns () {
      console.log(logMsg() + "Incorrect.");
      ans.innerHTML = 'Incorrect! ' + corrections[i];
      i++;
    }

    function invalidAns () {
      alert('Invalid response. Try again.');
      console.log(logMsg() + "Invalid.");
      i = i;
    }

    if (typeof(answers[i]) === 'string' && typeof(response) === 'string') {
      response = response.toLowerCase();
      if (response === 'yes' || response === 'y') {
        correctAns();
      } else if (response === 'no' || response === 'n') {
        incorrectAns();
      } else {
        invalidAns();
      }
    } else if (typeof(answers[i]) === 'number' && typeof(parseInt(response)) === 'number') {
      response = parseInt(response);
      if (response === answers[i]) {
        correctAns();
      } else if (response > answers[i] || response < answers[i]) {
        incorrectAns();
      } else {
        invalidAns();
      }
    } else {
      invalidAns();
    }
  }
}

quiz();

result.innerHTML = 'Good work, you got ' + correctAnswers + ' out of ' + questions.length +' right! ';
