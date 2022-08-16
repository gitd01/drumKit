document.querySelectorAll("button");

var no_of_buttons=document.querySelectorAll(".drum").length;
for(var i=0;i<no_of_buttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){;

    var buttonInnerHTML=this.innerHTML;
    switch(buttonInnerHTML){
        case'a':
            var audio=new Audio("sounds/0.mp3");
            audio.play();
            console.log(this.style.color="darkblue");
            break;
        case'b':
            var audio=new Audio("sounds/1.mp3");
            audio.play();
            console.log(this.style.color="darkblue");
            break;
        case'c':
            var audio=new Audio("sounds/2.mp3");
            audio.play();
            console.log(this.style.color="darkblue");
            break;
        case'd':
            var audio=new Audio("sounds/3.mp3");
            audio.play();
            console.log(this.style.color="darkblue");
            break;
        case'e':
            var audio=new Audio("sounds/4.mp3");
            audio.play();
            console.log(this.style.color="darkblue");
            break;
        case'f':
            var audio=new Audio("sounds/5.mp3");
            audio.play();
            console.log(this.style.color="darkblue");
            break;
        case'g':
            var audio=new Audio("sounds/6.mp3");
            audio.play();
            //console.log(this.style.color="darkblue");
            break;
        default:
            console.log(buttonInnerHTML);
    }
})}

document.addEventListener("keypress",function(event){
    console.log(event);
})