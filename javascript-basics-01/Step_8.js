
document.getElementById("validate").addEventListener("click",display());

function display(){

    var age= document.getElementById("age").value;
   
    if(age!=null){
        if(age>18){
            alert("You are over 18!");
        }else{
            alert("You are under 18!");
        }
    }
}
