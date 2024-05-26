import React, {useState} from "react";
import Chart from 'react-apexcharts';

function JPYCharts() {
    const [data, setData] = useState( {
        series: [
            {
                name: 'USD',
                data: [31, 40, 28, 51],
            },
            {
                name: 'JPY',
                data: [11, 32, 45, 32],
            },
            {
                name: 'EUR',
                data: [34, 52, 41, 82],
            },
            {
                name: 'CNY',
                data: [15, 11, 32, 18],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                },
            },
        },
        markers: {
            size: 4,
        },
        colors: ['#4154f1','#2eca6a', '#ff771d', '#000'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.4,
                stops: [0, 90, 100],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        xaxis: {
            type: 'determine',
            categories: [
                '2023-12-01T00:00:00.00Z',
                '2024-01-01T00:00:00.00Z',
                '2024-02-01T00:00:00.00Z',
                '2024-03-01T00:00:00.00Z',
            ],
        },
        tooltip: {
            x: {
                format: 'yy/MM/dd HH:mm',
            },
        },
    });
    return (
        <Chart
            options={data.options}
            series={data.series}
            type={data.options.chart.type}
            height={data.options.chart.height}
        />
    );
}

export default JPYCharts;