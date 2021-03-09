
document.getElementById("validate").addEventListener("click",calculate());

function calculate(){

    var firstNumber= document.getElementById("first_number").value;
    var secondNumber= document.getElementById("second_number").value;

    if(firstNumber != null && secondNumber != null){
        alert("Result: "+ firstNumber*secondNumber);
    }

}
