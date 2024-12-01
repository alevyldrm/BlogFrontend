import React from 'react'
import Posts from './Posts'
import PostAuthor from './PostAuthor'
import { Link } from 'react-router-dom'
import '../css/HomePage.css'

export function PostItem({ post, onDelete }) {
    const { id, Image, title, category, authorId, des } = post

    const shortTitle = title.lenght > 60 ? title.substr(0, 60) + '...' : title
    const shortDes = des.lenght > 120 ? des.substr(0, 120) + '...' : des
    return (
        <article className='post'>
            <Link to={`posts/${id}`}>
                <div className='post-image'>
                    <img src={Image} alt="" />
                </div>
            </Link>
            <div className='post-content'>
                <Link to={`posts/${id}`}>
                    <h3 className='cb' >{shortTitle}</h3>
                </Link>
                <p>{shortDes}</p>
                <div className='post-footer'>
                    <PostAuthor />
                    <div className="post-footer-buttons">
                        <Link className=' post-category' to={`/posts/categories/${category}`}>{category}
                        </Link>
                        <button className='post-delete-btn btn' onClick={() => onDelete(id)}>Delete</button>
                    </div>
                </div>
            </div>
        </article >
    )}
export default PostItem
