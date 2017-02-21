import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import * as reducers from './reducers';
import VotingContainer from './voting/containers/main';
import ResultsContainer from './results/containers/main';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});
const store = createStoreWithMiddleware(reducer);
const history = syncHistoryWithStore(browserHistory, store);



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={VotingContainer} />
          <Route path="/results" component={ResultsContainer} />
        </Router>
      </Provider>
    );
  }
}
