document.querySelectorAll("button");

var no_of_buttons=document.querySelectorAll(".drum").length;

// detecting button press
for(var i=0;i<no_of_buttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){;

    var buttonInnerHTML=this.innerHTML;
    makesound(buttonInnerHTML)
})}

// detecting keyboardpress
document.addEventListener("keypress",function(event){
    // console.log(event);
    makesound(event.key);
});

function makesound(key){
    switch(key){
        case'a':
            var audio=new Audio("sounds/0.mp3");
            audio.play();
            break;
        case'b':
            var audio=new Audio("sounds/1.mp3");
            audio.play();
            break;
        case'c':
            var audio=new Audio("sounds/2.mp3");
            audio.play();
            break;
        case'd':
            var audio=new Audio("sounds/3.mp3");
            audio.play();
            break;
        case'e':
            var audio=new Audio("sounds/4.mp3");
            audio.play();
            break;
        case'f':
            var audio=new Audio("sounds/5.mp3");
            audio.play();
            break;
        case'g':
            var audio=new Audio("sounds/6.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}