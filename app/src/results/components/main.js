import React, { Component } from 'react'
import Tabs from './tabs'
import ResultChart from './result-chart'
import MediaCoverage from './media-coverage'
import { content, font } from '../../styles/styles'

export default class Results extends Component {
  render() {
    const { selectedTab, selectTab, results } = this.props
    let component
    switch(selectedTab) {
      case 'chart':
        component = <ResultChart results={results} />
        break
      case 'comments':
        component = <h1>Messages</h1>
        break
      case 'media':
        component = <MediaCoverage />
        break
      default:
        component = <ResultChart results={results} />
    }
    return (
      <div style={{...content()}}>
        <Tabs selectTab={selectTab} selectedTab={selectedTab} />
        {component}
      </div>
    )
  }
}
