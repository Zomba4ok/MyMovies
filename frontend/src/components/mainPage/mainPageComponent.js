import React from "react";
import SlideMenuComponent from "../../containers/mainPage/slideMenuContainer";
import NewsPreviewComponent from "../news/newsPrivewComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faSearch} from "@fortawesome/free-solid-svg-icons";
import * as styles from "./styles.css";


const MainPageComponent = (props) => (
    <div className="main-div">
        <div className={"top-films"}>
            <h1>Best films of this week</h1>
            <div className="films-slide-menu">
                <button className="slide-button" onClick={props.slideLeft.bind(this, props.films)}><FontAwesomeIcon
                    icon={faChevronLeft} size="6x" color="#d6d6d6" className="slide-button-icon" /></button>
                <SlideMenuComponent/>
                <button className="slide-button" onClick={props.slideRight.bind(this, props.films)}><FontAwesomeIcon
                    icon={faChevronRight} size="6x" color="#d6d6d6" className="slide-button-icon"/></button>
            </div>
            <a href="">More top films</a>
        </div>
        <div className="search-and-news">
            <div className="search" style={props.searchDivStyle}>
                <h2>Find a movie to your taste</h2>
                <div className="free-search">
                    <input type="text"/>
                    <button><FontAwesomeIcon icon={faSearch} className="ASD"></FontAwesomeIcon></button>
                </div>
                <div className="one-click-search">
                    <div>
                        <h3>Categories</h3>
                        {props.categories.map((category, i) =>
                            <a key={i} href={window.location.hostname + "/search" + "..."}>{category.name}</a>)}
                    </div>
                    <hr/>
                    <div>
                        <h3>Genres</h3>
                        {props.genres.map((category, i) =>
                            <a key={i} href={window.location.hostname + "/search" + "..."}>{category.name}</a>)}
                    </div>
                    <hr/>
                    <div>
                        <h3>Producers</h3>
                        {props.producers.map((category, i) =>
                            <a key={i} href={window.location.hostname + "/search" + "..."}>{category.name}</a>)}
                    </div>
                </div>
            </div>
            <button onClick={props.changeSearchDivStyle.bind(this, props.searchDivStyle)}><p>Search</p></button>
            <div className="news">
                <a><h2>News</h2></a>
                <div>
                    <div>
                        {props.news.map((article, i) => {
                            if (i < Math.round(props.news.length / 2)) {
                                return (
                                    <NewsPreviewComponent key={i} article={article}/>
                                )
                            }
                        })}
                    </div>
                    <div>
                        {props.news.map((article, i) => {
                            if (i >= Math.round(props.news.length / 2)) {
                                return (
                                    <NewsPreviewComponent key={i} article={article}/>
                                )
                            }
                        })}
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