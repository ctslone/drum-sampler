$(document).ready(function() {
    // console.log("ready")

    $("#high-hat-closed").click(function() {
        console.log("hh closed")
    })

    $("#high-hat-open").click(function() {
        console.log("hh open")
    })

    $("#kick").click(function() {
        console.log("kick");
        playKick()
    })

    $("#snare").click(function() {
        console.log("snare")
        playSnare()
    })

    $("#crash").click(function() {
        console.log("crash")
    })

    function playKick() {
        var kick = document.createElement("audio");
        kick.src = "./assets/media/kick.wav"
        kick.play();
    }

    function playSnare() {
        var snare = document.createElement("audio");
        snare.src = "./assets/media/snare.wav"
        snare.play();
    }
})