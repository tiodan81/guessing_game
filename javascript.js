var name = prompt('What is your name?');

console.log('Username: ' + name);

alert('Glad you want to play the game, ' + name + '. We think you\'ll find it quite edutaining. Let\'s get started.');

var correctAnswers = 0;
var incorrectAnswers = ['To clarify: '];

var midName = 'Is my middle name Paul? (yes/no)';
var q1 = prompt(midName).toLowerCase();

if (q1 === 'yes' || q1 === 'y') {
  correctAnswers += 1;
  console.log(midName + ' User responded "' + q1 + '". Correct. ');
} else {
  incorrectAnswers.push('my middle name is Paul');
  console.log(midName + ' User responded "' + q1 + '". Incorrect. ');
}

var guitar = 'Do I play the guitar? (yes/no)';
var q2 = prompt(guitar).toLowerCase();

if (q2 === 'yes' || q2 === 'y') {
  correctAnswers += 1;
  console.log(guitar + ' User responded "' + q2 + '". Correct. ');
} else {
  incorrectAnswers.push('I do play the guitar');
  console.log(guitar + ' User responded "' + q2 + '". Incorrect. ');
}

var handed = 'Am I left-handed? (yes/no)';
var q3 = prompt(handed).toLowerCase();

if (q3 === 'yes' || q3 === 'y') {
  correctAnswers += 1;
  console.log(handed + ' User responded "' + q3 + '". Correct. ');
} else {
  incorrectAnswers.push('I am left-handed');
  console.log(handed + ' User responded "' + q3 + '". Incorrect. ');
}

var clarification = '';

if (incorrectAnswers.length === 4) {
  clarification = incorrectAnswers[0] + incorrectAnswers[1] + ', ' + incorrectAnswers[2] + ', and ' + incorrectAnswers[3] + '.';
} else if (incorrectAnswers.length === 3) {
  clarification = incorrectAnswers[0] + incorrectAnswers[1] + ' and ' + incorrectAnswers[2] + '.';
} else if (incorrectAnswers.length === 2) {
  clarification = incorrectAnswers[0] + incorrectAnswers[1] + '.';
} else if (incorrectAnswers.length === 1) {
  clarification = '';
}

alert('Good work, you got ' + correctAnswers + ' out of 3 right! ' + clarification);

var age = 'How old am I?';
var q4 = prompt('Bonus question: ' + age);

if (parseInt(q4) === 34) {
  alert("Correct! I'm 34 years young!");
} else if (parseInt(q4) > 34) {
  alert("Nope! I'm younger than that.");
} else {
  alert("Nope! I'm older than that.");
}
