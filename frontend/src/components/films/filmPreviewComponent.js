import React from "react"

const FilmPreviewComponent = ({ film }) =>
    <div className="oneFilmBlock">
        <img src={film.poster} />
        <div className="filmInfo">
            <h3>{film.name}</h3>
            <p>{film.description}</p>
            <p className="AgeRating">{film.age_rate}</p>
            <p>{film.average_rate}</p>
            <p>{film.film_company}</p>
            <p>{film.producer}</p>
            <p>{film.duration}</p>
            <p>{film.premiere}</p>
        </div>
    </div>

FilmPreviewComponent.React.propTypes = {
    poster: React.propTypes.string,
    name: React.propTypes.string,
    description: React.propTypes.string,
    age_rate: React.propTypes.number,
    average_rate: React.propTypes.number,
    producer: React.propTypes.string,
    duration: React.propTypes.object,
    premiere: React.propTypes.object,
}
export default { FilmPreviewComponent }

