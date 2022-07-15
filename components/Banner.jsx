import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className='carousel-slider'>
            <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000} >
                <div>
                    <img loading='lazy' src="https://hishabee.fra1.digitaloceanspaces.com/https://hishabee.fra1.digitaloceanspaces.com/uploads/sliders/sample/2.png" />
                </div>
                <div>
                    <img loading='lazy' src="https://hishabee.fra1.digitaloceanspaces.com/https://hishabee.fra1.digitaloceanspaces.com/uploads/sliders/sample/6.png" />
                </div>
                <div>
                    <img loading='lazy' src="https://hishabee.fra1.digitaloceanspaces.com/https://hishabee.fra1.digitaloceanspaces.com/uploads/sliders/sample/5.png" />
                </div>
                <div>
                    <img loading='lazy' src="https://hishabee.fra1.digitaloceanspaces.com/https://hishabee.fra1.digitaloceanspaces.com/uploads/sliders/sample/4.png" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;