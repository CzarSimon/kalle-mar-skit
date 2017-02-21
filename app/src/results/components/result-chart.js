import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { createChartData } from '../../methods/helper-methods'

export default class ResultChart extends Component {
  render() {
    const { results } = this.props
    const chartOptions = {
      legend: {
        position: 'left',
        labels: {
          fontSize: 20,
          fontFamily: 'Lato',
          padding: 40
        }
      }
    }
    return (
      <div style={{marginTop: '5vh'}}>
        <Doughnut
          data={createChartData(results)}
          options={chartOptions}
          width={100}
          height={80}
        />
      </div>
    )
  }
}
