import React from "react";
import { connect } from "react-redux";
import NewsCommentComponent from "../../components/newsComments/newsCommentsComponent";

const mapStateToProps = state => ({
    newsComment: state.news.comments,
    user: state.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsCommentComponent)


