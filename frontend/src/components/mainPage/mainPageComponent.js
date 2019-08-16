import React from "react";
import * as styles from "./styles.css";
import arrowLeft from "./arrowLeft.png";
import arrowRight from "./arrowRight.png"
import SlideMenuComponent from "./slideMenuComponent";

const MainPageComponent = ({ news, topFilms, categories }) => (
    <div className="mainContainer">
        <div className="topFilms">
            <h1>Best films of this week</h1>
            <div className="filmsSlideMenu">
                <button className="slideButton"><img src={arrowLeft}></img></button>
                <SlideMenuComponent topFilms={topFilms}/>
                <button className="slideButton" ><img src={arrowRight}></img></button>
            </div>
            <a href="">More top films</a>
        </div>
        <div className="Searching">
            <input type="text" />
            <button></button>
            {categories.map((category, i) =>
                <a key={i} href={window.location.hostname + "/search" + "..."}>{category.name}</a>)}
        </div>
    </div>
)
//To add searching ny genres, producers, actors etc...
// mainPageComponent.React.propTypes = {
// }


export default MainPageComponent;
// correct category search link
// add proptypes