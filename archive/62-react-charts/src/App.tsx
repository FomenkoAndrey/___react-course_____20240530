import LineChart from './components/LineChart.tsx'
import BarChart from './components/BarChart.tsx'
import AreaChart from './components/AriaChart.tsx'

const App = () => {
  return (
    <div>
      <AreaChart />
      <BarChart />
      <LineChart />
    </div>
  )
}

export default App
