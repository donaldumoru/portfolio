import { MAKE_NAV_AND_FOOTER } from '/src/js/ui/landingPage.mjs';
import paths from '../paths.mjs';
import { fetchData } from '../fetch.mjs';
import { projectPath } from '../project.mjs';

const renderOverview = function (data) {
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
    )
  );
};

const renderInDepthDetails = function (data) {
  if (!data?.in_depth_details.section_exists) {
    return;
  }

  const researchData = data?.in_depth_details?.research;

  const renderResearchSection = data =>
    SECTION(
      { class: 'section-project-details' },
      H4('Research'),

      ARTICLE(
        { class: 'project-card' },
        P({ class: 'research-question' }, data?.question?.question)
      ),

      researchData?.methods.map(method => {
        return [
          ARTICLE(
            { class: 'project-card' },
            H5(method.name),

            P(method.purpose),

            H6(method.methodology.title),

            P(method.methodology.description),

            UL(
              method?.findings.map(finding =>
                LI(`${finding.title} ${finding.description}`)
              )
            )
          ),
        ];
      })
    );

  const recurse = function (data) {
    // if(){}
  };

  recurse(researchData);

  return [renderResearchSection(researchData)];

  // console.log(inDepthDetailsData);
  // return inDepthDetailsData.map(section =>
  //   ARTICLE(
  //     { class: 'project-card' },

  //     H4(section[0].split('_').join(' '))
  //   )
  // );
};

const MAKE_RELEVANT_PROJECT_PAGE = async function (fn, path) {
  const projectData = await fn(path);
  document.title = projectData.title;

  // console.log(projectData);

  return ('main'.jsl.eof = SECTION(
    { class: 'project-container' },

    SECTION(
      { class: 'section-wrapper project-wrapper' },
      H2({ 'data-blur-on-scroll': true }, projectData.title),

      renderOverview(projectData),

      renderInDepthDetails(projectData)
    )
  ));
};

export { MAKE_RELEVANT_PROJECT_PAGE };
