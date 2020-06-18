$(document).ready(function() {
    // console.log("ready")
    // Global audio files
    var kick = document.createElement("audio");
    kick.src = "./assets/media/kick.wav";
    var snare = document.createElement("audio");
    snare.src = "./assets/media/snare.wav";
    var openHat = document.createElement("audio");
    openHat.src = "./assets/media/openhat.wav";
    var closedHat = document.createElement("audio");
    closedHat.src = "./assets/media/hihat.wav";
    var ride = document.createElement("audio");
    ride.src = "./assets/media/ride.wav";
    var boom = document.createElement("audio");
    boom.src = "./assets/media/boom.wav";
    var clap = document.createElement("audio");
    clap.src = "./assets/media/clap.wav";
    var tink = document.createElement("audio");
    tink.src = "./assets/media/tink.wav";
    var tom = document.createElement("audio");
    tom.src = "./assets/media/tom.wav";


    $("#high-hat-closed").click(function() {
        console.log("hh closed");
        playClosedHat();
    })

    $("#high-hat-open").click(function() {
        console.log("hh open");
        playOpenHat();
    })

    $("#kick").click(function() {
        console.log("kick");
        playKick()
    })

    $("#snare").click(function() {
        console.log("snare")
        playSnare()
    })

    $("#ride").click(function() {
        console.log("ride");
        playRide();
    })

    $("#boom").click(function() {
        console.log("boom");
        playBoom();
    })

    $("#clap").click(function() {
        console.log("clap");
        playClap();
    })

    $("#tink").click(function() {
        console.log("tink");
        playTink();
    })

    $("#tom").click(function() {
        console.log("tom");
        playTom();
    })

    // Play functions

    function playKick() {
        kick.play();
    }

    function playSnare() {
        snare.play();
    }

    function playOpenHat() {
        openHat.play();
    }

    function playClosedHat() {
        closedHat.play();
    }

    function playRide() {
        ride.play();
    }

    function playBoom() {
        boom.play();
    }

    function playClap() {
        clap.play();
    }

    function playTink() {
        tink.play();
    }

    function playTom() {
        tom.play();
    }
})