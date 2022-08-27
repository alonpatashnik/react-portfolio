import React, { useState } from 'react';
import '../style/Header.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const [currentPage, setCurrentPage] = useState('About');
    return (
    <>  <header id = "header">
            <h1>Alon Patashnik's Portfolio</h1>
            <nav>
                <ul class="nav" id="navBar">
                    <li class="nav-item">
                        <Link
                        onClick={() => setCurrentPage('About')}
                        class={currentPage === 'About' ? "nav-link active" : "nav-link"}
                        to="/"
                        >About Me
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link
                        onClick={() => setCurrentPage('Portfolio')}
                        class={currentPage === 'Portfolio' ? "nav-link active" : "nav-link"}
                        to="/portfolio"
                        >Portfolio
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link
                        onClick={() => setCurrentPage('Contact')}
                        class={currentPage === 'Contact' ? "nav-link active" : "nav-link"}
                        to="/contact"
                        >Contact Me
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link
                        onClick={() => setCurrentPage('Resume')}
                        class={currentPage === 'Resume' ? "nav-link active" : "nav-link"}
                        to="/resume"
                        >Resume
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    </>
    );
  }
  
  export default Navbar;