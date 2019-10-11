import React from "react";
import "./styles.css";
import {Modal} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {CSSTransition} from "react-transition-group";

const BaseFrameComponent = (props) => (
    <div className="top-panel">
        <div className="label">
            <a href="/">
                <h1 style={{zIndex: "12", marginTop: "5px", color: "#d9c44e"}}>M</h1><h1
                style={{zIndex: "11", marginTop: "20px", marginLeft: "-20px", color: "#d6d6d6"}}>M</h1>
            </a>
        </div>
        <ul className="base-menu horizontal-menu">
            <li><a href="...">Films</a></li>
            <li><a href="...">News</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">People</a></li>
        </ul>
        <div className="film-search">
            <input type="text"/>
            <button><FontAwesomeIcon icon={faSearch} size="10em"></FontAwesomeIcon></button>
        </div>
        <div className="user-account">
            {props.user.isAuthenticated ? (
                <ul className="base-menu horizontal-menu">
                    <li onClick={props.openModal}><a>{props.user.username}</a></li>
                    <Modal
                        open={props.isUserMenuOpen}
                        onClose={props.closeModal}
                        BackdropProps={{invisible: true}}

                    >
                        <ul className="base-menu user-menu">
                            {/*<h1>User menu</h1>*/}
                            <li><a href="">My profile</a></li>
                            <li>
                                <a href="">Notifications</a>
                                {(props.user.notifications > 0) ? (
                                    <div>
                                        {props.user.notifications}
                                    </div>
                                ) : null}
                            </li>
                            <li><a href="">chto-to</a></li>
                            <li><a href="">chto-to</a></li>
                            <li><a href="">chto-to</a></li>
                            <li><a href="">Sign out</a></li>
                        </ul>
                    </Modal>
                </ul>
            ) : (
                <ul className="base-menu horizontal-menu">
                    <li><a href="">Sign up</a></li>
                    <li><a href="">Sign in</a></li>
                </ul>
            )}
        </div>
    </div>
);

export default BaseFrameComponent;