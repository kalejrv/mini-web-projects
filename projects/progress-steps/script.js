"use strict";
const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentStep = 1;
prevBtn.addEventListener("click", () => {
    currentStep--;
    if (currentStep < 1) {
        currentStep = 1;
    }
    ;
    disabledTrueOrFalse();
    updateProgress();
});
nextBtn.addEventListener("click", () => {
    currentStep++;
    if (currentStep > circles.length) {
        currentStep = circles.length;
    }
    ;
    disabledTrueOrFalse();
    updateProgress();
});
const disabledTrueOrFalse = () => {
    if (currentStep > 1) {
        prevBtn.disabled = false;
    }
    else {
        prevBtn.disabled = true;
    }
    ;
    if (currentStep === circles.length) {
        nextBtn.disabled = true;
    }
    else {
        nextBtn.disabled = false;
    }
    ;
};
const updateProgress = () => {
    circles.forEach((circle, index) => {
        if (currentStep === (index + 1)) {
            circle.classList.add("active");
        }
        else if (currentStep === index) {
            circle.classList.remove("active");
        }
        ;
    });
    const actives = document.querySelectorAll(".active");
    progress.style.width = `${((actives.length - 1) / (circles.length - 1)) * 100}%`;
};
