import { fetchData } from '/src/js/fetch.mjs';
import paths from '/src/js/paths.mjs';
import { MAKE_NAV_AND_FOOTER } from '/src/js/ui/makeLandingPage.mjs';

import { displayProject } from './displayProject.mjs';

displayProject();

await MAKE_NAV_AND_FOOTER(fetchData, paths.homeJSONFile);
