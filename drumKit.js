let instrumentItems = document.querySelectorAll(".instrument-item");

function wiggle(num) {
    document.querySelectorAll(".instrument-image img")[num].classList.remove("center");
    document.querySelectorAll(".instrument-image img")[num].classList.add("rotate-right");

    setTimeout(function () {
        document.querySelectorAll(".instrument-image img")[num].classList.remove("rotate-right");
        document.querySelectorAll(".instrument-image img")[num].classList.add("center");
    }, 50);
}



// Click Events to play sound
for (let i = 0; i < instrumentItems.length; i++) {
    instrumentItems[i].addEventListener("click", () => {

        let instrument = instrumentItems[i].getAttribute('data-name');

        if (instrument === "snare") {
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            wiggle(i);

        } else if (instrument === "tom1") {
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            wiggle(i);
        } else if (instrument === "tom2") {
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            wiggle(i);
        } else if (instrument === "tom3") {
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            wiggle(i);
        } else if (instrument === "tom4") {
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            wiggle(i);
        } else if (instrument === "crash") {
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            wiggle(i);
        } else if (instrument === "kick") {
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            wiggle(i);
        } else {
            console.log("err");
        }

    })
}



// Keyboard Events to play sound
document.addEventListener("keypress", (e) => {

    if (e.key === "w") {
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        wiggle(0);
    } else if (e.key === "a") {
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        wiggle(1);
    } else if (e.key === "s") {
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        wiggle(2);
    } else if (e.key === "d") {
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        wiggle(3);
    } else if (e.key === "j") {
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        wiggle(4);
    } else if (e.key === "k") {
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        wiggle(5);
    } else if (e.key === "l") {
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        wiggle(6);
    } else {
        console.log("err");
    }
});