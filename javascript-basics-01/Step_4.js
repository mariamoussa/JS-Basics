// var name= prompt("What is your name?");
// var surname= prompt("what is your surname?");
// var city= prompt("Where are you from?");

document.getElementById("validate").addEventListener("click",display());

function display(){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var city = document.getElementById("city").value;

    if (name != null && surname != null && city != null){
        alert("\n name : " + name 
            + "\n surname : " + surname 
            + "\n city : " + city);
    }
}
