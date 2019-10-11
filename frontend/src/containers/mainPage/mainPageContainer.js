import {connect} from "react-redux";
import MainPageComponent from "../../components/mainPage/mainPageComponent";
import {
    showNewsList,
    hideNewsList,
    showHiddenSlide,
    hideHiddenSlide,
} from "../../actions/mainPageActions";

const mapStateToProps = state => ({
    films: state.mainPageReducer.films,
    news: state.mainPageReducer.news,
    animation_attributes: state.mainPageReducer.animation_attributes,
});

const mapDispatchToProps = dispatch => ({
    showNewsList(news_list) {
        dispatch(showNewsList(news_list))
    },
    hideNewsList() {
        dispatch(hideNewsList())
    },
    showHiddenSlide(film_id) {
        dispatch(showHiddenSlide(film_id))
    },
    hideHiddenSlide(film_id) {
        dispatch(hideHiddenSlide(film_id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPageComponent)