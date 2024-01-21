// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#page1");
const paper2 = document.querySelector("#page2");
const paper3 = document.querySelector("#page3");
const paper4 = document.querySelector("#page4");
const paper5 = document.querySelector("#page5");
const paper6 = document.querySelector("#page6");
const paper7 = document.querySelector("#page7");
const paper8 = document.querySelector("#page8");
const paper9 = document.querySelector("#page9");
const paper10 = document.querySelector("#page10");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 10;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-17vw)";
    nextBtn.style.transform = "translateX(17vw)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 11;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 12;
                break
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 13;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 14;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 15;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 16;
                
                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 17;
                break;
            case 8:
                paper8.classList.add("flipped");
                paper8.style.zIndex = 18;
                break;
            case 9:
                paper9.classList.add("flipped");
                paper9.style.zIndex = 19;
                break;
            case 10:
                paper10.classList.add("flipped");
                paper10.style.zIndex = 20;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper10.style.zIndex = 2;
                paper9.style.zIndex = 3;
                paper8.style.zIndex = 4;
                paper7.style.zIndex = 5;
                paper6.style.zIndex = 6;
                paper5.style.zIndex = 7;
                paper4.style.zIndex = 8
                paper3.style.zIndex = 9;
                paper2.style.zIndex = 10;
                paper1.style.zIndex = 11;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper10.style.zIndex = 4;
                paper9.style.zIndex = 5;
                paper8.style.zIndex = 6;
                paper7.style.zIndex = 7;
                paper6.style.zIndex = 8;
                paper5.style.zIndex = 9;
                paper4.style.zIndex = 10;
                paper3.style.zIndex = 11;
                paper2.style.zIndex = 12;
                paper1.style.zIndex = 11;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper10.style.zIndex = 6;
                paper9.style.zIndex = 7;
                paper8.style.zIndex = 8;
                paper7.style.zIndex = 9;
                paper6.style.zIndex = 10;
                paper5.style.zIndex = 11;
                paper4.style.zIndex = 12;
                paper3.style.zIndex = 13;
                paper2.style.zIndex = 12;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper10.style.zIndex = 8;
                paper9.style.zIndex = 9;
                paper8.style.zIndex = 10;
                paper7.style.zIndex = 11;
                paper6.style.zIndex = 12;
                paper5.style.zIndex = 13;
                paper4.style.zIndex = 14;
                paper3.style.zIndex = 13;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper10.style.zIndex = 10;
                paper9.style.zIndex = 11;
                paper8.style.zIndex = 12;
                paper7.style.zIndex = 13;
                paper6.style.zIndex = 14;
                paper5.style.zIndex = 15;
                paper4.style.zIndex = 14;
                break;
            case 7:
                paper6.classList.remove("flipped");
                paper10.style.zIndex = 12;
                paper9.style.zIndex = 13;
                paper8.style.zIndex = 14;
                paper7.style.zIndex = 15;
                paper6.style.zIndex = 16;
                paper5.style.zIndex = 15;
                break;
            case 8:
                paper7.classList.remove("flipped");
                paper10.style.zIndex = 14;
                paper9.style.zIndex = 15;
                paper8.style.zIndex = 16;
                paper7.style.zIndex = 17;
                paper6.style.zIndex = 16;
                break;
            case 9:
                paper8.classList.remove("flipped");
                paper10.style.zIndex = 16;
                paper9.style.zIndex = 17;
                paper8.style.zIndex = 18;
                paper7.style.zIndex = 17;
                break;
            case 10:
                paper9.classList.remove("flipped");
                paper10.style.zIndex = 18;
                paper9.style.zIndex = 19;
                paper8.style.zIndex = 18;
                break;
            case 11:
                openBook();
                paper10.classList.remove("flipped");
                paper10.style.zIndex = 20;
                paper9.style.zIndex = 19;
                paper8.style.zIndex = 14;
                paper7.style.zIndex = 15;
                paper6.style.zIndex = 16;
                paper5.style.zIndex = 15;
                paper4.style.zIndex = 14;
                paper3.style.zIndex = 13;
                paper2.style.zIndex = 12;
                paper1.style.zIndex = 11;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}