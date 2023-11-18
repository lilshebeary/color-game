
const colorArray = ['cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'yellow','blue' ] // removed white as an option so it can display color change
colorArray.sort();
console.log(colorArray)
let length = colorArray.length;

let secretColor = colorArray[Math.floor(Math.random() * length)]; // pick random color
const promptMessage = "I'm thinking of one of these colors: " + colorArray;
let answerSpace = document.getElementById("textarea");
let secretColorNum = colorArray.indexOf(secretColor);

let gameAreaBackground = document.getElementById("gameArea");



function runGame() {
  let numTries = 0;
  let secretColorNum = colorArray.indexOf(secretColor); // get index value to compare
  
  let guessColor = document.getElementById("pickedColor").value; // gets users choice
  let guessColorNum = colorArray.indexOf(guessColor); // get index value to compare

  if (guessColor === secretColor){
    document.body.style.backgroundColor = secretColor;
    answerSpace.textContent = "CORRECT";
    let gameAreaBackground = document.getElementById("gameArea");
    gameAreaBackground.style.backgroundColor = secretColor;

} else if(guessColorNum < secretColorNum){
    answerSpace.textContent = guessColor + " is incorrect. Your guess is alphabetically lower. ";
   numTries++;
} else if (guessColorNum > secretColorNum) {
    answerSpace.textContent = guessColor + " is incorrect. Your guess is alphabetically higher. ";
}
}


const boxShadowArray = [
    '10 20 20 15px rgba(255, 0, 0, 0.5)',
    '20 -330 15px rgba(0, 255, 0, 0.5)',
    '10 20 15px rgba(0, 0, 255, 0.5)',
    '10 -10 20 15px rgba(255, 255, 0, 0.5)',
    '10 20 -110 21px rgba(255, 0, 255, 0.5)'
  ];
  let currentBoxShadowIndex = 0;
  
  function changeBoxShadow() {
    const boxShadowChangingSpan = document.getElementById('gameArea');
    boxShadowChangingSpan.style.boxShadow = boxShadowArray[currentBoxShadowIndex];
    currentBoxShadowIndex = (currentBoxShadowIndex + 1) % boxShadowArray.length;
  }
  
  setInterval(changeBoxShadow, 2000);

function restartGame() {
    secretColor = colorArray[Math.floor(Math.random() * length)];
    answerSpace.textContent = "New Game";
    document.getElementById("gameArea").style.backgroundColor = "white";
}
function changeColor() {
    const randomColor = colorArray[Math.floor(Math.random() * length)];
    colorChangingSpan.style.color = randomColor;
  }
  
  setInterval(changeColor, 1000);
