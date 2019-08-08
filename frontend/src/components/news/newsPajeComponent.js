import React from "react";
import NewsCommentComponent from "../newsComments/newsCommentsComponent.js"

const newsPageComponent = ({ news }) =>
    <div className="root">
        <h3>{news.title}</h3>
        <div className="imageSet">
            {news.image.image_file.map((image, i) =>
                    <img key={i} src={image} />   )}
        </div>
        <p>{news.context}</p>
        <div className="CommentsList">
            {news.comments.map((comment, i) =>
                <NewsCommentComponent  newsComment=comment user=User key={i}/>)}
        </div>
    </div>


newsPageComponent.React.propTypes = {
    title: React.propTypes.string,
    context: React.propTypes.string,
//    image.image_file: React.propTypes.string
}