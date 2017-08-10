import Bluebird from 'bluebird'
import 'intl'
import 'intl/locale-data/jsonp/en-GB'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './redux';
import { Provider } from 'react-redux';
import Button from './Button';

global.Promise = Bluebird // Replace global Promise with Bluebird!

Promise.longStackTraces()

class App extends Component {
  handleSubmit() {
    console.log('I promise');

    this.setState({loading: true});

    const promise = new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
    });

    promise
      .then(() => {
        console.log('Hello');

        throw new Error('Nope');

        this.setState({loading: false});
      });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            <Button />
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
