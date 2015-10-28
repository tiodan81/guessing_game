var name = prompt('What is your name?');

console.log('Username: ' + name);

alert('Glad you want to play the game, ' + name + '. We think you\'ll find it quite edutaining. Let\'s get started.');

var questions = ['Is my middle name Paul', 'Do I play the guitar', 'Am I left-handed'];
var correctAnswers = 0;
var corrections = ['my middle name is Paul', 'I do play the guitar', 'I am left-handed'];
var clarifications = ['To clarify: '];

var quiz = function () {
  for (var i = 0; i < questions.length;) {
    var response = prompt(questions[i] + '? (yes/no)').toLowerCase();
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
  }
}

quiz();

var message = '';

if (clarifications.length === 4) {
  message = clarifications[0] + clarifications[1] + ', ' + clarifications[2] + ', and ' + clarifications[3] + '.';
} else if (clarifications.length === 3) {
  message = clarifications[0] + clarifications[1] + ' and ' + clarifications[2] + '.';
} else if (clarifications.length === 2) {
  message = clarifications[0] + clarifications[1] + '.';
} else if (clarifications.length === 1) {
  message = '';
}

alert('Good work, you got ' + correctAnswers + ' out of 3 right! ' + message);

var age = 'How old am I?';
var q4 = prompt('Bonus question: ' + age);

if (parseInt(q4) === 34) {
  alert("Correct! I'm 34 years young!");
} else if (parseInt(q4) > 34) {
  alert("Nope! I'm younger than that.");
} else if (parseInt(q4) < 34) {
  alert("Nope! I'm older than that.");
} else {
  alert("That answer doesn't make much sense.");
}
