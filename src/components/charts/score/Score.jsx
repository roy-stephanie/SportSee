import PropTypes from 'prop-types'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import './Score.css'

Score.propTypes = {
  score: PropTypes.number.isRequired,
}

function Score({ score }) {
  const scoreData = [
    { name: 'completed', value: score, fillColor: `red` },
    { name: 'not-completed', value: 1 - score, fillColor: 'transparent' },
  ]

  return (
    <div className="Score">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={[{ name: 'bg', value: 1 }]}
            dataKey="value"
            innerRadius={0}
            outerRadius={70}
            fill="white"
          />
          <Pie
            data={scoreData}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
            cornerRadius={50}
          >
            {scoreData.map((p, index) => {
              return <Cell key={`cell-${index}`} fill={p.fillColor} />
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="Score_Title"><p>Score</p></div>
      <div className="Score_Content">
        <div>
          <h2>{`${100 * score}%`}</h2>
          <p>de votre</p>
          <p>objectif</p>
        </div>
      </div>
    </div>
  )
}

export default Score
