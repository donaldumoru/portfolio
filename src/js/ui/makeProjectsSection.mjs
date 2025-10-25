export default async function (fn, path) {
  const data = await fn(path);

  const url = '/project.html?id=';

  console.log(new URL(import.meta.url));

  return ('main'.jsl.eof = SECTION(
    { class: 'projects', id: 'projects' },

    H2(data.title),

    data.projects.map(project =>
      ARTICLE(
        { class: 'project-card' },

        H4(project.name),

        P(project.short_description),

        DIV(
          { class: 'tools-used' },
          project?.tools_used.map((tool, i) =>
            i === project.tools_used.length - 1
              ? SPAN(`#${tool.name}`)
              : SPAN(`#${tool.name} • `)
          )
        ),

        DIV(
          { class: 'project-btns' },

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
                'Github'
              )
            : ''
        ),

        project.link.read_more
          ? A({ href: `${url}${project.id}` }, 'Read more')
          : ''
      )
    )
  ));
}
