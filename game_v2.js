var name = prompt('What is your name?');

console.log('Username: ' + name);

alert('Glad you want to play the game, ' + name + '. We think you\'ll find it quite edutaining. Let\'s get started.');

var questions = ['Is my middle name Paul', 'Do I play the guitar', 'Am I left-handed', 'How old am I', 'Do I love biking', 'How many eyeballs do I have'];
var answers = ['yes', 'yes', 'yes', 34, 'yes', 2];
var correctAnswers = 0;
var corrections = ['my middle name is Paul.', 'I do play the guitar.', 'I am left-handed.', 'I am 34 years old.', 'I do love biking.', 'I have two eyeballs.'];
var clarifications = ['To clarify:'];
var message = '';

function quiz() {
  for (var i = 0; i < questions.length;) {

    var response = prompt(questions[i] + '?');

    if (typeof(answers[i]) === 'string' && typeof(response) === 'string') {
      response = response.toLowerCase();
      if (response === 'yes' || response === 'y') {
        correctAnswers += 1;
        console.log(questions[i] + '? User responded "' + response + '". Correct.');
        i++;
      } else if (response === 'no' || response === 'n') {
        clarifications.push(corrections[i]);
        console.log(questions[i] + '? User responded "' + response + '". Incorrect.');
        i++;
      } else {
        alert('Please respond yes or no.');
        console.log(questions[i] + '? User responded "' + response + '". Incomprehensible.');
        i = i;
      }
    } else if (typeof(answers[i]) === 'number' && typeof(parseInt(response)) === 'number') {
      response = parseInt(response);
      if (response === answers[i]) {
        correctAnswers += 1;
        console.log(questions[i] + '? User responded "' + response + '". Correct.');
        i++;
      } else if (response > answers[i] || response < answers[i]) {
        clarifications.push(corrections[i]);
        console.log(questions[i] + '? User responded "' + response + '". Incorrect.');
        i++;
      } else {
        alert('Please enter a number.');
        console.log(questions[i] + '? User responded "' + response + '". Incomprehensible.');
        i = i;
      }
    } else {
      alert("That's not a valid answer.");
      i = i;
    }
  }
}

function messageBuilder(clarifications) {
  for (var j = 0; j < clarifications.length; j++) {
    message += clarifications[j] + ' ';
  }
};

quiz();

if (clarifications.length > 1) {
  messageBuilder(clarifications);
}

alert('Good work, you got ' + correctAnswers + ' out of ' + questions.length +' right! ' + message);
