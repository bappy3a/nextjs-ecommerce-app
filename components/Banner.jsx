import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className='carousel-slider'>
            <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000} >
                <div>
                    <img loading='lazy' src="https://soliloquywp.com/wp-content/uploads/2013/05/adults-backlit-beach-950047-1200x450_c.jpg" />
                </div>
                <div>
                    <img loading='lazy' src="https://oceanwp.org/wp-content/uploads/2018/07/smartsliderfeatured.png" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;