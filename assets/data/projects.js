const buildProjectData = projectName => {
  const imagePath = "assets/images";
  const viewUrl = "projects";
  const codeUrl = "https://github.com/kalejrv/mini-web-projects/tree/main/projects";

  return {
    title: buildProjectTitle(projectName),
    image: `${imagePath}/${projectName}.png`,
    view: `${viewUrl}/${projectName}/`,
    code: `${codeUrl}/${projectName}`,
  };
};

const buildProjectTitle = str => {
  const strSplitted = str.split("-");
  const strFirstWordCapitalized = strSplitted[0][0].toUpperCase() + strSplitted[0].slice(1);
  const strJoined = `${strFirstWordCapitalized} ${strSplitted.slice(1).join(" ")}`;

  return strJoined;
};

const projects = [
  buildProjectData("expanding-cards"),
];

export default projects;
