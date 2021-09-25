import React from 'react'
import SectionArticles from '../SectionArticles'
import Slider from '../Slider'
import './Home.css'

export default function Home() {
    return (
        <>
            <Slider />
            <SectionArticles limit="6" />
        </>
    )
}
