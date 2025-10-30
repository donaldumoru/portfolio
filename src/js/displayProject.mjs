const displayProject = function () {
  let url = new URL(window.location);
  let params = new URLSearchParams(url.search).get('name');

  ////// need to remember that i have to update the title of the page on every different project
  document.title = 'How cool that this works';

  console.log('url: ', url);
  console.log('params: ', params);

  return url.href;
};

export { displayProject };
