const renderOverview = function (data) {
  const overviewData = data.overview;
  return ARTICLE(
    { class: 'project-card' },
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

          IMG({ loading: 'lazy', src: 'assets/icons/external.svg' }),
          'Demo'
        ),

        overviewData.link.github
          ? A(
              {
                href: overviewData.link.github,
                target: '_blank',
                rel: 'noopener',
              },
              IMG({ loading: 'lazy', src: 'assets/icons/external.svg' }),
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
  const implementationData = data?.in_depth_details?.implementation;

  const renderResearchSection = data =>
    SECTION(
      { class: 'section-project-details' },

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
              ? (DIV({ class: '' }),
                DIV({ class: 'circular-bar' }, DIV({ class: 'score' }, 0)))
              : ''
          )
        : ''
    );

  const renderImplementationSection = data =>
    SECTION(
      { class: 'section-project-details' },
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
      })
    );

  return [
    renderResearchSection(researchData),
    renderImplementationSection(implementationData),
  ];
};

const MAKE_RELEVANT_PROJECT_PAGE = async function (fn, path) {
  const projectData = await fn(path);
  document.title = projectData.title;

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
