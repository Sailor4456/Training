import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import EmpDetails from './components/Details';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Login} />
        <Route path="/register/:email?" component={Register} />
        <Route path="/details" component={EmpDetails} />
      </div>
    );
  }
}

export default App;