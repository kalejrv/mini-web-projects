"use strict";
const images = document.querySelectorAll('.image');
/* Add .active class to image with a click event. */
images.forEach((image) => {
    image.addEventListener("click", () => {
        removeActiveClasses();
        image.classList.add("active");
    });
});
const removeActiveClasses = () => {
    images.forEach((image) => {
        image.classList.remove("active");
    });
};
/* Remove .active class to image with a dobleclick event. */
images.forEach((image) => {
    image.addEventListener("dblclick", () => {
        image.classList.remove("active");
    });
});
