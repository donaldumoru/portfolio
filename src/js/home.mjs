/**
 * Fetch data from a json file that contains all the data
 * for the index page
 *
 * @async
 * @function fetchHomeData
 * @param {string} - The path of the home JSON file.
 * @returns {Promise<Object>} A promise that resolves to the parsed JSON data.
 */
const fetchLandingPageData = async function (homeJSON) {
  try {
    const response = await fetch(homeJSON);

    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export { fetchLandingPageData };
