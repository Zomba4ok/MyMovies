import React from "react";


const NewsPreviewComponent = ({ article, key }) => (
    <div className="article" >
        <a key={key} href={window.location.hostname + "/news" + "..."}>
            <img src={article.mainImage} />
            <p>{article.description}</p>
        </a>
    </div>
)

export default NewsPreviewComponent;