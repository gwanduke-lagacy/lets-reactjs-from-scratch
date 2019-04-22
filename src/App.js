import './App.scss';

import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Let's ReactJS From Scratch</h1>
        <ul>
          <li>🔥 Hot Module Reloading...</li>
        </ul>
      </div>
    );
  }
}

export default hot(module)(App);
