let taskOne= document.getElementById("textOne")

{function addPara(){
    taskOne.innerHTML="This is the new paragraph that was added. If this doesn't work, I will scream"
}
}

let taskTwo=document.getElementById("picone")

{function changePicture() {
    taskTwo.src="https://www.shutterstock.com/image-illustration/do-something-road-sign-illustration-260nw-126538223.jpg"

}
}


let taskThree=document.getElementById("paraOne")

function changeStanza(){

    taskThree.innerHTML="The text has changed! Voila!"
}

let taskFour=document.getElementById("myImg")

{function changeEnd() {
    taskFour.src="https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg"

}
}

let taskFive=document.getElementById("imgMid")

{function changeMid() {
    taskFive.src="https://i0.wp.com/suddenlycat.com/wp-content/uploads/2020/09/Screenshot-2020-08-30-at-2.41.56-AM.png?resize=814%2C1024&ssl=1"

}
}

function changeLink() {
    let anchor = document.createElement('a');
    let link = document.createTextNode("FindtheCow");
    anchor.appendChild(link);
    anchor.href = "https://findtheinvisiblecow.com";
    document.body.appendChild(anchor);
}














