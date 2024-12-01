import React, { useState } from 'react'
import { FakePosts } from '../data/data'
import { Link } from 'react-router-dom'
import '../css/Dashboard.css'

function Dashboard() {
    const [posts, setPosts] = useState(FakePosts)
    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id))

    }
    return (
        <section className='dashboard'>
            {posts.length > 0 ? <div className="container dashboard-container">

                {
                    posts && posts.map((post, index) => {
                        return <article key={index} className='dashboard-post'>
                            <div className="dashboard-post-info">
                                <div className="dashboard-post-image">
                                    <img src={post.Image} alt="" />
                                </div>
                                <h4>{post.title}</h4>
                            </div>
                            <div className="dashboard-post-action">
                                <Link to={`/posts/${post.authorId}`} className='btn btn-dashboard view' >View</Link>
                                <Link to={`/posts/${post.authorId}/edit`} className='btn btn-dashboard edit' >Edit</Link>
                                <Link onClick={() => handleDelete(post.id)} className='btn btn-dashboard delete' >Delete</Link>

                            </div>
                        </article>
                    })
                }
            </div> : <h2 className='error'>You have not any posts.</h2>}
        </section>
    )
}

export default Dashboard
