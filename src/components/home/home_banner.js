import React, { useState, useEffect, useRef } from 'react';
import "./css/home_banner.css";
import "../../styles/styles.css";


export default function HomeBanner({children}) {
    const videoRef = useRef(null);

    const [isIOS, setUserAgent] = useState(false);

   const detectUserAgent = () => { 
   if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
      setUserAgent(true);
   }
   console.log(isIOS);
   }

   useEffect(() => {
      detectUserAgent();
   }, []);

    const [IsMobile, setIsMobile] = useState(false);
    const toggleMobile = () => {
        setIsMobile(!IsMobile);
    }
    useEffect(() => {
        videoRef.current.playbackRate = 0.5;
    }, []);

    return isIOS ? (
    <div className='banner-wrapper gx-0'>
        {children}
        <img className='homebanner' src="https://millenia-energy-asset.s3.ap-southeast-1.amazonaws.com/solarbackgroundmoving.mp4" alt="Banner Image"/>
        
    </div>
    ) : (
        <div className='banner-wrapper gx-0'>
        {children}
        <video ref={videoRef} autoPlay loop muted className='homebanner' preload>
            <source playsInline muted src="https://millenia-energy-asset.s3.ap-southeast-1.amazonaws.com/solarbackgroundmoving.mp4" type='video/mp4' />
            {/* <source  muted playsInline src={require("../../styles/solarbackgroundmoving.mp4").default} type='video/mp4' /> */}
        </video>
        </div>
    )
}