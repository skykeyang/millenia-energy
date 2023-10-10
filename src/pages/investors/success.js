import * as React from "react"
import Navbar from "../../components/home/navbar"
import Footer from "../../components/home/footer"
import FundingBanner from "../../components/misc/funding_banner"
import { Link } from 'gatsby'
import "./../../styles/styles.css"
import "./../../styles/investors.css"
import "../../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/vendor/boxicons/css/boxicons.min.css"

const SuccessPage = () => {
    return (
        <>
    <div>
        <div className="container">
            <Navbar />
        </div>
            <FundingBanner />
        
        <div className="container-fluid contact-form-wrapper gx-0">
            <div className="container d-flex justify-content-center">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="contact-form-title">
                                    Thank you for your interest!
                                </h2>
                                <p className="success-form-text">
                                    We will be in touch with you shortly.
                                </p>
                            </div>
                            <div className="container d-flex justify-content-center back-to-home">
                                
                                <Link to="/"><button type="button" className="btn btn-primary morebutton rounded-pill bth-button">Back To Home</button></Link>
                                
                    </div>
            </div>
        </div>
        <Footer />
    </div>
    </div>
    </>)
}

export default SuccessPage;