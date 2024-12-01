import React, { useState } from 'react'
import '../css/Header.css'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


function Header() {
    const [isNawShow, setIsNawShow] = useState(window.innerWidth > 1024 ? true : false)

    const closeNavHandle = () => {
        if (window.innerWidth < 1024) {
            setIsNawShow(false)
        } else {
            isNawShow(true)
        }
    }
    return (
        <nav>
            <div className='container nav-container'>
                <Link className='logo' to={'/'}>
                    <h3>BLOG</h3>
                </Link>
                {isNawShow && <ul className='nav-menu'>
                    <li><Link onClick={closeNavHandle} to={'/profile/id'}>My Profile</Link></li>
                    <li><Link onClick={closeNavHandle} to={'/create'}> Create Posts</Link></li>
                    <li><Link onClick={closeNavHandle} to={'/authors'}>Authors</Link></li>
                    <li><Link onClick={closeNavHandle} to={'/logout'}>Logout</Link></li>
                </ul>}
                <button onClick={() => setIsNawShow(
                    !isNawShow
                )} className='nav-toggle-button btn  nav-btn'>
                    {
                        isNawShow ? <IoMdClose /> : <FaBars />
                    }
                </button>
            </div>
        </nav>
    )
}

export default Header
