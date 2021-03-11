function check(){
    var p1=document.getElementById("password").value;
    var p2=document.getElementById("confirmation").value;

    if(p1!=p2){
        document.getElementById("password").style.borderColor="red";
        document.getElementById("confirmation").style.borderColor="red";

        // document.querySelector("input").style.borderColor="red";
    }
}