import React, { useEffect, useRef } from 'react';
import { Component } from 'react';
import { Link } from 'gatsby';
import Preloader from "../images/solarbackgroundmoving.mp4";
import "./css/home_banner.css";
import "../styles/styles.css";

// export default function HomeBanner({children}) {
//     return (
//         <div>
//             {children}
//             <img style={{width:'100%', height:'1080px', position:'relative'}} src={require("../images/solarbackground.jpg").default} alt='Logo'/>
//         </div>
//     )
// }

export default function HomeBanner({children}) {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = 0.8;
    }, []);

    return (
    <div style={{position:'relative'}}>
    {children}
        <video ref={videoRef} autoPlay loop muted width="1920px" height='auto' className='homebanner'>
            <source src={Preloader} type='video/mp4' />
        </video>
    </div>
    )
}

// export default HomeBanner