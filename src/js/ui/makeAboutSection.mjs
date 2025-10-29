import { createParagraphs } from '../utils.mjs';

export default async function (fn, path) {
  const data = await fn(path);

  const bioText = data.bio;
  let sliceStart = 0;
  const CHARACTER_LIMIT = 100;

  const stringArray = createParagraphs({
    text: bioText,
    charLimit: CHARACTER_LIMIT,
  });

  return ('main'.jsl.eof = SECTION(
    { class: 'about', id: 'about' },

    DIV(
      { class: 'section-wrapper' },

      H2(data.title),
      DIV(
        { class: 'about-text' },
        stringArray.map(str => P(str))
      ),
      DIV(
        { class: 'about-img-wrapper' },
        IMG({ src: data.image.src, alt: data.image.alt })
      )
    )
  ));
}
