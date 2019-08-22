import React from "react";
import { connect } from "react-redux";
import slideMenuComponent from "../../components/mainPage/slideMenuComponent";

const mapStateToProps = state => ({
    films: state.mainPageReducer.films,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(slideMenuComponent)