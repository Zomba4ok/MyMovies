import React from "react";
import { connect } from "react-redux";
import ModalWindowComponent from "../../components/addons/modalWindowComponent";
import {openModal, closeModal} from "../../actions/filmsActions";

const mapStateToProps = state => ({
    film: state.filmPageReducer.film,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    openModal(item) {
        dispatch(openModal(item))
    },
    closeModal() {
        dispatch(closeModal())
    },
    rateFilm(id, rating) {
        dispatch(rateFilm(id, rating))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(filmPageComponent)


