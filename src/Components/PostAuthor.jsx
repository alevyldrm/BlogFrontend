import React from 'react'
import { Link } from 'react-router-dom'
import Authorimage from '../images/p8.jpeg'
import '../css/HomePage.css'

function PostAuthor() {
    return (
        <Link to={`posts/user/:id`} className='post-author'>
            <div className='post-author-image'>
                <img src={Authorimage} alt="" />
            </div>
            <div className='post-author-info'>
                <h5 className='cb'>Sharon Stone</h5>
                <small className='cb'>Just Now</small>
            </div>
        </Link>

    )
}

export default PostAuthor
