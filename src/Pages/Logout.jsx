import React from 'react'
import { Link } from 'react-router-dom'

function Logout() {
    return (
        <section>
            <div className='error'>
                <h2>Log out</h2>
                <div >
                    <Link className='go-home-btn lgn' to={'/login'}>Login</Link>
                    <Link className='go-home-btn' to={'/'}>Home</Link>
                </div>

            </div>
        </section>
    )
}

export default Logout
