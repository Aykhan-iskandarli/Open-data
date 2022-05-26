import React from 'react'
import Chart from './Chart'
import CurrentData from './CurrentData'
import './Statistics.Component.scss'

const StatisticsComponent = () => {
    return (
        <section className="statistics">
            <div className="container">
                <div className="row">
                    <div className="col-6"><Chart /></div>
                    <div className="col-6"><CurrentData /></div>
                </div>
            </div>
        </section>
    )
}

export default StatisticsComponent