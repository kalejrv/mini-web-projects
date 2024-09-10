const circles = document.querySelectorAll(".circle") as NodeListOf<HTMLDivElement>;
const progress = document.querySelector(".progress") as HTMLDivElement;
const prevBtn = document.getElementById("prevBtn") as HTMLButtonElement;
const nextBtn = document.getElementById("nextBtn") as HTMLButtonElement;
let currentStep: number = 1;

prevBtn.addEventListener("click", (): void => {
  currentStep--;

  if (currentStep < 1) {
    currentStep = 1;
  };

  disabledTrueOrFalse();
  updateProgress();
});

nextBtn.addEventListener("click", (): void => {
  currentStep++;

  if (currentStep > circles.length) {
    currentStep = circles.length;
  };

  disabledTrueOrFalse();
  updateProgress();
});

const disabledTrueOrFalse = (): void => {
  if (currentStep > 1) {
    prevBtn.disabled = false;
  } else {
    prevBtn.disabled = true;
  };

  if (currentStep === circles.length) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  };
};

const updateProgress = (): void => {
  circles.forEach((circle: HTMLDivElement, index: number): void => {
    if (currentStep === (index + 1)) {
      circle.classList.add("active");
    } else if (currentStep === index) {
      circle.classList.remove("active");
    };
  });

  const actives = document.querySelectorAll(".active") as NodeListOf<HTMLDivElement>;
  progress.style.width = `${((actives.length - 1) / (circles.length - 1)) * 100}%`;
};
