import PropTypes from 'prop-types'
import './NutritionCard.css'

NutritionCard.propTypes = {
  data: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

function NutritionCard({ data, unit, name, icon }) {
  return (
    <div className="NutritionCard">
      <div className="NutritionCard_Content">
        <div className="NutritionCard_Content_IMG">
          <img src={`${icon}`} alt="" />
        </div>
        <div>
          <div className="NutritionCard_Data"><p>{data.toLocaleString('en-US')}{unit}</p></div>
          <div className="NutritionCard_Name"><p>{name}</p></div>
        </div>
      </div>
    </div>
  )
}

export default NutritionCard
