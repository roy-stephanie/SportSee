import Menu from '../menu/Menu'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getUserData, getUserActivity, getUserPerformance, getUserAverageSessions } from '../../api/fetch'
import { normalizerSessions, normalizeUserData, normalizeUserPerformance } from '../../lib/normalizer'
import CalorieICon from './img/calories-icon.svg'
import ProteinesIcon from './img/protein-icon.svg'
import GlucideIcon from './img/glucides-icon.svg'
import FatIcon from './img/fat-icon.svg'
import GreetingUser from '../greeting_user/GreetingUser'
import NutritionCard from '../nutrition_card/NutritionCard'
import Activity from '../charts/activity/Activity'
import Intensity from '../charts/intensity/Intensity'
import Session from '../charts/session/Session'
import Score from '../charts/score/Score'
import Loader from '../loader/Loader'
import './Profil.css'

function Profil() {
  const { id } = useParams()
  const [user, setUser] = useState(undefined)
  const [userError, setUserError] = useState(false)
  const [userActivity, setUserActivity] = useState(undefined)
  const [userPerformance, setUserPerformance] = useState(undefined);
  const [userSessions, setUserSessions] = useState(undefined);

  useEffect(() => {
    if (id) {
      const getData = async () => {
        const userData = await getUserData(parseInt(id))

        if (userData) {
          setUserError(false)
          const userDataActivity = await getUserActivity(parseInt(id))
          const userDataPerformance = await getUserPerformance(parseInt(id));
          const userDataSessions = await getUserAverageSessions(parseInt(id));

          const userDataPerformanceNormalize = normalizeUserPerformance(userDataPerformance.data)
          const userDataNormalize = normalizeUserData(userData.data)
          const userDataSessionsNormalize = normalizerSessions(userDataSessions.data)

          setUser(userDataNormalize)
          setUserActivity(userDataActivity.data)
          setUserPerformance(userDataPerformanceNormalize)
          setUserSessions(userDataSessionsNormalize)
        } else {
          setUserError(true)
        }
      }

      getData().then()
    }
  }, [id])

  if (!id || userError) return (<div className="Profil Error">Aucun profil à charger</div>)
  if (id && !user) return (<div className="Profil Error"><Loader /></div>)

  return (
    <>
      <Menu />
      <div className="Profil">
        <div className="Profil_Greeting">
          {user && <GreetingUser user={user} />}
          <div className="Profil_Content">
            <div className="Profil_Content_1">
              <div><Activity data={userActivity.sessions} /></div>
              <div className="Profil_Content_1_View">
                <div className="BGSessions"><Session id={id} sessions={userSessions}  /></div>
                <div className="BGIntensity"><Intensity intensity={userPerformance} /></div>
                <div className="BGContent"><Score score={user.score} /></div>
              </div>
            </div>
            <div className="Profil_Content_2">
              <div className="bg-content p-20">
                <NutritionCard data={user.keyData.calorieCount} unit="kCal" name="Calories" icon={CalorieICon} />
              </div>
              <div className="bg-content p-20">
                <NutritionCard data={user.keyData.proteinCount} unit="g" name="Proteines" icon={ProteinesIcon} />
              </div>
              <div className="bg-content p-20">
                <NutritionCard data={user.keyData.carbohydrateCount} unit="g" name="Glucides" icon={GlucideIcon} />
              </div>
              <div className="bg-content p-20">
                <NutritionCard data={user.keyData.lipidCount} unit="g" name="Lipides" icon={FatIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profil
