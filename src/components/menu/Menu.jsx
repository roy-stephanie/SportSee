import ZenIcon from './img/zen-icon.svg'
import SwimmingIcon from './img/swimming.svg'
import BikeIcon from './img/bike.svg'
import BodybuildingIcon from './img/bodybuilding.svg'
import './Menu.css'

function Menu() {
  return (
    <div className="Menu">
      <div>
        <ul>
          <li><a href="/#"><img src={ZenIcon} alt="Rapport" /></a></li>
          <li><a href="/#"><img src={SwimmingIcon} alt="Natation" /></a></li>
          <li><a href="/#"><img src={BikeIcon} alt="Vélo" /></a></li>
          <li><a href="/#"><img src={BodybuildingIcon} alt="Musculation" /></a></li>
        </ul>
      </div>
      <div className="Menu_Copyright">
        <p>Copyright, SportSee 2020</p>
      </div>
    </div>
  )
}

export default Menu
