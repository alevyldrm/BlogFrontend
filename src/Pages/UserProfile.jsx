import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileImage from '../images/p8.jpeg'
import '../css/UserProfile.css'

function UserProfile() {
    const [profileImage, setProfileImage] = useState()
    return (
        <section className='profile'>

            <div className="container profile-container">
                <Link to={'/myposts/id'}>Go My Posts</Link>

                <div className="profile-details">
                    <div className="profile wrapper">
                        <div className="profile-image">
                            <img src={ProfileImage} alt="" />
                        </div>


                    </div>

                    <h1>Sharon Stone</h1>
                </div>
            </div>
        </section>
    )
}

export default UserProfile
