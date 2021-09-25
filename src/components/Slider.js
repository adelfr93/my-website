import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'

export default class Slider extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="images/img-1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="images/img-2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="images/img-3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}