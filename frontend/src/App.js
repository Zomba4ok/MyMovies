import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseFrameComponent from "./containers/baseFrame/baseFrameContainer";
import img from "./img.jpg";
import img1 from "./img1.jpg";
import MainPageComponent from "./containers/mainPage/mainPageContainer";
import FilmPageComponent from "./containers/films/filmPageContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
            <BaseFrameComponent />
            <MainPageComponent />
            {/*<FilmPageComponent />*/}
      </div>
    );
  }
}

export default App;
