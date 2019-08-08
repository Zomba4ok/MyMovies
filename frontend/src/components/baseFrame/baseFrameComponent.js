import React from "react"

const BaseFrameComponent = ({ user }) => (
    <div className="root">
        <div className="topMenu">
            <ul>
                <li><a href="/">MyFilms.com</a></li>
                <li><a href="...">Films</a>
                    <ul>
                        <li><a href="...">Premieres</a></li>
                        <li><a href="...">Top</a></li>
                        <li><a href="...">Series</a></li>
                        <li><a href="...">Cartoons</a></li>
                        <li><a href="...">Anime</a></li>
                    </ul>
                </li>
                <li><a href="...">News</a></li>
                <li><a href="/">AboutUs</a></li>
                <li><a href="/">People</a></li>
            </ul>
            <input type="text" />
            <button>User Search</button>
            {user.isAuthenticated ? (
                    <a href="">{user.username}</a>

                ) : (
                    <div>
                        <button>Sign up</button>
                        <button>Sign in</button>
                    </div>
                )}
        </div>
        <div className="bottomMenu">
            company info
        </div>
    </div>
)

export default BaseFrameComponent;