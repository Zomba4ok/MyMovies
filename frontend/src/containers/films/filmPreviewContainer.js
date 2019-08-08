import React from "react";
import { connect } from "react-redux";
import FilmPreviewComponent from "../../components/films/filmPreviewComponent";

const mapStateToProps = state => ({
    film: state.film
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmPreviewComponent)
