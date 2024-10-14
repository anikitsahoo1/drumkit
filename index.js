//for clicks
for(var i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonName=this.innerHTML;
        makeSound(buttonName);
        buttonAnimation(buttonName);
    })
}
//for keypress
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

//sound selector function
function makeSound(key){
    switch (key){

        case "w":
        case "W":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
        case "A":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
        case "S":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
        case "D":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
        case "J":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
        case "K":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;        
        
        case "l":
        case "L":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;        
        
        default:
            console.log(key);
    }
}
//button Animation function 
function buttonAnimation(buttonName){
    var button=document.querySelector("."+buttonName);
    button.classList.add("pressed");
    
    setTimeout(function(){button.classList.remove("pressed");}, 50);
}