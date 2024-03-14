import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import './GreetingUser.css'

const UserPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  keyData: PropTypes.shape({
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
  }).isRequired,
  todayScore: PropTypes.number.isRequired,
  userInfos: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
})

GreetingUser.propTypes = {
  userData: UserPropTypes,
}

function GreetingUser(userData) {
  const [user, setUser] = useState()

  useEffect(() => {
    if (userData.user) {
      setUser(userData.user)
    }
  }, [userData.user, user])

  if (!userData || !user) return <div>...</div>

  return (
    <div className="GreetingUser">
      <h1><p>Bonjour <span>{user.userInfos.firstName}</span></p></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default GreetingUser
