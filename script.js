var mode = 0

function toggle() {
    if (mode == 0) {
        mode = 1;
        document.getElementById("button").style.translate = "20px"
        document.getElementById("button").style.background = "black"
        document.getElementById("toggle").style.background = "white"
        document.getElementById("toggle").style.border = "3px solid white"
        document.body.style.background = "black"
    } else {
        mode = 0;document.getElementById("button").style.translate = "0px"
        document.getElementById("button").style.background = "white"
        document.getElementById("toggle").style.background = "black"
        document.getElementById("toggle").style.border = "3px solid black"
        document.body.style.background = "white"
    }
}