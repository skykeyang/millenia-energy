import * as React from "react"
import "../../styles/portfolio.css"
import "../../styles/media.css"


export default function PortfolioBanner() {


return (
<div className="portfolio-banner">
                <div className="container justify-content-center">
                    <div className="about-banner-box ">
                        <div className="col-5">
                            <h1 className="about-banner-title">
                                PORTFOLIO
                            </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="177" height="8" viewBox="0 0 177 8" fill="none" className="about-banner-title-line">
                            <path d="M4 4H172.899" stroke="white" stroke-width="7" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
);
}