import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Button from '../../components/util/button'
import { font, content } from '../../styles/styles'

const styles = {
  content: {
    ...content(),
    marginBottom: '10%'
  },
  button: {
    width: '48%',
    margin: '1%',
    fontSize: font.size.large
  },
  text: {
    textAlign: 'center',
    fontSize: font.size.huge
  },
  image: {
    marginLeft: '10%'
  }
}

export default class Voting extends Component {
  setVote = vote => {
    return () => {
      this.props.handleVote(vote)
      setTimeout(() => browserHistory.push('/results'), 200)
    }
  }
  
  voteYes = this.setVote('YES')
  voteNo = this.setVote('NO')

  render() {
    return (
      <div style={styles.content}>
        <h1 style={styles.text}>Det här är Kalle</h1>
        <img
          src={require('../../images/kalle-pic.jpg')}
          width='80%' style={styles.image}
          alt='Bild på Kalle'
        />
        <h1 style={styles.text}>Mår han skit?</h1>
        <div>
          <Button text="Ja" handleClick={this.voteYes} customStyles={styles.button} />
          <Button text="Nej" handleClick={this.voteNo} customStyles={styles.button} />
        </div>
      </div>
    )
  }
}
