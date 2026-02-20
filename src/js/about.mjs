import { fetchData } from '/src/js/fetch.mjs';
import paths from '/src/js/paths.mjs';
import { fadeIn } from '/src/js/utils.mjs';
import MAKE_ABOUT_SECTION from '/src/js/ui/aboutPage.mjs';
import { MAKE_NAV_AND_FOOTER } from '/src/js/ui/landingPage.mjs';
import { INIT_INTERACTIONS } from '/src/js/script.mjs';

await MAKE_ABOUT_SECTION(fetchData, paths.general.about);
await MAKE_NAV_AND_FOOTER(fetchData, paths.general.home);

const aboutSection = document.querySelector('.about');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');

//   fadeIn([aboutSection, nav, footer]);
fadeIn(aboutSection);

INIT_INTERACTIONS();

const aboutImg = document
  .querySelector('.about-link-img')
  .classList.add('animate-icon');

const aboutMeWrapper = document.querySelector('.about-img-wrapper');
const aboutMeImg = aboutMeWrapper.querySelector('img');

aboutMeImg.addEventListener('load', function () {
  aboutMeWrapper.classList.remove('blur');
});
