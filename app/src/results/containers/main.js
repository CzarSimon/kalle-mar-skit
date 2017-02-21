import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchResults } from '../../actions/voting-actions'
import { fetchMessages } from '../../actions/message-actions'
import Results from '../components/main'

class ResultsContainer extends Component {
  componentDidMount() {
    const { votes } = this.props.state
    const { fetchResults, fetchMessages } = this.props.actions
    if (!votes.loaded) {
      fetchResults()
    }
    fetchMessages()
  }

  render() {
    const { votes, messages } = this.props.state
    if (votes.loaded) {
      return (
        <Results results={votes.results} messages={messages.messages} />
      )
    } else {
      return <h1>Loading</h1>
    }

  }
}

export default connect(
  state => ({
    state: {
      votes: state.votes,
      messages: state.messages
    }
  }),
  dispatch => ({
    actions: bindActionCreators({
      fetchResults,
      fetchMessages
    }, dispatch)
  })
)(ResultsContainer);
