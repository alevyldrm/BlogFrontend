import React from 'react'
import Comment from './Comment'


function CommentList({ comments, onRemoveComment }) {

  return (
    <div style={{ width: '100%' }}>

      {
        comments && comments.map((comment) => (
          <Comment onRemoveComment={onRemoveComment} key={comment.id} comment={comment} />
        ))
      }
    </div>
  )
}

export default CommentList
