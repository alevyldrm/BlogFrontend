import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="container footer-container">
                <ul className='footer-categories'>
                    <li><Link to={'/post/categories/Education'}>Education</Link></li>
                    <li><Link to={'/post/categories/Discovery'}>Discovery</Link></li>
                    <li><Link to={'/post/categories/Agreculture'}>Agreculture</Link></li>
                    <li><Link to={'/post/categories/Entertainment'}>Entertainment</Link></li>
                    <li><Link to={'/post/categories/Music'}>Music</Link></li>
                    <li><Link to={'/post/categories/Art'}>Art</Link></li>
                    <li><Link to={'/post/categories/Bussines'}>Bussines</Link></li>
                    <li><Link to={'/post/categories/Fashion'}>Fashion</Link></li>
                    <li><Link to={'/post/categories/Sports'}>Sports</Link></li>
                    <li><Link to={'/post/categories/Science'}>Science</Link></li>
                    <li><Link to={'/post/categories/Wheather'}>Wheather</Link></li>
                    <li><Link to={'/post/categories/Investment'}>Investment</Link></li>
                </ul>
                <div className='copyright'>
                    <h5>Copyright Lorem ipsum dolor sit amet.</h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer
