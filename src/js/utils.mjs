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
  //initialize empty array that will be the result of this function at the end of the whole thing!
  const arr = [];

  // start position
  let start = 0;

  //loopPoint set to start at charLimit. this will be used to determine the position to loop from
  let loopPoint = charLimit;
  // threshold set to start at charLimit. this will be used to make sure we only create new paragraphs after hitting the character limit
  let threshold = charLimit;
  // numParagraphs - the number of paragraphs that can possibly be generated from this array based on the charLimit received
  let numParagraphs = Math.floor(text.length / charLimit);

  // outer loop to loop numOfParagraph times
  for (let n = 0; n < numParagraphs; n++) {
    //check if the loopPoint has exceeded the length of given text and exit the forloop
    if (loopPoint >= text.length) {
      break;
    }

    //inner loop setting (i) to loopPoint to prevent looping from 0 every time
    for (let i = loopPoint; i < text.length; i++) {
      // if we have crossed or at the threshold, we start checking to find a fullStop (period, .,  if you may)
      if (i >= threshold && text[i] === '.') {
        // if we do, we create a string by slicing the text at the start position up until the current index + 1 (slice excludes the last char)
        const str = text.slice(start, i + 1);
        //push the above string to the array
        arr.push(str);
        // update start to go from the last known value to a new value of the last end position of slice. this way we dont keep slicing from the same place every time
        start = i + 1;
        //update loopPoint to the current start position---> basically walking through the text until we get to the end
        loopPoint = start;
        // update the threshold so, the IF condition moves forward before the next check is done
        threshold = start + charLimit;
        break;
      }
    }
  }

  // here we check if theres anything left after all the above stuff and if yes, we push it to the array
  if (start < text.length) {
    arr.push(text.slice(start).trim());
  }

  // self explanantory i guess.. "RETURN the array of generated paragraphs" if it isnt as self explanatory as i think!
  return arr;
};

const fadeInPage = function (el) {
  el.classList.remove('is-visible');
  //force reflow so browser paints opacity:0 first
  void el.offsetWidth;

  requestAnimationFrame(() => {
    el.classList.add('is-visible');
  });
};

export { createParagraphs, fadeInPage };
