export default function () {
  let url = new URL(window.location);
  let params = new URLSearchParams(url.search).get('name');

  console.log('url: ', url);
  console.log('params: ', params);

  return url.href;
}
