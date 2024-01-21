let index_21 = document.getElementById('index-21');
let index_22 = document.getElementById('index-22');
let index_23 = document.getElementById('index-23');
let index_1 = document.getElementById('index-1');
let index_2 = document.getElementById('index-2');
let index_3 = document.getElementById('index-3');
let index_4 = document.getElementById('index-4');
let index_5 = document.getElementById('index-5');
let index_6 = document.getElementById('index-6');
let index_7 = document.getElementById('index-7');
let index_8 = document.getElementById('index-8');
let index_header1 = document.getElementById('index-header1');

window.addEventListener('scroll', function(){
    height = window.outerHeight;
    console.log("height:" + height)
    let value = window.scrollY;
    console.log(value);
    //background
    if (value < 100) {
        index_21.style.opacity= 0;
    }
    else {
        index_21.style.opacity= 1;
    }
    // world map
    if(value < 400) {
        index_22.style.opacity= 0;
    }
    else if (400 < value < 500){
        index_22.style.opacity= 1;
    }
    else if (500 < value < 600){
        index_22.style.opacity= 1;
    }
    else {
        index_22.style.opacity= 0;
    }
    // header1
    if (value < 550) {
        index_header1.style.opacity= 0;
    }
    else if (550 < value < 650){
        index_header1.style.opacity= 1;
    }
    else {
        index_header1.style.opacity= 0;
    }
    // countries
    if (value < 500) {
        index_23.style.opacity= 0;
    }
    else if (500 < value < 600){
        index_23.style.opacity= 1;
    }
    else {
        index_23.style.opacity= 0;
    }







    if(value > 500) {
        index_1.style.opacity= 1;
    }
    else {
        index_1.style.opacity= 0;
    }
    if(value > 510) {
        index_2.style.opacity= 1;
    }
    else {
        index_2.style.opacity= 0;
    }
    if(value > 900) {
        index_3.style.opacity= 1;
    }
    else {
        index_3.style.opacity= 0;
    }
    if(value > 950) {
        index_4.style.opacity= 1;
    }
    else {
        index_4.style.opacity= 0;
    }
    if(value > 1000) {
        index_5.style.opacity= 1;
    }
    else {
        index_5.style.opacity= 0;
    }
    if(value > 1050) {
        index_6.style.opacity= 1;
    }
    else {
        index_6.style.opacity= 0;
    }
    if(value > 1100) {
        index_7.style.opacity= 1;
    }
    else {
        index_7.style.opacity= 0;
    }
    if(value > 1150) {
        index_8.style.opacity= 1;
    }
    else {
        index_8.style.opacity= 0;
    }
    if(value > 1150) {
        index_9.style.opacity= 1;
    }
    else {
        index_9.style.opacity= 0;
    }
})

