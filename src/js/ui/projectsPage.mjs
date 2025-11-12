export default async function (fn, path) {
  const data = await fn(path);

  const url = '/project?name=';

  return ('main'.jsl.eof = SECTION(
    { class: 'projects', id: 'projects' },

    DIV(
      { class: 'project-img-wrapper' },
      IMG({ src: 'assets/images/about.jpg' })
    ),

    DIV(
      { class: 'section-wrapper' },

      H2({ 'data-blur-on-scroll': true }, data.title),

      data.projects.map(project =>
        ARTICLE(
          { class: 'project-card' },

          H4({ 'data-blur-on-scroll': true }, project.name),

          P({ 'data-blur-on-scroll': true }, project.short_description),

          // DIV(
          //   { class: 'tools-used', 'data-blur-on-scroll': true },
          //   project?.tools_used.map((tool, i) =>
          //     i === project.tools_used.length - 1
          //       ? SPAN(`#${tool.name}`)
          //       : SPAN(`#${tool.name} • `)
          //   )
          // ),

          DIV(
            { class: 'project-btns', 'data-blur-on-scroll': true },

            DIV(
              { class: 'external-links' },

              A(
                { href: project.link.demo, target: '_blank', rel: 'noopener' },
                IMG({ src: 'assets/icons/external.svg' }),
                'Demo'
              ),

              project.link.github
                ? A(
                    {
                      href: project.link.github,
                      target: '_blank',
                      rel: 'noopener',
                    },
                    IMG({ src: 'assets/icons/external.svg' }),
                    'Repo'
                  )
                : ''
            ),

            project.link.read_more
              ? A(
                  {
                    href: `${url}${project.id}`,
                    class: 'read-more-btn',
                    'data-blur-on-scroll': true,
                  },
                  project.link.read_more_btn
                )
              : ''
          )
        )
      )
    )
  ));
}
