
function passPrompt() {
    var answer = prompt("Please enter the pin to access flag:");
    
    if (answer == '2239690868') {
        document.getElementById("textchange").innerHTML = 'You got the answer right! Take the code "c6h12o6" back to IceQueenMiki for your free graphic! :D';
    }
    else if (answer == null){
    	document.getElementById("textchange").innerHTML = 'At least try, dangit!';
    }
    else if (answer.length < 5){
        document.getElementById("textchange").innerHTML = 'Try a larger number.';
    }
    else{
    	document.getElementById("textchange").innerHTML = 'Wrong answer! Take the code "sugar" back to IceQueenMiki for a hint!';
    }
}