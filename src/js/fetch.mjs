/**
 * Fetch data from a json file that contains all the data
 * for the index page
 *
 * @async
 * @param {string} - The path of the JSON file.
 * @returns {Promise<Object>} A promise that resolves to the parsed JSON data.
 */
const fetchData = async function (json) {
  try {
    const response = await fetch(json);

    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export { fetchData };
