/**
 * Perform a fetch GET request and handle errors.
 *
 * @param {string} url - The URL for the GET request.
 * @returns {Promise<Response>} - A promise object representing the response data.
 */
async function fetchGet(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
  } catch (error) {
    handleFetchError(error)
    return undefined
  }
}

/**
 * Handle fetch errors.
 *
 * @param {Error} error - The fetch error object.
 */
function handleFetchError(error) {
  console.error('API Error')
}

/**
 * Retrieves information about a user.
 *
 * @param {number} userId - The ID of the user.
 * @returns {Promise<any>} - A promise object represents the user data.
 */
export async function getUserData(userId) {
  return await fetchGet(`http://localhost:3000/user/${userId}`)
}

/**
 * Retrieves a user's activity data.
 *
 * @param {number} userId - The ID of the user.
 * @returns {Promise<any>} - A promise object represents the user's activity data.
 */
export async function getUserActivity(userId) {
  return await fetchGet(`http://localhost:3000/user/${userId}/activity`)
}

/**
 * Retrieves the average sessions of a user per day.
 *
 * @param {number} userId - The ID of the user.
 * @returns {Promise<any>} - A promise object represents the user's average sessions data.
 */
export async function getUserAverageSessions(userId) {
  return await fetchGet(`http://localhost:3000/user/${userId}/average-sessions`)
}

/**
 * Retrieves a user's performance data.
 *
 * @param {number} userId - The ID of the user.
 * @returns {Promise<any>} - A promise object represents the user's performance data.
 */
export async function getUserPerformance(userId) {
  return await fetchGet(`http://localhost:3000/user/${userId}/performance`)
}
