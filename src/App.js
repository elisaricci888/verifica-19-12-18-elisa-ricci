import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.js'
import Body from './components/body/Body.js'
import Footer from './components/footer/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
