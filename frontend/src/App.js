import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseFrameComponent from "./containers/baseFrame/baseFrameContainer";
import img from "./img.jpg";
import img1 from "./img1.jpg";
import MainPageComponent from "./containers/mainPage/mainPageContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
            <BaseFrameComponent />
            <MainPageComponent />
      </div>
    );
  }
}

export default App;
