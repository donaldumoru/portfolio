import { fetchData } from '/src/js/fetch.mjs';
import paths from '/src/js/paths.mjs';
import { fadeIn } from '/src/js/utils.mjs';
import MAKE_ABOUT_SECTION from '/src/js/ui/aboutPage.mjs';
import { MAKE_NAV_AND_FOOTER } from '/src/js/ui/landingPage.mjs';
import { INIT_INTERACTIONS } from '/src/js/script.mjs';

await MAKE_ABOUT_SECTION(fetchData, paths.general.about);
await MAKE_NAV_AND_FOOTER(fetchData, paths.general.home);

const aboutSection = document.querySelector('.about');
fadeIn(aboutSection);
INIT_INTERACTIONS();

document.querySelector('.about-link-img').classList.add('animate-icon');
const aboutMeWrapper = document.querySelector('.about-img-wrapper');
const aboutMeImg = aboutMeWrapper.querySelector('img');

!aboutMeImg.complete
  ? aboutMeImg.addEventListener('load', function () {
      aboutMeWrapper.classList.remove('blur');
    })
  : aboutMeWrapper.classList.remove('blur');
