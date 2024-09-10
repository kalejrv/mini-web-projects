export interface ProjectData {
  title: string;
  image: string;
  view: string;
  code: string;
};

const buildProjectData = (projectName: string): ProjectData => {
  const imagePath: string = "assets/images";
  const viewUrl: string = "projects";
  const codeUrl: string = "https://github.com/kalejrv/mini-web-projects/tree/main/projects";

  return {
    title: buildProjectTitle(projectName),
    image: `${imagePath}/${projectName}.png`,
    view: `${viewUrl}/${projectName}/`,
    code: `${codeUrl}/${projectName}`,
  };
};

const buildProjectTitle = (str: string): string => {
  const strSplitted: Array<string> = str.split("-");
  const strFirstWordCapitalized: string = strSplitted[0][0].toUpperCase() + strSplitted[0].slice(1);
  const strJoined: string = `${strFirstWordCapitalized} ${strSplitted.slice(1).join(" ")}`;

  return strJoined;
};

export const projects: Array<ProjectData> = [
  buildProjectData("expanding-cards"),
  buildProjectData("progress-steps"),
];
