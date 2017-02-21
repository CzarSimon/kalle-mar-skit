import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchResults } from '../../actions/voting-actions'
import { fetchMessages } from '../../actions/message-actions'
import { selectTab } from '../../actions/tabs-actions'
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
    const { votes, messages, selectedTab } = this.props.state
    const { selectTab } = this.props.actions
    if (votes.loaded) {
      return (
        <Results
          results={votes.results}
          messages={messages.messages}
          selectedTab={selectedTab}
          selectTab={selectTab}
        />
      )
    } else {
      return <h1>Loading</h1>
    }
  }
}

export default connect(
  state => ({
    state: {
      selectedTab: state.tabs.selected,
      votes: state.votes,
      messages: state.messages
    }
  }),
  dispatch => ({
    actions: bindActionCreators({
      fetchResults,
      fetchMessages,
      selectTab
    }, dispatch)
  })
)(ResultsContainer);
