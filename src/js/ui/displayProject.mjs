import { MAKE_NAV_AND_FOOTER } from '/src/js/ui/landingPage.mjs';
import paths from '../paths.mjs';
import { fetchData } from '../fetch.mjs';
import { projectPath } from '../project.mjs';

const makeOverview = function (data) {
  return ARTICLE(
    { class: 'project-card' },
    H4('Overview'),

    P({ 'data-blur-on-scroll': true }, data.overview),

    DIV({ class: 'role-container' }),

    DIV(
      { class: 'tools-used' },
      data?.tools_used.map((tool, i) =>
        i === data.tools_used.length - 1
          ? SPAN(`#${tool}`)
          : SPAN(`#${tool} • `)
      )
    ),

    DIV(
      { class: 'project-btns', 'data-blur-on-scroll': true },

      DIV(
        { class: 'external-links' },

        A(
          { href: data.link.demo, target: '_blank', rel: 'noopener' },
          IMG({ src: 'assets/icons/external.svg' }),
          'Demo'
        ),

        data.link.github
          ? A(
              {
                href: data.link.github,
                target: '_blank',
                rel: 'noopener',
              },
              IMG({ src: 'assets/icons/external.svg' }),
              'Repo'
            )
          : ''
      )
    ),

    DIV(
      { class: 'other' },

      IMG({ src: data.img }),
      IMG({ src: data.img }),
      IMG({ src: data.img }),
      IMG({ src: data.img }),
      IMG({ src: data.img }),
      P(data.overview),
      IMG({ src: data.img }),

      P(data.overview)
    )
  );
};

const makeProcess = function (data) {};

const MAKE_RELEVANT_PROJECT_PAGE = async function (fn, path) {
  const projectData = await fn(path);
  document.title = projectData.title;

  console.log(projectData);

  return ('main'.jsl.eof = SECTION(
    { class: 'project-container' },

    SECTION(
      { class: 'section-wrapper' },
      H2({ 'data-blur-on-scroll': true }, projectData.title),

      makeOverview(projectData)
    )
  ));
};

export { MAKE_RELEVANT_PROJECT_PAGE };
