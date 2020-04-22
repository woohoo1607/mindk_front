import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import watchAd from "../../img/img-for-ad/watch5-large-banner.jpg";
import iphoneAd from "../../img/img-for-ad/iphone11pro-large-banner.jpg";
import "./styles.css";

const refIphone = "/catalog?page=1&category=2&filters=5_6";
const refWatch = "/catalog?page=1&category=5";

const AdCarousel = ({history}) => {
    const clickAd = (url) => () => {
        history.push(url);
    };
    return (
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} >
            <div className="ad-div" onClick={clickAd(refIphone)}>
                <img src={iphoneAd} />
            </div>
            <div className="ad-div" onClick={clickAd(refWatch)}>
                <img src={watchAd} />
            </div>
        </Carousel>
    );
};

export default AdCarousel;
