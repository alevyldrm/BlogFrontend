import React, { useState } from 'react'
import { FakePosts } from '../data/data'
import PostItem from '../Components/PostItem'
import '../css/AuthorPost.css'

function AuthorPost() {
    const [posts, setPosts] = useState(FakePosts)
    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id))

    }
    return (

        <section className='authorPosts'>
            <h2 className='title'>Author Posts</h2>
            {posts.length > 0 ? <div className="container authorPosts-container">

                {
                    posts && posts.map((post, index) => <PostItem onDelete={handleDelete} key={index} post={post} />)
                }
            </div> : <h2 className='error'>No Post Founds</h2>}

        </section>

    )
}

export default AuthorPost
