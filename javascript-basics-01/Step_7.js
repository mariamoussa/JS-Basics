
document.getElementById("validate").addEventListener("click",calculate());

function calculate(){

    var shoeSize= document.getElementById("shoe_size").value;
    var year= document.getElementById("year").value;

    if(shoeSize != null && year != null){
        alert(((((shoeSize*2)+5)*50)-year)+1766);
    }

}
