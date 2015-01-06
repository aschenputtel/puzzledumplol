var count = 1;
function answerIntake() {
    var answer = prompt("Answer:");
    
    if (answer.toLowerCase() == 'there is no such thing as coincidence.' || answer.toLowerCase() == 'there is no such thing as coincidence') {
        document.getElementById("textchange").innerHTML = 'You got the answer right! Take the code "c2hno3" back to IceQueenMiki.';
    }
    else if(count == 1){
        document.getElementById("textchange").innerHTML = 'Whoops! Try one more time.<br>Hint: Periodic Table.';
        count++;
    }
    else{
        document.getElementById("textchange").innerHTML = "Hey, I'm out of hints to give you, but there's more than one way to solve this one.";
    }
}