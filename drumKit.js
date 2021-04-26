let instrumentItems = document.querySelectorAll(".instrument-item");

function turnRight(num) {
    document.querySelectorAll(".instrument-image img")[num].classList.remove("center");
    document.querySelectorAll(".instrument-image img")[num].classList.add("rotate-right");
}

function center(num) {
    document.querySelectorAll(".instrument-image img")[num].classList.remove("rotate-right");
    document.querySelectorAll(".instrument-image img")[num].classList.add("center");
}



// Click Events to play sound
for (let i = 0; i < instrumentItems.length; i++) {
    instrumentItems[i].addEventListener("click", () => {

        let instrument = instrumentItems[i].getAttribute('data-name');

        if (instrument === "snare") {
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            turnRight(i);
            setTimeout(function () {
                center(i)
            }, 50);

        } else if (instrument === "tom1") {
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            turnRight(i);
            setTimeout(function () {
                center(i)
            }, 50);
        } else if (instrument === "tom2") {
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            turnRight(i);
            setTimeout(function () {
                center(i)
            }, 50);
        } else if (instrument === "tom3") {
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            turnRight(i);
            setTimeout(function () {
                center(i)
            }, 50);
        } else if (instrument === "tom4") {
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            turnRight(i);
            setTimeout(function () {
                center(i)
            }, 50);
        } else if (instrument === "crash") {
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            turnRight(i);
            setTimeout(function () {
                center(i)
            }, 50);
        } else if (instrument === "kick") {
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            turnRight(i);
            setTimeout(function () {
                center(i)
            }, 50);
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
        turnRight(0);
    } else if (e.key === "a") {
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        turnRight(1);
    } else if (e.key === "s") {
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        turnRight(2);
    } else if (e.key === "d") {
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        turnRight(3);
    } else if (e.key === "j") {
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        turnRight(4);
    } else if (e.key === "k") {
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        turnRight(5);
    } else if (e.key === "l") {
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        turnRight(6);
    } else {
        console.log("err");
    }
});





document.addEventListener("keyup", (e) => {

    if (e.key === "w") {
        center(0);
    } else if (e.key === "a") {
        center(1);
    } else if (e.key === "s") {
        center(2);
    } else if (e.key === "d") {
        center(3);
    } else if (e.key === "j") {
        center(4);
    } else if (e.key === "k") {
        center(5);
    } else if (e.key === "l") {
        center(6);
    } else {
        console.log("err");
    }
});