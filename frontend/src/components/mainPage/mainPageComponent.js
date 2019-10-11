import React from "react";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./styles.css";
import {CSSTransition} from "react-transition-group";


const MainPageComponent = (props) => {
    const [isSlideOpen, setSlideStyle] = React.useState(false)
    const openSlide = () => setSlideStyle(true)
    return (
        <div className="main-div">
            <div className="top-films">
                <div className="films-slide-menu">
                    {props.films.map((film) => {
                        return (
                            <CSSTransition
                                timeout={100}
                                key={film.id}
                                in={isSlideOpen}
                            >
                                <div onClick={() => openSlide()}>
                                    <div className="hidden-film-slide" style={{backgroundImage: `url(${film.poster})`}}>

                                    </div>
                                    <div className="shown-film-slide">

                                    </div>
                                    {/*<a href={window.location.hostname + "..."}><h1>{film.name}</h1></a>*/}
                                    {/*<div className="description-container">*/}
                                    {/*    <a href={window.location.hostname + "..."}><img src={film.poster}/></a>*/}
                                    {/*    <p>{film.description}</p>*/}
                                    {/*</div>*/}
                                    {/*<div className="back-button-container"*/}
                                    {/*     onClick={props.hideHiddenSlide.bind(this, film.id)}>*/}
                                    {/*    <FontAwesomeIcon icon={faChevronLeft}/>*/}
                                    {/*    <p>back</p>*/}
                                    {/*</div>*/}
                                </div>
                            </CSSTransition>
                        )
                    })}
                </div>
            </div>
            <div className="news">
                {
                    (!props.news.shown_news_group.show_news_list) ? (
                        <div className="news-previews">
                            {props.news.news_groups.map((news_group, i) => {
                                return (
                                    <div className="news-tape-preview" key={i}
                                         onClick={props.showNewsList.bind(this, news_group.news_list)}>
                                        <FontAwesomeIcon icon={news_group.group_image}
                                                         className="news-tape-preview-icon"
                                                         size="5x"/>
                                        <h2>{news_group.group_name}</h2>
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        <div>
                            <div className="back-button-container" onClick={props.hideNewsList}>
                                <FontAwesomeIcon icon={faChevronLeft}/>
                                <p>back</p>
                            </div>
                            <div className="news-tape">
                                {props.news.shown_news_group.news_list.map((article, i) => {
                                    return (
                                        <div className="article" key={i}>
                                            <a href={window.location.hostname + "/news" + "..."}>
                                                <img src={article.mainImage}/>
                                                <p>{article.description}</p>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
// mainPageComponent.React.propTypes = {
// }

export default MainPageComponent;
// correct category search link
// add proptypes