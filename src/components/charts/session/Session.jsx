import PropTypes from 'prop-types'
import {
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line,
  LineChart,
  Legend,
  Rectangle,
} from 'recharts'
import './Session.css'

function SessionTooltip({ active, payload }) {
  return (
    <div className="Session_Tooltip">
      {active &&
        payload.map((entry, index) => <div className="" key={`item-${index}`}>
          <span>{entry.value} min</span>
        </div>)
      }
    </div>
  )
}

function SessionTooltipCursor(props) {
  const { points, width, height } = props
  const { x } = points[0]

  return (
    <Rectangle
      className="CustomCursorOpacity"
      fill="#000"
      stroke="#000"
      x={x}
      y={0}
      width={width}
      height={height * 300}
    />
  )
}

function SessionLegend(props) {
  return (
    <div className="SessionLegend">Durée moyenne des sessions</div>
  )
}

SessionTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}

SessionTooltipCursor.propTypes = {
  pros: PropTypes.object,
}

const SessionPropTypes = PropTypes.shape({
  day: PropTypes.string.isRequired,
  sessionLength: PropTypes.number.isRequired,
})

const SessionsPropTypes = PropTypes.arrayOf(SessionPropTypes.isRequired)


Session.propTypes = {
  sessions: SessionsPropTypes,
}

function Session({ sessions }) {
  return (
    <ResponsiveContainer width="100%" height="100%" className="Session">
      <LineChart
        data={sessions}
        outerRadius="75%"
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
      >
        <XAxis
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.6)"
          dy={10}
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
          padding={{ left: 4, right: 4 }}
        />
        <Legend verticalAlign="top" align="left" height={0} iconSize={0} content={<SessionLegend />} />
        <YAxis
          dataKey="sessionLength"
          domain={[0, 'dataMax + 60']}
          hide={true}
        />
        <Line
          dataKey="sessionLength"
          name="Durée moyenne des sessions"
          type={`monotone`}
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: 'rgba(255,255,255, 0.6)',
          }}
        />
        <Tooltip
          content={<SessionTooltip />}
          cursor={<SessionTooltipCursor />}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Session
