import React from 'react'
import { Link } from 'react-router-dom'

function Delete() {
    return (
        <section>
            <div className='error'>
                <h2>Delete</h2>
                <Link className='go-home-btn' to={'/'}>Home</Link>
            </div>
        </section>
    )
}

export default Delete
