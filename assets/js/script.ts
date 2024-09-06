import { ProjectData, projects } from "./projects.js";

document.addEventListener("DOMContentLoaded", (): void => {
  addProjectCards();
});

const addProjectCards = (): void => {
  const projectCardsWrapper = document.querySelector(".project-cards-wrapper") as HTMLElement;

  projects.map(project => {
    const projectCard = createProjectCard(project) as HTMLElement;
    
    projectCardsWrapper.appendChild(projectCard);
  });
};

const createProjectCard = (project: ProjectData): HTMLElement => {
  const { image, title, view, code } = project;

  const projectCard = document.createElement("div") as HTMLElement;
  projectCard.classList.add("project-card");
  projectCard.innerHTML = `
    <img src="${image}" loading="lazy" class="project-image" alt="${title} image.">
  
    <div class="project-content">
      <h2 class="project-title">${title}.</h2>
      
      <div class="project-links-wrapper">  
        <a href="${view}" target="_blank">
          View
          <img src="assets/icons/view.svg">
        </a>
          
        <a href="${code}" target="_blank">
          Code
          <img src="assets/icons/code.svg">
        </a>  
      </div>
    </div>
  `;

  return projectCard;
};
