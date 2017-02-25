import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { createChartData, mostlyYes } from '../../methods/helper-methods'
import { font } from '../../styles/styles'

const styles = {
  text: {
    textAlign: 'center',
    fontSize: font.size.huge
  }
}

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
        <h1 style={styles.text}>{mostlyYes(results) ? "Kalle mår skit" : "Killen mår bra"}!</h1>
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
