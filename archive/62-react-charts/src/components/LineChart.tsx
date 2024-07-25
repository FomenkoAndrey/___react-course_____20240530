import { Line } from 'react-chartjs-2'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import { data, options } from '../configs/dataConfig.ts'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const LineChart = () => {
  return <Line options={options} data={data} />
}

export default LineChart
