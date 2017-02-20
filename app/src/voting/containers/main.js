import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postVote } from '../../actions/voting-actions';
import Voting from '../components/main';

class VotingContainer extends Component {
  handleVote = vote => {
    const { postVote } = this.props.actions
    postVote(vote)
  }

  render() {
    return <Voting handleVote={this.handleVote} />
  }
}

export default connect(
  state => ({
    state: {
      voting: state.voting
    }
  }),
  dispatch => ({
    actions: bindActionCreators({
      postVote
    }, dispatch)
  })
)(VotingContainer);
