import React, { useState } from 'react'
import { FakePosts } from '../data/data'
import PostItem from '../Components/PostItem'
import '../css/CategoryPost.css'

function CategoryPost() {
    const [posts, setPosts] = useState(FakePosts)

    return (
        <section className='category-posts'>
            <h2 className='title'>Categories</h2>
            {posts.length > 0 ? <div className="container category-posts-container">

                {
                    posts && posts.map((post, index) => <PostItem key={index} post={post} />)
                }
            </div> : <h2 className='error'>No Post Founds</h2>}

        </section>
    )
}

export default CategoryPost
