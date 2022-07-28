import { Line } from 'react-chartjs-2'
import { useMemo } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const scores = [10, 5, 3, 7, 2, 8];
const scores2 = [2,1,4,2,5,7];
const labels = [100, 200, 300, 400, 500, 600, 700];

const options = {
    fill: true,
    Response: true,
    scales: {
        y: {
            min:0,
        },
    },

    Plugins: {
        Legend: {
            display: true,
        },
    },
}


const GraficaLineas = () => {

    const data = useMemo(() => {
        return {
          datasets: [
            {
              label: "Mis datos",
              data: scores,
              tension: 0.3,
              borderColor: "#61dafb",
              backgroundColor: "green",
              pointRadius: 10
            },

            {
              label: "Mis datos 2",
              data: scores2,
              tension: 0.3,
              borderColor: "#61dafb",
                backgroundColor: "#8a1a1a1",
              pointRadius: 6
            },
          ],

          labels,
        };
  }, []);

    return (
        <div className='bar'>
            <h3>Grafica de Lineas</h3>
      <Line data={data} options={ options } />
      </div>
  )
}

export default GraficaLineas