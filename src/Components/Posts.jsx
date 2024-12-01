import React, { useState } from 'react'
import { FakePosts } from '../data/data'
import PostItem from './PostItem'
import '../css/HomePage.css'
import '../css/ErrorPage.css'
import HeadPost from './HeadPost'
import 'react-quill/dist/quill.snow.css'

function Posts() {
    const [posts, setPosts] = useState(FakePosts)
    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id))

    }
    // !!!!!!!! 
    // const createPost = (newpost) => {
    //     setPosts([...posts, newpost])
    // }
    return (

        <section className='posts'>
            <div className="head-post">
                <HeadPost />
            </div>
            {posts.length > 0 ? <div className="container post-container">
                {
                    posts && posts.map((post, index) => <PostItem onDelete={handleDelete} key={index} post={post} />)
                }
            </div> : <h2 className='error'>No Post Founds</h2>}

        </section>
    )
}

export default Posts
