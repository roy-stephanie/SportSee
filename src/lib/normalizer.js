/**
 * Normalizing function for user performance
 *
 * @param data - array with user performance data to normalize
 * @returns normalized data
 */
export function normalizeUserPerformance(data) {
  return data.data.map((performance, index) => {
    return {
      kind: nameFrench[performance.kind],
      value: performance.value,
    }
  })
}

/**
 * Normalizing function for user data
 *
 * @param user - array with user data to normalize
 * @returns normalized data
 */
export function normalizeUserData(user) {
  let newUser = { ...user }

  // Normalize score
  if (user.todayScore !== undefined) {
    newUser.score = user.todayScore
    delete newUser.todayScore
  }

  return newUser
}

/**
 * Normalizes the {sessions} data.
 *
 * @param {Object} sessions - An object containing the sessions data to be normalized.
 * @return {Object} An object with the normalized {sessions} data.
 */
export function normalizerSessions(sessions) {
  return sessions.sessions.map((session, index) => {
    return {
      day: dayFrench[session.day],
      sessionLength: session.sessionLength,
    }
  })
}

const nameFrench = {
  1: 'Cardio',
  2: 'Énergie',
  3: 'Endurance',
  4: 'Force',
  5: 'Vitesse',
  6: 'Intensité',
}

const dayFrench = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D',
}
