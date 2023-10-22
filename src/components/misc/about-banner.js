import * as React from "react"
import "../../styles/about.css"


export default function AboutBanner() {


return (
<div className="banner">
                <div className="container justify-content-center">
                    <div className="about-banner-box">
                        <div className="col-12 col-sm-5 about-banner-title-wrapper">
                            <h1 className="about-banner-title">
                                ABOUT US
                            </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="177" height="8" viewBox="0 0 177 8" fill="none" className="about-banner-title-line">
                            <path d="M4 4H172.899" stroke="white" stroke-width="7" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div className="col-12 col-sm-7 about-banner-quote-wrapper">
                            <p className="about-banner-quote">
                            We are dedicated to mitigating climate change and creating a positive environmental, social and governance 
                            (ESG) impact, paving the way for a brighter future
                            </p>
                        </div>
                    </div>
                </div>
            </div>
);
}