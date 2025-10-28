/**
 * Splits a long text string into multiple paragraphs based on character length
 * and fullStops or (periods) if you may!.
 *
 * The function iteratively goes through the input text and slices it into paragraphs whenever
 * it reaches a threshold length and encounters a period (`.`). Ensures paragraphs
 * break at sentence ends. It continues the process
 * until the specified number of paragraphs is created or the text ends.
 *
 * @function createParagraphs
 * @param {Object} params - the configuration object
 * @param {string} params.text - the text to split into paragraphs
 * @param {number} params.charLimit - the number of characters per paragraph before checking for a boundary.
 * @returns {string[]} An array containing the generated paragraphs
 */
const createParagraphs = function ({ text, charLimit }) {
  const arr = [];

  let start = 0;
  let loopPoint = charLimit;
  let threshold = charLimit;
  let numParagraphs = Math.floor(text.length / charLimit);

  for (let n = 0; n < numParagraphs; n++) {
    if (loopPoint >= text.length) {
      break;
    }

    for (let i = loopPoint; i < text.length; i++) {
      if (i >= threshold && text[i] === '.') {
        const str = text.slice(start, i + 1);
        arr.push(str);
        start = i + 1;
        loopPoint = start;
        threshold = start + charLimit;
        break;
      }
    }
  }

  if (start < text.length) {
    arr.push(text.slice(start).trim());
  }

  return arr;
};

export { createParagraphs };
