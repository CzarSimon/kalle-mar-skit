import React, { Component } from 'react'
import { content, font } from '../../styles/styles'

const styles = {
  text: {
    textAlign: 'center',
    fontSize: font.size.huge
  }
}

export default class Results extends Component {
  render() {
    console.log(this.props)
    return (
      <div style={{...content()}}>
        <h1 style={styles.text}>Results</h1>
      </div>
    )
  }
}
