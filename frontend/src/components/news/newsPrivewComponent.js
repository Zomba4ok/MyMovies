import React from "react";


const NewsPreviewComponent = ({article}) => (
    <a href={window.location.hostname + "/news" + "..."}>
        <div className="article">
            <img src={article.mainImage}/>
            <p>{article.description}</p>

        </div>
    </a>
)

export default NewsPreviewComponent;