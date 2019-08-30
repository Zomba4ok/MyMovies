import {connect} from "react-redux";
import MainPageComponent from "../../components/mainPage/mainPageComponent";
import {
    slideLeft,
    slideRight,
    changeSearchDivStyle,
} from "../../actions/mainPageActions";

const mapStateToProps = state => ({
    films: state.mainPageReducer.films,
    news: state.newsReducer.news,
    categories: state.mainPageReducer.searching.categories,
    genres: state.mainPageReducer.searching.genres,
    producers: state.mainPageReducer.searching.producers,
    searchDivStyle: state.mainPageReducer.searchDivStyle,
    leftSlideButton: state.mainPageReducer.slideButtons.left,
    rightSlideButton: state.mainPageReducer.slideButtons.right
});

const mapDispatchToProps = dispatch => ({
    slideLeft(films) {
        dispatch(slideLeft(films))
    },
    slideRight(films) {
        dispatch(slideRight(films))
    },
    changeSearchDivStyle(searchDivStyle) {
        dispatch(changeSearchDivStyle(searchDivStyle))
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPageComponent)