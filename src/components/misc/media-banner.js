import * as React from "react"
import "../../styles/media.css"


export default function MediaBanner() {


return (
<div className="media-banner">
                <div className="container justify-content-center">
                    <div className="about-banner-box ">
                        <div className="col-12 col-sm-5">
                            <h1 className="about-banner-title">
                                MEDIA
                            </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="177" height="8" viewBox="0 0 177 8" fill="none" className="about-banner-title-line">
                            <path d="M4 4H172.899" stroke="white" stroke-width="7" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div className="col-sm-12 col-7">
                            <p className="media-banner-quote">
                            Discover the latest news, updates, and stories relating to the world of solar energy and 
                            how it is the key towards a sustainable future. Follow our media updates to witness the 
                            remarkable stories of sustainability and growth. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
);
}