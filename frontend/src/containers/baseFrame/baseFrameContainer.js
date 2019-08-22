import { connect } from "react-redux";
import baseFrameComponent from "../../components/baseFrame/baseFrameComponent";

const mapStateToProps = state => ({
    user: state.baseFrameReducer.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(baseFrameComponent)