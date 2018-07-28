import React, { Component } from 'react';
import AppNavbar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> hello </h1>
        <AppNavbar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
