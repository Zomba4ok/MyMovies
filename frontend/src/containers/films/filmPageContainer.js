import React from "react";
import { connect } from "react-redux";
import filmPageComponent from "../../components/films/filmPageComponent";

const mapStateToProps = state => ({
    film: state.filmPageReducer.film,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    // rateFilm(id, rating) {
    //     dispatch(rateFilm(id, rating))
    // }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(filmPageComponent)


