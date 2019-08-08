import React from "react";
import PropTypes from 'prop-types';

const filmPageComponent = ({ film }) =>
    <div className="root">
        <div className="filmInfo">
            <h2>{film.name}</h2>
            <div className="imageSet">
                <img src={film.poster} />
                {film.image.image_file.map((image, i) =>
                    <img key={i} src={image} />)}
            </div>
            <p className="AgeRating">{film.age_rate}</p>
            <p>{film.average_rate}</p>
            <p>{film.film_company}</p>
            <p>{film.producer}</p>
            <p>{film.duration}</p>
            <p>{film.premiere}</p>
        </div>
        <p>{film.description}</p>
        {[1, 2, 3, 4, 5].map(i => 
            <input key={i} type="radio" />)}
        <video src={film.film_file}></video>
    </div>
//to add comments

filmPage.propTypes = {
   name: React.propTypes.string,
   poster: React.propTypes.string,
   description: React.propTypes.string,
   age_rate: React.propTypes.number,
   average_rate: React.propTypes.number,
   producer: React.propTypes.string,
   duration: React.propTypes.object,
   premiere: React.propTypes.object,
   film_file: React.propTypes.string,
//   image.image_file: React.propTypes.string,
}

export default { filmPageComponent }
