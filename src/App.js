import React, { Component } from 'react';
import Home from './views/Home';
import FiveDayForecast from './views/FiveDayForecast';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Home /> */}
          <FiveDayForecast />
        </header>
      </div>
    );
  }
}

export default App;