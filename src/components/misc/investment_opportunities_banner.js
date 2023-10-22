import React from 'react'
import "./../../styles/styles.css"
import "./../../styles/investors.css"
import "../../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/vendor/boxicons/css/boxicons.min.css"

export default function InvestmentOpportunitiesBanner() {

    return (
    <div className="funding-banner">
                <div className="container justify-content-center">
                    <div className="about-banner-box ">
                        <div className="col-5">
                            <h1 className="investment-banner-title">
                                BACKING YOUR CREATIVE VENTURES
                            </h1>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="177" height="8" viewBox="0 0 177 8" fill="none" className="funding-banner-title-line">
                            <path d="M4 4H172.899" stroke="white" stroke-width="7" stroke-linecap="round"/>
                            </svg> */}
                        </div>
                        <div className="col-7">
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}