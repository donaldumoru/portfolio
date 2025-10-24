// import projectLink from '../displayProject.mjs';

const url = new URL(`${window.location}project.html?name=${'runet'}`);

let params = new URLSearchParams(url.search).get('name');

const projectLink = url.href;
console.log(params);

export default async function (fn, path) {
  const data = await fn(path);

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
          A({ href: project.link.demo, target: '_blank' }, 'Demo'),

          project.link.read_more ? A({ href: projectLink }, 'Read more') : ''
        )
      )
    )
  ));
}
