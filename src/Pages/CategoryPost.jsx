import React, { useState } from 'react'
import { CategoryPosts } from '../data/data'
import PostItem from '../Components/PostItem'
import '../css/CategoryPost.css'

function CategoryPost() {
    const [posts, setPosts] = useState(CategoryPosts)
    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }
    return (
        <section className='category-posts'>
            <h2 className='title'>Categories</h2>
            {posts.length > 0 ? <div className="container category-posts-container">

                {
                    posts && posts.map((post, index) => <PostItem onDelete={handleDelete} key={index} post={post} />)
                }
            </div> : <h2 className='error'>No Post Founds</h2>}
        </section>
    )}
export default CategoryPost
