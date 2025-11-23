import { getImageCaption } from '../utils.mjs';

const renderOverview = function (data) {
  const overviewData = data.project_details.overview;
  return ARTICLE(
    { class: 'project-card project-section', id: 'overview' },
    H4(overviewData.title),

    P({ 'data-blur-on-scroll': true }, overviewData.description),

    DIV({ class: 'role-container' }),

    DIV(
      { class: 'tools-used' },
      overviewData.tools_used.map((tool, i) =>
        i === overviewData.tools_used.length - 1
          ? SPAN(`#${tool}`)
          : SPAN(`#${tool} • `)
      )
    ),

    DIV(
      { class: 'project-btns', 'data-blur-on-scroll': true },

      DIV(
        { class: 'external-links' },

        A(
          { href: overviewData.link.demo, target: '_blank', rel: 'noopener' },

          IMG({ loading: 'lazy', src: 'src/assets/icons/external.svg' }),
          'Demo'
        ),

        overviewData.link.github
          ? A(
              {
                href: overviewData.link.github,
                target: '_blank',
                rel: 'noopener',
              },
              IMG({ loading: 'lazy', src: 'src/assets/icons/external.svg' }),
              'Repo'
            )
          : ''
      )
    )
  );
};

const renderInDepthDetails = function (data) {
  const researchData = data?.project_details?.research;
  const resultsData = data?.project_details?.improvements;

  const renderResearchSection = data => {
    if (!Object.keys(researchData).length) {
      return;
    }

    return SECTION(
      { class: 'section-project-details project-section', id: 'research' },

      data?.methods.map(method => {
        return [
          ARTICLE(
            { class: 'project-card' },
            H4(method.name),
            P(method.purpose),

            UL(
              method?.findings.map(finding =>
                LI(
                  `${finding.title ? finding.title + ' ' : ''}${
                    finding.description
                  }`
                )
              )
            )
          ),
        ];
      }),

      data?.results
        ? ARTICLE(
            { class: 'result-article' },

            data?.results?.system_usability_scale
              ? // DIV({ class: '' }),
                [
                  DIV(
                    { class: 'sus-info' },
                    H5(data?.results?.system_usability_scale?.title),
                    P(data?.results?.system_usability_scale?.interpretation)
                  ),

                  DIV(
                    {
                      class: 'circular-bar',
                      'data-sus-score':
                        data?.results?.system_usability_scale
                          .system_usability_score,
                    },
                    DIV({ class: 'score' }, 0)
                  ),
                ]
              : ''
          )
        : ''
    );
  };

  const renderResultsSection = data => {
    if (!Object.keys(resultsData).length) {
      return;
    }

    return SECTION(
      { class: 'section-project-details project-section', id: 'improvements' },
      data?.results.map(result => {
        return [
          SECTION(
            { class: 'project-card result-card' },
            H4(result.name),
            P(result.description),

            UL(
              result?.findings.map((finding, index) =>
                LI(
                  SPAN(index + 1 < 10 ? `0${index + 1}` : index + 1),
                  P(
                    `${finding.title ? finding.title + ' ' : ''}${
                      finding.description
                    }`
                  ),

                  DIV(
                    { class: 'slider-container' },
                    DIV(
                      { class: 'image-container' },
                      finding?.pictures.map(picture =>
                        IMG({
                          loading: 'lazy',
                          src: picture?.image?.loadimg.src,
                          alt: picture?.image?.loadimg.alt,
                          // 'data-blur-on-scroll': true,
                        })
                      )
                    ),

                    finding?.pictures.length > 1
                      ? [
                          I({ class: 'fas fa-angle-double-left btn prev' }),
                          I({ class: 'fas fa-angle-double-right btn next' }),
                        ]
                      : ''
                  )
                )
              )
            )
          ),
        ];
      }),

      data?.system_usability_scale
        ? ARTICLE(
            { class: 'result-article' },

            data?.system_usability_scale
              ? [
                  DIV(
                    { class: 'sus-info' },
                    H5(data?.system_usability_scale?.title),
                    P(data?.system_usability_scale?.interpretation)
                  ),
                  DIV(
                    {
                      class: 'circular-bar',
                      'data-sus-score':
                        data?.system_usability_scale.system_usability_score,
                    },
                    DIV({ class: 'score' }, 0)
                  ),
                ]
              : ''
          )
        : ''
    );
  };

  return [
    renderResearchSection(researchData),
    renderResultsSection(resultsData),
  ];
};

const makeProjectGauge = function (data) {
  const projectHeadings = Object.keys(data);

  return DIV(
    { class: 'project-timeline-container' },

    UL(
      { class: 'project-timeline-wrapper' },

      projectHeadings.map((heading, index, arr) => {
        const result = [];

        if (index < arr.length - 1) {
          result.push([
            LI(
              { class: 'timeline-nav-link' },
              heading,
              SPAN({ class: 'timeline-bar' })
            ),
            LI(SPAN({ class: 'short-timeline-bar' })),
            LI(SPAN({ class: 'short-timeline-bar' })),
            LI(SPAN({ class: 'short-timeline-bar' })),
            LI(SPAN({ class: 'short-timeline-bar' })),
            LI(SPAN({ class: 'short-timeline-bar' })),
          ]);
        } else {
          result.push(
            { href: `#${heading}` },
            LI(
              { class: 'timeline-nav-link' },
              heading,
              SPAN({ class: 'timeline-bar' })
            )
          );
        }

        return result;
      })
    ),

    DIV({ class: 'project-timeline' })
  );
};

const MAKE_RELEVANT_PROJECT_PAGE = async function (fn, path) {
  const projectData = await fn(path);
  document.title = projectData.title;

  return ('main'.jsl.eof = [
    [
      SECTION(
        { class: 'project-container' },

        SECTION(
          { class: 'section-wrapper project-wrapper' },
          H2({ 'data-blur-on-scroll': true }, projectData.title),

          renderOverview(projectData),

          renderInDepthDetails(projectData)
        )
      ),
      makeProjectGauge(projectData.project_details),
    ],
  ]);
};

export { MAKE_RELEVANT_PROJECT_PAGE };
