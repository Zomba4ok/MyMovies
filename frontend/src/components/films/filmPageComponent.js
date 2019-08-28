import React from 'react';
import * as styles from './styles.css'
import arrowDownImage from './arrowDown.png'

const FilmPageComponent = (props) => (
    <div className="main-div">
        <h1>{props.film.name}</h1>
        {(props.film.images.length > 5) ?
            <div className="scroll-message">
                <img src={arrowDownImage}/>
                <p>Scroll to see more</p>
            </div> : null
        }
        <div className="film-info">
            <div className="image-set">
                <div className="additional-images">
                    {props.film.images.map((image, i) =>
                        <img key={i} src={image.image_file}/>)
                    }
                </div>
                <img src={props.film.poster}/>
            </div>
            <p className="AgeRating">{props.film.age_rate}</p>
            <p>{props.film.average_rate}</p>
            <p>{props.film.film_company}</p>
            <p>{props.film.producer}</p>
            <p>{props.film.duration}</p>
            <p>{props.film.premiere}</p>
        </div>
        <p>{props.film.description}</p>
        {[1, 2, 3, 4, 5].map(i =>
            <input key={i} type="radio"/>)}
        <video src={props.film.film_file}></video>
    </div>
)

export default FilmPageComponent
