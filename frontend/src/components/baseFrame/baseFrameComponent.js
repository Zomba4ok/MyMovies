import React from "react";
import * as styles from "./styles.css";

const BaseFrameComponent = ({ user }) => (
        <div className="borders topMenu" >
            <ul className="horizontalMenu">
                <li className="title"><a href="/">MyMovies.com</a></li>
                <li ><a href="...">Films</a>
                    <ul className="dropDownMenu">
                        <li><a href="...">Premieres</a></li>
                        <li><a href="...">Top</a></li>
                        <li><a href="...">Series</a></li>
                        <li><a href="...">Cartoons</a></li>
                        <li><a href="...">Anime</a></li>
                    </ul>
                </li>
                <li><a href="...">News</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">People</a></li>
            </ul>
            <div style={{position: "absolute", top: 0, right: "30px"}}>
                {user.isAuthenticated ? (
                        <a href="" className="userAccount">
                            <p>{user.username}</p>
                            <img src={user.avatar} />
                        </a>
                    ) : (
                        <a href="" className="userAccount">
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