import React from "react";
import {CSSTransition} from "react-transition-group";

const SlideMenuComponent = (props) => (
    props.films.map((film, i) => {
        if (0 <= i && i < 5) {
            return <CSSTransition
                in={props.ShowProp}
                key={i}
                timeout={1}>
                <a href="">
                    <img src={film.poster}
                         style={{
                             height: (
                                 300 + 50 * (
                                     (i < 3) ? (
                                         i
                                     ) : (
                                         4 - i
                                     )
                                 )).toString() + "px"
                         }}/>
                </a>
            </CSSTransition>
        }
    })
);

export default SlideMenuComponent;