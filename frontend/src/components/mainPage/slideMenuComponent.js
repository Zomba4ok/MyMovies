import React from "react";
import * as styles from "./styles.css";

const SlideMenuComponent = ({ topFilms }) => (
    topFilms.map((film, i) => {
        if (0 <= i && i < 5) {
            return <a key={i} href="">
                        <img src={film.poster}
                            style={{height: (
                                300 + 50 * (
                                    (i < 3) ? (
                                        i
                                    ) : (
                                        4 - i
                                    )
                                    )).toString() + "px"}}/>
                    </a>
        }
    })
);

export default SlideMenuComponent;