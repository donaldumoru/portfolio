import { createParagraphs } from '../utils.mjs';

export default async function (fn, path) {
  const data = await fn(path);

  const bioText = data.bio;
  const CHARACTER_LIMIT = 150;

  const stringArray = createParagraphs({
    text: bioText,
    charLimit: CHARACTER_LIMIT,
  });

  return ('main'.jsl.eof = SECTION(
    { class: 'about', id: 'about' },

    DIV(
      { class: 'section-wrapper' },

      H2({ 'data-blur-on-scroll': true }, data.title),

      DIV(
        { class: 'about-text-wrapper' },
        stringArray.map(str =>
          P({ class: 'about-text', 'data-blur-on-scroll': true }, str),
        ),
      ),
      DIV(
        { class: 'about-img-wrapper blur' },
        IMG({
          src: data.image.loadimg.src,
          alt: data.image.alt,
          loading: 'lazy',
          // 'data-blur-on-scroll': true,
        }),
      ),
    ),
  ));
}
