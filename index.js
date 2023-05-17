for (var i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var s = this.innerHTML;
        makeSound(s);
        buttonAnimation(s);
        //  w,a,s,d,j,k,l


    });
}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);
    buttonAnimation(event.key);

});

function buttonAnimation(currentey) {
    var activeButton = document.querySelector("." + currentey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

function makeSound(key) {


    var s = key;
    if (s === "w") {
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    }
    if (s === "a") {
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }
    if (s === "s") {
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    }
    if (s === "d") {
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }
    if (s === "j") {
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }
    if (s === "k") {
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    } if (s === "l") {
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }

}
