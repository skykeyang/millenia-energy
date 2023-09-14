import * as React from "react"
import Navbar from "../../components/home/navbar"
import Footer from "../../components/home/footer"
import "./../../styles/styles.css"
import "./../../styles/investors.css"
import "../../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/vendor/boxicons/css/boxicons.min.css"

const FundingInitiativesPage = () => {
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <div className="funding-banner">
                <div className="container justify-content-center">
                    <div className="about-banner-box ">
                        <div className="col-5">
                            <h1 className="funding-banner-title">
                                INVEST WITH US
                            </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="177" height="8" viewBox="0 0 177 8" fill="none" className="funding-banner-title-line">
                            <path d="M4 4H172.899" stroke="white" stroke-width="7" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div className="col-7">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center investors-title">
                    Investors
                </div>
                <div className="row justify-content-center investors-content">
                    <div className="col investor-content-image">
                        <img src={require("../../styles/investors-image.jpg").default}></img>
                    </div>
                    <div className="col-xl investor-content-text">
                    <p>Renewable energy investments often present complexities that can introduce uncertainties for investors. 
                    Our approach involves streamlining the process by thoroughly evaluating projects and their developers based on factors such as scale, timeline, and risk. 
                    We exclusively present you with premium opportunities that have surpassed our rigorous risk assessment standards. 
                    Leverage our decades of experience and close the experience gap by investing in projects that we have meticulously vetted.
                    </p>
                    <div className="d-flex justify-content-center button-wrapper">
                        <a href="mailto:james.soh@millenia-energy.com"><button type="button" className="btn btn-primary investbutton rounded-pill">INVEST WITH US</button></a>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FundingInitiativesPage;