import React from "react";
import { connect } from "react-redux";
import NewsPageComponent from "../../components/news/newsPajeComponent";

const mapStateToProps = state => ({
    news: state.news
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsPageComponent)


