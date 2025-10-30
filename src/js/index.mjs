import { fetchData } from './fetch.mjs';
import paths from './paths.mjs';
import { fadeInPage } from './utils.mjs';
import {
  MAKE_NAV_AND_FOOTER,
  MAKE_WELCOME_TEXT,
} from './ui/makeLandingPage.mjs';
import MAKE_VARA from './ui/vara.mjs';
import MAKE_PROJECTS_SECTION from './ui/makeProjectsSection.mjs';
import MAKE_ABOUT_SECTION from './ui/makeAboutSection.mjs';
import { INIT_INTERACTIONS } from '/script.mjs';

await MAKE_NAV_AND_FOOTER(fetchData, paths.homeJSONFile);

MAKE_WELCOME_TEXT();

await MAKE_VARA(fetchData, paths.homeJSONFile);

const nav = document.querySelector('nav');
const footer = document.querySelector('footer');

fadeInPage([nav, footer]);
// await MAKE_ABOUT_SECTION(fetchData, paths.aboutJSONFile);
INIT_INTERACTIONS();
