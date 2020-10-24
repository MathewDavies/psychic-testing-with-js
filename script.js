let compNumber = 0;
console.log(compNumber);
let countCorrect =0;
let countTotal =0;
let result = "";
let percentage = 0;
let percentageDisplay = document.getElementById('percentage');
let compNumberDisplay = document.getElementById('comp-ans');
let correctIncorrectDisplay = document.getElementById('correct-incorrect');
let yourInputDisplay = document.getElementById('your-input');

//create function to check answers

function runTest(input){
    compNumber = (Math.floor(Math.random()*5)+1); //create a random number between 1 and 5
    if (compNumber == input) {
        console.log(compNumber);
        console.log(input);
        result ="Correct";
        countCorrect++
    } else{
        console.log(compNumber);
        console.log(input);
        result ="Incorrect";
     
    }
countTotal++
percentage = (countCorrect/countTotal)*100;

yourInputDisplay.innerHTML= input;
percentageDisplay.innerHTML = Math.round(percentage) + "%";
compNumberDisplay.innerHTML = compNumber;
correctIncorrectDisplay.innerHTML = result;

//console.log(result);
//console.log(countTotal);
//console.log(countCorrect);
//console.log(percentage);
};

function reset(){

percentage = 0;
countCorrect = 0;
countTotal = 0;
percentageDisplay.innerHTML = "";
compNumberDisplay.innerHTML = "";
correctIncorrectDisplay.innerHTML = "";
yourInputDisplay.innerHTML="";

}



