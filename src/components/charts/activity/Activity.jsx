import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import PropTypes from 'prop-types'
import './Activity.css'

function formatDay(dateString) {
  const date = new Date(dateString)
  return String(date.getDate())
}

function ActivityLegend({ payload }) {
  return (
    <div className="Activity_Legend">
      <div className="Activity_Legend_Title">Activité quotidienne</div>
      <div className="Activity_Legend_Data">
        {payload.map((entry, index) => <div className="Activity_Legend" key={`item-${index}`}>
          <span className={`Activity_Legend_Icon Icon_${index + 1}`}></span>
          <span>{entry.value}</span>
        </div>)}
      </div>
    </div>
  )
}

function ActivityTooltip({ active, payload }) {
  return (
    <div className="Activity_Tooltip">
      {active &&
        payload.map((entry, index) => <div className="" key={`item-${index}`}>
          <span className={``}></span>
          <span>{entry.value} {entry.unit}</span>
        </div>)
      }
    </div>
  )
}

const ActivityPropTypes = PropTypes.shape({
  day: PropTypes.string.isRequired,
  kilogram: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
})

const ActivitiesPropTypes = PropTypes.arrayOf(ActivityPropTypes.isRequired)

Activity.propTypes = {
  data: ActivitiesPropTypes,
}

function Activity({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 10, bottom: 15, right: 0, left: 0 }}
        barGap={1}
        barCategoryGap="32%"
      >
        <Legend verticalAlign="top" height={60}
                content={<ActivityLegend />} />

        <CartesianGrid strokeDasharray={`3 3`} vertical={false} />

        <XAxis dataKey="day" padding={{ left: -34, right: -34 }} tickLine={false} dy={10}
               tick={{ fontSize: 14, fontWeight: 500 }} stroke="#9B9EAC" tickFormatter={formatDay} />

        <YAxis yAxisId="kg" dataKey="kilogram" domain={['dataMin - 1', 'dataMax + 5']}
               allowDecimals={false} dx={30} orientation="right" axisLine={false} tickLine={false} />

        <YAxis yAxisId="cal" dataKey="calories" domain={[0, 'dataMax + 50']} allowDecimals={false} hide={true} />

        <Bar yAxisId="kg" dataKey="kilogram" fill="#282D30" radius={[50, 50, 0, 0]} maxBarSize={8}
             activeBar={<Rectangle />} name="Poids (kg)" unit="kg" />

        <Bar yAxisId="cal" dataKey="calories" fill="#E60000" radius={[50, 50, 0, 0]} maxBarSize={8}
             activeBar={<Rectangle />} name="Calories brûlées (kCal)" unit="kCal" />

        <Tooltip
          cursor={{
            fill: 'rgba(0, 0, 0, 0.1)',
          }}
          offset={50}
          position={{ y: 25 }}
          content={<ActivityTooltip />}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Activity
