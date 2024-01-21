// References to DOM Elements
const prevBtn2 = document.querySelector("#prev-btn2");
const nextBtn2 = document.querySelector("#next-btn2");
const book2 = document.querySelector("#book_2");

const paper2_1 = document.querySelector("#page2-1");
const paper2_2 = document.querySelector("#page2-2");
const paper2_3 = document.querySelector("#page2-3");
const paper2_4 = document.querySelector("#page2-4");
const paper2_5 = document.querySelector("#page2-5");
const paper2_6 = document.querySelector("#page2-6");
const paper2_7 = document.querySelector("#page2-7");
const paper2_8 = document.querySelector("#page2-8");
const paper2_9 = document.querySelector("#page2-9");
const paper2_10 = document.querySelector("#page2-10");

// Event Listener
prevBtn2.addEventListener("click", goPrevPage2);
nextBtn2.addEventListener("click", goNextPage2);

// Business Logic
let currentLocation2 = 1;
let numOfPapers2 = 10;
let maxLocation2 = numOfPapers2 + 1;

function openBook2() {
    book2.style.transform = "translateX(50%)";
    prevBtn2.style.transform = "translateX(-17vw)";
    nextBtn2.style.transform = "translateX(17vw)";
}

function closeBook2(isAtBeginning) {
    if(isAtBeginning) {
        book2.style.transform = "translateX(0%)";
    } else {
        book2.style.transform = "translateX(100%)";
    }
    
    prevBtn2.style.transform = "translateX(0px)";
    nextBtn2.style.transform = "translateX(0px)";
}

function goNextPage2() {
    if(currentLocation2 < maxLocation2) {
        switch(currentLocation2) {
            case 1:
                openBook2();
                paper2_1.classList.add("flipped");
                paper2_1.style.zIndex = 11;
                break;
            case 2:
                paper2_2.classList.add("flipped");
                paper2_2.style.zIndex = 12;
                break
            case 3:
                paper2_3.classList.add("flipped");
                paper2_3.style.zIndex = 13;
                break;
            case 4:
                paper2_4.classList.add("flipped");
                paper2_4.style.zIndex = 14;
                break;
            case 5:
                paper2_5.classList.add("flipped");
                paper2_5.style.zIndex = 15;
                break;
            case 6:
                paper2_6.classList.add("flipped");
                paper2_6.style.zIndex = 16;
                
                break;
            case 7:
                paper2_7.classList.add("flipped");
                paper2_7.style.zIndex = 17;
                break;
            case 8:
                paper2_8.classList.add("flipped");
                paper2_8.style.zIndex = 18;
                break;
            case 9:
                paper2_9.classList.add("flipped");
                paper2_9.style.zIndex = 19;
                break;
            case 10:
                paper2_10.classList.add("flipped");
                paper2_10.style.zIndex = 20;
                closeBook2(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation2++;
    }
}

function goPrevPage2() {
    if(currentLocation2 > 1) {
        switch(currentLocation2) {
            case 2:
                closeBook2(true);
                paper2_1.classList.remove("flipped");
                paper2_10.style.zIndex = 2;
                paper2_9.style.zIndex = 3;
                paper2_8.style.zIndex = 4;
                paper2_7.style.zIndex = 5;
                paper2_6.style.zIndex = 6;
                paper2_5.style.zIndex = 7;
                paper2_4.style.zIndex = 8
                paper2_3.style.zIndex = 9;
                paper2_2.style.zIndex = 10;
                paper2_1.style.zIndex = 11;
                break;
            case 3:
                paper2_2.classList.remove("flipped");
                paper2_10.style.zIndex = 4;
                paper2_9.style.zIndex = 5;
                paper2_8.style.zIndex = 6;
                paper2_7.style.zIndex = 7;
                paper2_6.style.zIndex = 8;
                paper2_5.style.zIndex = 9;
                paper2_4.style.zIndex = 10;
                paper2_3.style.zIndex = 11;
                paper2_2.style.zIndex = 12;
                paper2_1.style.zIndex = 11;
                break;
            case 4:
                paper2_3.classList.remove("flipped");
                paper2_10.style.zIndex = 6;
                paper2_9.style.zIndex = 7;
                paper2_8.style.zIndex = 8;
                paper2_7.style.zIndex = 9;
                paper2_6.style.zIndex = 10;
                paper2_5.style.zIndex = 11;
                paper2_4.style.zIndex = 12;
                paper2_3.style.zIndex = 13;
                paper2_2.style.zIndex = 12;
                break;
            case 5:
                paper2_4.classList.remove("flipped");
                paper2_10.style.zIndex = 8;
                paper2_9.style.zIndex = 9;
                paper2_8.style.zIndex = 10;
                paper2_7.style.zIndex = 11;
                paper2_6.style.zIndex = 12;
                paper2_5.style.zIndex = 13;
                paper2_4.style.zIndex = 14;
                paper2_3.style.zIndex = 13;
                break;
            case 6:
                paper2_5.classList.remove("flipped");
                paper2_10.style.zIndex = 10;
                paper2_9.style.zIndex = 11;
                paper2_8.style.zIndex = 12;
                paper2_7.style.zIndex = 13;
                paper2_6.style.zIndex = 14;
                paper2_5.style.zIndex = 15;
                paper2_4.style.zIndex = 14;
                break;
            case 7:
                paper2_6.classList.remove("flipped");
                paper2_10.style.zIndex = 12;
                paper2_9.style.zIndex = 13;
                paper2_8.style.zIndex = 14;
                paper2_7.style.zIndex = 15;
                paper2_6.style.zIndex = 16;
                paper2_5.style.zIndex = 15;
                break;
            case 8:
                paper2_7.classList.remove("flipped");
                paper2_10.style.zIndex = 14;
                paper2_9.style.zIndex = 15;
                paper2_8.style.zIndex = 16;
                paper2_7.style.zIndex = 17;
                paper2_6.style.zIndex = 16;
                break;
            case 9:
                paper2_8.classList.remove("flipped");
                paper2_10.style.zIndex = 16;
                paper2_9.style.zIndex = 17;
                paper2_8.style.zIndex = 18;
                paper2_7.style.zIndex = 17;
                break;
            case 10:
                paper2_9.classList.remove("flipped");
                paper2_10.style.zIndex = 18;
                paper2_9.style.zIndex = 19;
                paper2_8.style.zIndex = 18;
                break;
            case 11:
                openBook2();
                paper2_10.classList.remove("flipped");
                paper2_10.style.zIndex = 20;
                paper2_9.style.zIndex = 19;
                paper2_8.style.zIndex = 14;
                paper2_7.style.zIndex = 15;
                paper2_6.style.zIndex = 16;
                paper2_5.style.zIndex = 15;
                paper2_4.style.zIndex = 14;
                paper2_3.style.zIndex = 13;
                paper2_2.style.zIndex = 12;
                paper2_1.style.zIndex = 11;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation2--;
    }
}