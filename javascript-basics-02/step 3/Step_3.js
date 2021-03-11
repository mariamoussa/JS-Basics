document.querySelector("name").addEventListener("blur", display());

function display(){
    document.querySelector("div").textContent = document.getElementById("name").value;
}
