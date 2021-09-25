import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import './Header.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import OurArticles from './pages/OurArticles'

export default function Header() {
    return (
            <header className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Navbar scroll</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us" >About Us</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link className="nav-link" to="/our-articles" >Our Articles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" >Contact</Link>
                            </li>
                        </ul>
                        
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                    </nav>
            </header>
    )
}
