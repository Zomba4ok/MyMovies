import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>MyFilms.com</h1>
          <video width="400" height="300" controls="controls" poster="store/img.jpg"></video>
          <source src="store/video.ogv" type="video/ogg" codecs=""></source>
        </div>
        <div className="">

        </div>
      </div>
    );
  }
}

export default App;
