import paths from '/src/js/paths.mjs';

const getProjectIdAndUrl = function () {
  let url = new URL(window.location);
  let params = new URLSearchParams(url.search).get('name');

  return params;
};

const projectId = getProjectIdAndUrl();
const projectPath = paths.projects[projectId];

export { projectPath };
