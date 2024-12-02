import React from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import '../css/PostDetail.css'

function Comment({ comment, onRemoveComment }) {

    const removeComment = () => {
        onRemoveComment(comment.id)
    }

    return (
        <div className='comment'>
            <article>
                <p>{comment.content}</p>

            </article>
            <div>
                <IoIosRemoveCircleOutline onClick={removeComment} className='comment-icon' />
            </div>
        </div>
    )
}

export default Comment
