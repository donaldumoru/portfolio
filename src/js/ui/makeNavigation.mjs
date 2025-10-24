import { fetchNavigationData } from '../home.mjs';
import paths from '../paths.mjs';

const renderNavigation = async function (fn, path) {
  const data = await fn(path);
  const nav = document.querySelector('nav');

  const navData = data?.nav_bar;

  console.log(navData);

  const logoLink = document.createElement('a');
  logoLink.href = navData.logo.link;
  const logoDiv = document.createElement('div');
  const logoSpan = document.createElement('span');

  console.log(logoLink);

  const navFrag = new DocumentFragment();

  const footer = document.querySelector('footer');

  return data;
};

await renderNavigation(fetchNavigationData, paths.homeJSONFile);

// console.log('donaldumoru'.indexOf('umoru'));

const str = 'donaldumoru';

const firstName = str.split('umoru')[0];
const lastName = str.slice(str.indexOf('umoru'));
