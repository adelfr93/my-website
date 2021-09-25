import React from 'react'
import FormContact from '../FormContact'
import './Contact.css'

export default function Contact() {
    return (
        <>
            <div className="container">
                <h1>Contact</h1>
                <div className="row">
                    <div className="col-md-12">
                        <FormContact />
                    </div>
                </div>
            </div>
        </>
    )
}
