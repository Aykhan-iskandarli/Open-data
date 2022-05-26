import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const ChartComponent = () => {
    const [data, setData] = useState({
        series: [{
            name: "2021",
            data: [150, 100, 35, 51, 49, 62, 69, 91, 148]
        },
        {
            name: "2022",
            data: [5, 30, 60, 80, 20, 62, 80, 158, 200]
        }
        ],
        options: {

            dataLabels: {
                enabled: false,
                style: {
                    colors: ['#ccc', '#e2a03f']
                }
            },

            colors: ['#62e1bb', '#0f7ee3'],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
            fill: {
                colors: ['#ffffff', "#b2daff",]
            }
        },
    })

    return (
        <section className="chart">
            <p className="section-title">Son 2 il üzrə göstəricilər</p>
            <p className="section-subtitle">İstifadə edilən açıq məlumatlar</p>
            <ReactApexChart options={data.options} series={data.series}
                type="area" height={230}
            />
        </section>
    )
}

export default ChartComponent
