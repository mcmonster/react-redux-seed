/**
 * @blame R. Matt McCann <me@mattmccann.xyz>
 * @brief Entry point for the app
 */

import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';

import './App.css';
import logo from './logo.svg';
import { configureStore, history } from './redux/configure-store';


// Build the store we will use with the app
const store = configureStore();


const match = () => <div>Match</div>;
const miss = () => <div>Miss</div>;

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Switch>
              <Route exact path="/" component={match} />
              <Route component={miss} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
