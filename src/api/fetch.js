import { user } from '../mock/user.js'
import { activity } from '../mock/activity.js'
import { sessions } from '../mock/sessions.js'
import { performance } from '../mock/performance.js'

const apiHost = process.env.REACT_APP_API
const mock = process.env.REACT_APP_MOCK_DATA === "true"

/**
 * Perform a fetch GET request and handle errors.
 *
 * @param {string} url - The URL for the GET request.
 * @returns {Promise<Response> |  { userError: boolean }} - A promise object representing the response data.
 */
async function fetchGet(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      return { userError : true }
    }
    return response.json()
  } catch (error) {
    return handleFetchError(error)
  }
}

/**
 * Handle fetch errors.
 *
 * @param {Error} error - The fetch error object.
 * @returns {Promise<Response> |  { apiError: boolean }}
 */
function handleFetchError(error) {
  return { apiError: true }
}

/**
 * Retrieves information about a user.
 *
 * @param {number} userId - The ID of the user.
 * @returns {Promise<any>} - A promise object represents the user data.
 */
export async function getUserData(userId) {
  if (mock) {
    return user
  }
  return fetchGet(`${apiHost}/user/${userId}`)
}

/**
 * Retrieves a user's activity data.
 *
 * @param {number} userId - The ID of the user.
 * @returns {Promise<any>} - A promise object represents the user's activity data.
 */
export async function getUserActivity(userId) {
  if (mock) {
    return activity
  }
  return fetchGet(`${apiHost}/user/${userId}/activity`)
}

/**
 * Retrieves the average sessions of a user per day.
 *
 * @param {number} userId - The ID of the user.
 * @returns {Promise<any>} - A promise object represents the user's average sessions data.
 */
export async function getUserAverageSessions(userId) {
  if (mock) {
    return sessions
  }
  return fetchGet(`${apiHost}/user/${userId}/average-sessions`)
}

/**
 * Retrieves a user's performance data.
 *
 * @param {number} userId - The ID of the user.
 * @returns {Promise<any>} - A promise object represents the user's performance data.
 */
export async function getUserPerformance(userId) {
  if (mock) {
    return performance
  }
  return fetchGet(`${apiHost}/user/${userId}/performance`)
}
