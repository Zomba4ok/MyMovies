import React from "react";
import * as styles from "./styles.css";
import arrowLeftImage from "./arrowLeft.png";
import arrowRightImage from "./arrowRight.png"
import SlideMenuComponent from "../../containers/mainPage/slideMenuContainer";
import searchImage from "./search.png";
import NewsPreviewComponent from "../news/newsPrivewComponent";

const MainPageComponent = (props) => (
    <div className="mainContainer">
        <div className="topFilms">
            <h1>Best films of this week</h1>
            <div className="filmsSlideMenu">
                <button className="slideButton" onClick={props.slideLeft.bind(this, props.films)}><img
                    src={arrowLeftImage}></img></button>
                <SlideMenuComponent/>
                <button className="slideButton" onClick={props.slideRight.bind(this, props.films)}><img
                    src={arrowRightImage}></img></button>
            </div>
            <a href="">More top films</a>
        </div>
        <div className="searchAndNews">
            <div className="search">
                <h2>Find a movie to your taste</h2>
                <div className="freeSearch">
                    <input type="text"/>
                    <button><img src={searchImage}></img></button>
                </div>
                <div className="oneClickSearch">
                    <div>
                        <h3>Categories</h3>
                        {props.categories.map((category, i) =>
                            <a key={i} href={window.location.hostname + "/search" + "..."}>{category.name}</a>)}
                    </div>
                    <div>
                        <h3>Genres</h3>
                        {props.genres.map((category, i) =>
                            <a key={i} href={window.location.hostname + "/search" + "..."}>{category.name}</a>)}
                    </div>
                    <div>
                        <h3>Producers</h3>
                        {props.producers.map((category, i) =>
                            <a key={i} href={window.location.hostname + "/search" + "..."}>{category.name}</a>)}
                    </div>
                </div>
            </div>
            <div className="news">
                <h2>News</h2>
                <div>
                    <div>
                        {props.news.map((article, i) => {
                            if (i <= Math.round(props.news.length)) {
                                return (
                                    <NewsPreviewComponent />
                                )
                            }

                        })}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
)
//To add searching ny genres, producers, actors etc...
// mainPageComponent.React.propTypes = {
// }

export default MainPageComponent;
// correct category search link
// add proptypes