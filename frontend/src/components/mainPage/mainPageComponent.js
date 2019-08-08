import React from "react";

const MainPageComponent = ({ news, topFilms, categories }) => (
    <div className="root">
        <h1>MyFilms.com</h1>
        <div className="TopFilms">
            {topFilms.map((film, i) =>
                <link key={i} to=""><img src={film.poster} /></link>)}
            <link to="">Watch more top films</link>
        </div>
        <div className="Searching">
            <input type="text" />
            <button></button>
            {categories.map((category, i) =>
                <a key={i} href={window.location.hostname + "/search" + "..."}>{category}</a>)}
        </div>
    </div>
)
//To add searching ny genres, producers, actors etc...
// mainPageComponent.React.propTypes = {
// }

export default MainPageComponent;
// correct category search link
// add proptypes