import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useCrypto } from './context/crypto-context';

ChartJS.register(ArcElement, Tooltip, Legend);



function PortfolioChart(){
const {assets} = useCrypto()

 const data = {


  labels: assets.map((a)=>a.name),
  datasets: [
    {
      label: '$ ',
      data: assets.map(a=> a.totalAmount),
      backgroundColor: [
        'rgba(255, 0, 55, 1)',
        'rgba(0, 133, 222, 1)',
        'rgba(255, 219, 128, 1)',
        'rgba(0, 174, 20, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 128, 0, 1)',
      ],
    },
  ],
};

    return(
        <div style={{display:'flex', marginBottom:'1rem', justifyContent:'center', height:'400px'}}>
            <Pie data={data} />
        </div>
    )
}

export default PortfolioChart;