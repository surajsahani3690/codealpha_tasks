
let display = document.querySelector("#display");

function sinf() {
    let degrees = parseFloat(display.value);
    display.value = Math.sin(degrees * Math.PI / 180);
}

function cosf() {
    let degrees = parseFloat(display.value);
    display.value = Math.cos(degrees * Math.PI / 180);
}

function tanf() {
    let degrees = parseFloat(display.value);
    display.value = Math.tan(degrees * Math.PI / 180);
}

function sqrf() {
    display.value = Math.sqrt(parseFloat(display.value));
}

