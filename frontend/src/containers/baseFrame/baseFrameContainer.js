import { connect } from "react-redux";
import baseFrameComponent from "../../components/baseFrame/baseFrameComponent";
import {openModal, closeModal} from "../../actions/baseFrameActions";

const mapStateToProps = state => ({
    user: state.baseFrameReducer.user,
    isUserMenuOpen: state.baseFrameReducer.isUserMenuOpen
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    openModal() {
        dispatch(openModal())
    },
    closeModal() {
        dispatch(closeModal())
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(baseFrameComponent)