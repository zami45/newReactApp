import React, { Component } from 'react';
import Navbar from "./Layout/navbar/navbar";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.type = 'submit'
  }
  render() {
    return (

      <Navbar />

    );
  }
}

export default App;
