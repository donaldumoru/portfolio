import { fetchData } from '/src/js/fetch.mjs';
import paths from '/src/js/paths.mjs';
import {
  MAKE_NAV_AND_FOOTER,
  MAKE_WELCOME_TEXT,
} from '/src/js/ui/makeLandingPage.mjs';

import display from '/src/js/displayProject.mjs';

display();

await MAKE_NAV_AND_FOOTER(fetchData, paths.homeJSONFile);
