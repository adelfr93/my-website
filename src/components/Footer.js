import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'   

export default function Footer() {
    return (
        <footer className="py-5">
            <div className="container-fluid">
            <div className="row">
            <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
                <li className="nav-item mb-2"><Link to="/about-us" className="nav-link p-0 text-muted">About Us</Link></li>
                <li className="nav-item mb-2"><Link to="/our-articles" className="nav-link p-0 text-muted">Our Articles</Link></li>
                <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-muted">Contact</Link></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
                </ul>
            </div>

            <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
                </ul>
            </div>

            <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
                </ul>
            </div>

            <div className="col-4 offset-1">
                <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                    <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
                </form>
            </div>
            </div>

            <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2021 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="link-dark" href="/"><i className="fab fa-facebook"></i></a></li>
                <li className="ms-3"><a className="link-dark" href="/"><i className="fab fa-instagram"></i></a></li>
                <li className="ms-3"><a className="link-dark" href="/"><i className="fab fa-linkedin"></i></a></li>
            </ul>
            </div>
            </div>
        </footer>
    )
}
