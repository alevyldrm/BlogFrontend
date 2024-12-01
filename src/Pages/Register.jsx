import React, { useState } from 'react'
import '../css/Register.css'
import { Link } from 'react-router-dom'


export function Register() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const inputHandle = (e) => {
        setUserData(state => {
            return { ...state, [e.target.name]: e.target.value }

        })
    }
    return (
        <section className='register'>
            <div className="container register-container form-container">
                <h2>Sign Up</h2>
                <form action="" className='form register-form'>
                    <input type="text" placeholder='Full name' name='name' value={userData.name} onChange={inputHandle} />
                    <input type="email" placeholder='Email' name='email' value={userData.email} onChange={inputHandle} />
                    <input type="password" placeholder='Password' name='password' value={userData.password} onChange={inputHandle} />
                    <input type="password" placeholder='Confirm Password' name='password2' value={userData.password2} onChange={inputHandle} />
                    <button type='sumbit' className='register-btn'>Sign up</button>
                </form>
                <small>Allready have an account ? <Link to={'/login'}>Sign in</Link></small>
            </div>
        </section>
    )
}

export default Register
