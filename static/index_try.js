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
    if (value < 1000) {
        index_21.style.opacity= 0;
    }
    else {
        index_21.style.opacity= 1;
    }
    // world map
    if(value < 1100) {
        index_22.style.opacity= 0;
    }
    else if (1100 < value < 3800){
        index_22.style.opacity= 1;
    }
    else if (3800 < value < 5200){
        index_22.style.opacity= 1;
        index_22.style.transform="scale(1.3)";
    }
    else {
        index_22.style.opacity= 0;
    }
    // header1
    if (value < 2000) {
        index_header1.style.opacity= 0;
    }
    else if (2000 < value < 2400){
        index_header1.style.opacity= 1;
    }
    else if (value > 2400){
        index_header1.style.opacity= 0;
    }
    // countries
    if (value < 2400) {
        index_23.style.opacity= 0;
    }
    else if (2400 < value < 3000){
        index_23.style.opacity= 1;
    }
    else {
        index_23.style.opacity= 0;
    }







    if(value > 3800) {
        index_1.style.opacity= 1;
    }
    else {
        index_1.style.opacity= 0;
    }
    if(value > 3900) {
        index_2.style.opacity= 1;
    }
    else {
        index_2.style.opacity= 0;
    }
    if(value > 4600) {
        index_3.style.opacity= 1;
    }
    else {
        index_3.style.opacity= 0;
    }
    if(value > 4650) {
        index_4.style.opacity= 1;
    }
    else {
        index_4.style.opacity= 0;
    }
    if(value > 4700) {
        index_5.style.opacity= 1;
    }
    else {
        index_5.style.opacity= 0;
    }
    if(value > 4750) {
        index_6.style.opacity= 1;
    }
    else {
        index_6.style.opacity= 0;
    }
    if(value > 5100) {
        index_7.style.opacity= 1;
    }
    else {
        index_7.style.opacity= 0;
    }
    if(value > 5150) {
        index_8.style.opacity= 1;
    }
    else {
        index_8.style.opacity= 0;
    }
})

