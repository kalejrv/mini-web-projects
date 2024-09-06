const images = document.querySelectorAll('.image') as NodeListOf<HTMLElement>;

/* Add .active class to image with a click event. */
images.forEach((image: HTMLElement): void => {
  image.addEventListener("click", (): void => {
    removeActiveClasses();
    image.classList.add("active");
  });
});

const removeActiveClasses = (): void => {
  images.forEach((image: HTMLElement): void => {
    image.classList.remove("active");
  });
};

/* Remove .active class to image with a dobleclick event. */
images.forEach((image: HTMLElement): void => {
  image.addEventListener("dblclick", (): void => {
    image.classList.remove("active");
  });
});
