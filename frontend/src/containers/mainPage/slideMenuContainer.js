import React from "react";
import { connect } from "react-redux";
import slideMenuComponent from "../../components/mainPage/slideMenuComponent";
import { revertShowProp } from "../../actions/mainPageActions";

const mapStateToProps = state => ({
    films: state.mainPageReducer.films,
    showProp: state.mainPageReducer.showProp
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    revertShowProp(showProp) {
        dispatch(revertShowProp(showProp))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(slideMenuComponent)