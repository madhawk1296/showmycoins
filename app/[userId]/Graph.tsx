'use client'

import formatDollar from '@/lib/formatDollar';
import getDollarValues from '@/lib/getDollarValues';
import getLabels from '@/lib/getLabels';
import { ArcElement, Chart, Colors, Legend, plugins, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
import plugin from 'tailwindcss';

Chart.register(ArcElement, Tooltip, Legend, Colors)

export default function Graph({total, coins}: {total: number, coins: any}){
    const labels = getLabels(coins)
    const dollarValues = getDollarValues(coins)
    
    const data = {
        labels,
        datasets: [{
            label: " Value",
            data: dollarValues,
            hoverOffset: 4
        }],
        
        
    };

    const options = {
        cutout: '75%',
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              boxWidth: 20, // Adjust the box width according to your needs
            },
          },
        },
      };

    return(
        <div className="relative w-[900px] h-[450px] flex justify-center items-center mb-[25px]">
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 justify-center'>
                <h1 className="text-center text-lg font-semibold text-gray-500">Portfolio Value</h1>
                <h1 className="text-center text-3xl font-bold">{formatDollar(total)}</h1>
            </div>
            <Doughnut data={data} options={options} />
        </div>
    )
}