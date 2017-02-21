import React, { Component } from 'react'
import { font } from '../../styles/styles'

const styles = {
  headline: {
    fontSize: font.size.large
  },
  text: {
    fontSize: font.size.medium
  },
  image: {
    width: '80%',
    marginLeft: '10%'
  },
  container: {
    marginBottom: '5%'
  }
}

export default class MediaCoverage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.headline}>Detta rapporterar media: </h1>
        <p style={styles.text}>DN</p>
        <img
          src={require('../../images/proof.jpg')}
          style={styles.image}
          alt='DN rapporterars'/>
      </div>
    )
  }
}
