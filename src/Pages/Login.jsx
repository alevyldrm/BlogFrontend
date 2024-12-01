import React, { useState } from 'react'
import '../css/Register.css'
import { Link } from 'react-router-dom'


function Login() {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const inputHandle = (e) => {
        setUserData(state => {
            return { ...state, [e.target.name]: e.target.value }

        })
    }

    return (

        <section className='login'>
            <div className="container register-container form-container">
                <h2>Login</h2>
                <form action="" className='form register-form'>
                    <input type="email" placeholder='Email' name='email' value={userData.email} onChange={inputHandle} />
                    <input type="password" placeholder='Password' name='password' value={userData.password} onChange={inputHandle} />

                    <button type='sumbit' className='register-btn'>Login</button>
                </form>
                <small>You have not any account ? <Link to={'/register'}>Sign Up</Link></small>
            </div>
        </section>
    )
}

export default Login
