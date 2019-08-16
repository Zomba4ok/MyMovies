import React from "react";
import { connect } from "react-redux";
import slideMenuComponent from "../../components/mainPage/slideMenuComponent";

const mapStateToProps = state => ({
    topFilms: state.films,
    start: state.mainPage.slidePositions.start,
    end: state.mainPage.slidePositions.end
})

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(slideMenuComponent)