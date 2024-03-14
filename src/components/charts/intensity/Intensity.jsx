import PropTypes from 'prop-types'
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'
import './Intensity.css'

const IntensityPropTypes = PropTypes.shape({
  kind: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
})

const IntensitiesPropTypes = PropTypes.arrayOf(IntensityPropTypes.isRequired)

Intensity.propTypes = {
  intensity: IntensitiesPropTypes,
}

function Intensity({ intensity }) {
  return (
    <ResponsiveContainer width="100%" height="100%" className="Intensity">
      <RadarChart
        data={intensity}
        outerRadius={window.innerWidth >= 1024 ? '60%' : '40%'}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dy={4}
          dataKey="kind"
          stroke="#FFF"
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
        />
        <Radar
          dataKey="value"
          fill="#ff0000"
          fillOpacity={0.7}
          stroke="transparent"
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default Intensity
