import { fetchData } from './fetch.mjs';
import paths from './paths.mjs';
import { fadeIn } from './utils.mjs';
import { MAKE_NAV_AND_FOOTER, MAKE_WELCOME_TEXT } from './ui/landingPage.mjs';
import MAKE_VARA from './ui/vara.mjs';
import MAKE_PROJECTS_SECTION from './ui/projectsPage.mjs';
import MAKE_ABOUT_SECTION from './ui/aboutPage.mjs';
import { INIT_INTERACTIONS } from '/src/js/script.mjs';

await MAKE_NAV_AND_FOOTER(fetchData, paths.general.home);

MAKE_WELCOME_TEXT();

await MAKE_VARA(fetchData, paths.general.home);

// await MAKE_ABOUT_SECTION(fetchData, paths.aboutJSONFile);
INIT_INTERACTIONS();
