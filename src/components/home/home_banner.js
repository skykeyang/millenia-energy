import React, { useEffect, useRef } from 'react';
import Preloader from "../../images/solarbackgroundmoving.mp4";
import "./css/home_banner.css";
import "../../styles/styles.css";

// export default function HomeBanner({children}) {
//     return (
//         <div className='banner-wrapper gx-0'>
//             {children}
//             <img className='homebanner' src={require("../../images/solarbackgroundcropped.jpg").default} alt='Logo'/>
//         </div>
//     )
// }

export default function HomeBanner({children}) {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = 0.5;
    }, []);

    return (
    <div className='banner-wrapper gx-0'>
        {children}
        <video ref={videoRef} autoPlay loop muted  className='homebanner'>
            <source src={Preloader} type='video/mp4' />
        </video>
        
    </div>
    )
}

// export default HomeBanner