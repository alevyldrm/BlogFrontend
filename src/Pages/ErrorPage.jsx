import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ErrorPage.css'

function ErrorPage() {
    return (
        <section>
            <div className='error'>
                <h2>Error</h2>
                <h3>This Page Not Found!</h3>
                <Link className='go-home-btn' to={'/'}>Home</Link>
            </div>
        </section>
    )
}

export default ErrorPage
