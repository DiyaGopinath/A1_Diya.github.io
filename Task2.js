let cat = document.getElementById("catcough")
function changeSize(){
    cat.style.width="600px"
    cat.style.height="800px"
    
}

function reduceSize() {

    cat.style.width="300px"
    cat.style.height="400px"
}


var x = document.getElementById("buttonone");
x.addEventListener("mouseover", Functionone);
x.addEventListener("click", Functiontwo);
x.addEventListener("mouseout", Functionthree);

let Repeat= document.getElementById("paraone")
function Functionone() {
  Repeat.innerHTML += "Hello!<br>";
}

function Functiontwo() {
  Repeat.innerHTML += "Ouch!<br>";
}

function Functionthree() {
 Repeat.innerHTML += "Bye!<br>";
}