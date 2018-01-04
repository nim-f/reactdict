import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import Header from '../Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Form/>
      </div>
    );
  }
}

export default App;
