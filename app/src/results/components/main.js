import React, { Component } from 'react'
import Tabs from './tabs'
import ResultChart from './result-chart'
import { mostlyYes } from '../../methods/helper-methods'
import { content, font } from '../../styles/styles'

const styles = {
  text: {
    textAlign: 'center',
    fontSize: font.size.huge
  }
}

export default class Results extends Component {
  render() {
    const { selectedTab, selectTab, results } = this.props
    const resultHeading = (mostlyYes(results)) ? "Kalle mår skit" : "Killen mår bra"
    let component
    switch(selectedTab) {
      case 'chart':
        component = <ResultChart results={results} />
        break
      case 'comments':
        component = <h1>Messages</h1>
        break
      case 'media':
        component = <h1>Media</h1>
        break
      default:
        component = <ResultChart results={results} />
    }
    return (
      <div style={{...content()}}>
        <h1 style={styles.text}>Folkets röst: {resultHeading}!</h1>
        <Tabs selectTab={selectTab} selectedTab={selectedTab} />
        {component}
      </div>
    )
  }
}
