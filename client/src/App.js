import React, { Component } from 'react';
import AppNavbar from './components/AppNavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> hello </h1>
        <AppNavbar />
      </div>
    );
  }
}

export default App;
