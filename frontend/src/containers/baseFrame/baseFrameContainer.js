import { connct } from "react-redux";
import baseFrameComponent from "../../components/baseFrame/baseFrameComponent";

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connct(
    mapStateToProps,
    mapDispatchToProps
)(baseFrameComponent)