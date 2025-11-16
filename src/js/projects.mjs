import { fetchData } from '/src/js/fetch.mjs';
import paths from '/src/js/paths.mjs';
import { fadeIn, INIT_DISPLAY_PROJECT_IMAGE } from '/src/js/utils.mjs';
import MAKE_PROJECTS_SECTION from '/src/js/ui/projectsPage.mjs';
import { MAKE_NAV_AND_FOOTER } from '/src/js//ui/landingPage.mjs';
import { INIT_INTERACTIONS } from '/src/js/script.mjs';

await MAKE_PROJECTS_SECTION(fetchData, paths.general.projects);
await MAKE_NAV_AND_FOOTER(fetchData, paths.general.home);

const projectSection = document.querySelector('.projects');

fadeIn(projectSection);

INIT_INTERACTIONS();
INIT_DISPLAY_PROJECT_IMAGE(fetchData(paths.general.projects));

const projectImg = document.querySelector('.projects-link-img');

projectImg.classList.add('animate-icon');
