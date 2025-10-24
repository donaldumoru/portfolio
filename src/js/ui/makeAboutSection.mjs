export default async function (fn, path) {
  const data = await fn(path);

  return ('main'.jsl.eof = SECTION(
    { class: 'about', id: 'about' },

    DIV(
      { class: 'about-wrapper' },

      H2(data.title),
      DIV({ class: 'about-text' }, P(data.bio)),
      DIV(
        { class: 'about-img-wrapper' },
        IMG({ src: data.image.src, alt: data.image.alt })
      )
    )
  ));
}
