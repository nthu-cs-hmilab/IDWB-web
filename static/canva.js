var model_nancy1 = document.getElementById("nancy1");
var model_nancy2 = document.getElementById("nancy2");
var model_left_micro = document.getElementById("left-micro");
var model_right_micro = document.getElementById("right-micro");
var model_proof5 = document.getElementById("proof5");


var btn_nancy1 = document.getElementById("nancy1-btn");
var btn_nancy2 = document.getElementById("nancy2-btn");
var btn_left_micro = document.getElementById("left-micro-btn");
var btn_right_micro = document.getElementById("right-micro-btn");
var btn_proof5 = document.getElementById("proof5-btn");

var span_nancy1 = document.getElementById("close-nancy1");
var span_nancy2 = document.getElementById("close-nancy2");
var span_left_micro = document.getElementById("close-left-micro");
var span_right_micro = document.getElementById("close-right-micro");
var span_proof5 = document.getElementById("close-proof5");

btn_nancy1.onclick = function () {
    model_nancy1.style.display = "block";
}
btn_nancy2.onclick = function () {
    model_nancy2.style.display = "block";
}
btn_left_micro.onclick = function () {
    model_left_micro.style.display = "block";
}
btn_right_micro.onclick = function () {
    model_right_micro.style.display = "block";
}
btn_proof5.onclick = function () {
    model_proof5.style.display = "block";
}


span_nancy1.onclick = function () {
    model_nancy1.style.display = "none";
}
span_nancy2.onclick = function () {
    model_nancy2.style.display = "none";
}
span_left_micro.onclick = function () {
    model_left_micro.style.display = "none";
}
span_right_micro.onclick = function () {
    model_right_micro.style.display = "none";
}
span_proof5.onclick = function () {
    model_proof5.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == model_nancy1) {
        model_nancy1.style.display = "none";
    }
}
window.onclick = function (event) {
    if (event.target == model_nancy2) {
        model_nancy2.style.display = "none";
    }
}
window.onclick = function (event) {
    if (event.target == model_left_micro) {
        model_left_micro.style.display = "none";
    }
}
window.onclick = function (event) {
    if (event.target == model_right_micro) {
        model_right_micro.style.display = "none";
    }
}
window.onclick = function (event) {
    if (event.target == model_proof5) {
        model_proof5.style.display = "none";
    }
}