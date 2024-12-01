import React, { useState } from 'react'
import { fakeAuthors } from '../data/data'
import { Link } from 'react-router-dom'
import '../css/Authors.css'

function Authors() {
    const [authors, setAuthor] = useState(fakeAuthors)
    return (
        <section className='author'>

            {authors.length > 0 ? <div className="container author-container">
                {
                    authors && authors.map((author, index) => {
                        return <Link to={`/posts/user/${author.id}`} key={index} className='author-avatar'>
                            <div className="author-image">
                                <img src={author.Image} alt="" />
                            </div>
                            <div className="author-info">
                                <h4>{author.name}</h4>
                                <p>{author.posts}</p>
                            </div>
                        </Link>
                    })
                }
            </div> : <h2 className='error'>No Post Founds</h2>}
        </section>
    )
}


export default Authors
