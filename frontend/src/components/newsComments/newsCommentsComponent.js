import React from "react";


const NewsCommentComponent = ({ newsComment, user }) => (
    <div className="CommentOrReview">
        <div className="NameAndPhoto">
            <p>{newsComment.author.ID}</p>
            <img src={newsComment.author.ID} />
        </div>
        <p>{newsComment.content}</p>
        <div className="CommentButtons">
            <button>Reply</button>
            {user.ID == newsComment.Author.ID ?
                <button>Edit</button> : null
            }
        </div>
    </div>
)

NewsCommentComponent.React.propType = {
}

export default NewsCommentComponent;