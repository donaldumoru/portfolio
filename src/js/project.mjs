import paths from '/src/js/paths.mjs';

const getProjectPath = function () {
  let url = new URL(window.location);
  let params = new URLSearchParams(url.search).get('name');

  const projectId = params;
  const projectPath = paths.projects[projectId];

  return projectPath;
};

export default getProjectPath();
