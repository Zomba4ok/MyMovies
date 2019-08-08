import React from "react";
import { connect } from "react-redux";
import filmPageComponent from "../../components/films/filmPageComponent";

const mapStateToProps = state => ({
    name: state.film.name,
    poster: state.film.poster,//???,
    description: state.film.description,
    age_rate: state.film.age_rate,
    average_rate: state.film.average_rate,
    producer: state.film.producer,
    duration: state.film.duration,
    premiere: state.film.premiere,
    film_file: state.film.filmFile//???
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    rateFilm(id, rating) {
        dispatch(rateFilm(id, rating)) 
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(filmPageComponent)


