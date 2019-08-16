import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseFrameComponent from "./components/baseFrame/baseFrameComponent";
import img from "./img.jpg";
import img1 from "./img1.jpg";
import MainPageComponent from "./components/mainPage/mainPageComponent";

class App extends Component {
  render() {
    return (
      <div className="app">
            <BaseFrameComponent user={{isAuthenticated: true, username: "Zomba4ok", avatar: img}} />
            <MainPageComponent news={{}}
                               topFilms={[
                                   {poster: img1},
                                   {poster: img},
                                   {poster: img},
                                   {poster: img1},
                                   {poster: img},
                                   {poster: img1},
                                   {poster: img},
                                   {poster: img1},
                                   {poster: img},
                                   {poster: img1}]}
                               categories={[{name:"ggggg"}, {name:"gggg"}]}
            />
      </div>
    );
  }
}

export default App;
