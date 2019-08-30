import React from "react";
import * as styles from "./styles.css";

const BaseFrameComponent = (props) => (
    <div className="top-menu">
        <div className="title">
            <a href="/">
                <h1 style={{zIndex: "12", marginTop: "5px", color: "#d9c44e"}}>M</h1><h1
                style={{zIndex: "11", marginTop: "20px", marginLeft: "-20px", color: "#d6d6d6"}}>M</h1>
            </a>
        </div>
        <ul className="horizontal-menu">
            <li><a href="...">Films</a></li>
            <li><a href="...">News</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">People</a></li>
        </ul>
        <div style={{position: "absolute", top: 0, right: "30px"}}>
            {props.user.isAuthenticated ? (
                <a href="" className="user-account">
                    <p>{props.user.username}</p>
                    <img src={props.user.avatar}/>
                </a>
            ) : (
                <a href="" className="user-account">
                    <p>Sign up</p>
                    <p>&nbsp;/&nbsp;</p>
                    <p>Sign in</p>
                </a>
            )}
        </div>
    </div>
);

export default BaseFrameComponent;
//
// <div className="borders bottomMenu">
//     <p style={{position:"absolute", left:"43%", color:"#FFFFFF"}}>There are some information about our site</p>
// </div>