export default function () {
  let url = new URL(`http://127.0.0.1:8080/project.html?name=${'runet'}`);

  let params = new URLSearchParams(url.search).get('name');

  console.log('url', url);
  console.log('params', params);

  return url.href;
}
