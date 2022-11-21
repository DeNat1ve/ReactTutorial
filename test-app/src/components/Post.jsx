import React from "react"
import CustomButtons from "./UI/buttons/CustomButtons";

const Post = (props) => {
    return (
        <div className="post">
            <div className="post-content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post-btn">
                <CustomButtons onClick={() => props.remove(props.post)}>Delete</CustomButtons>
            </div>
        </div>
    )
}

export default Post;