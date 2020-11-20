const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

let secretNumber = randomInRange(0, 100)
let numAttempts = 5

 //invokes the random function


function checkGuess(num) {
  if (num > secretNumber) {
    console.log("Too High");
    return false;
  }
  if (num < secretNumber) {
    console.log("Too Low");
    return false;
  }
  if (num === secretNumber) {
    console.log("Correct!");
    return true;
  }
}
function askGuess() {
numAttempts--
if (numAttempts === 0){
    console.log('You Lose')
    return rl.close();
}
  rl.question("Enter a guess:", function (answer) {
    if (checkGuess(Number(answer))) {
      console.log("You Win");
      rl.close();
    } else {
      askGuess();
    }
  });

}
// askGuess()

function askRange (){
    rl.question("Enter a max number:", function (ans1) {
      let answer1 = Number(ans1)
      console.log('Your Max number is ' + answer1)
      rl.question("Enter a min number:", function(ans2){
        let answer2 = Number(ans2)
          console.log('Your min number is ' + answer2)
          console.log(`...I'm thinking of a number between ${answer2} and ${answer1}`)
          secretNumber = randomInRange(answer2, answer1);
          askGuess();
      })
    })

}

askRange();
