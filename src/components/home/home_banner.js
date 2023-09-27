import React, { useEffect, useRef } from 'react';
import "./css/home_banner.css";
import "../../styles/styles.css";


export default function HomeBanner({children}) {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = 0.5;
    }, []);

    return (
    <div className='banner-wrapper gx-0'>
        {children}
        <video ref={videoRef} autoPlay loop muted  className='homebanner' preload>
            <source src="https://millenia-energy-asset.s3.ap-southeast-1.amazonaws.com/solarbackgroundmoving.mp4" type='video/mp4' />
        </video>
        
    </div>
    )
}