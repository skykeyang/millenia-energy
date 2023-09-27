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

const FundingInitiativesPage = () => {
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
                <FundingBanner />
            
            <div className="container-fluid contact-form-wrapper gx-0">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-6">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="contact-form-title">
                                        Contact Us
                                    </h2>
                                </div>
                                <div className="col-12">
                                    <p className="contact-form-text">
                                    Your investment in our projects and initiatives can make a significant impact. 
                                    We offer a range of funding opportunities tailored to suit various interests and level of involvement. <br></br><br></br>
                                    
                                    Reach out to us using the contact form to inquire about funding opportunities, request more information 
                                    or set up a meeting with our team. <br></br><br></br>
                                    
                                    We will be delighted to assist you in finding the perfect way to support our solar energy initiatives. <br></br><br></br>
                                    
                                    Thank you for considering Millenia Energy as a potential partner in advancing the clean energy revolution. 
                                    Together, we can power a brighter, more sustainable world. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-6">
                            <form className="contact-form">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label for="name" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter your name"></input>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label for="email" className="form-label">Company</label>
                                            <input type="email" className="form-control" id="email" placeholder="Enter your email"></input>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label for="phone" className="form-label">Phone</label>
                                            <input type="text" className="form-control" id="phone" placeholder="Enter your phone number"></input>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label for="message" className="form-label">Message</label>
                                            <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-primary rounded-pill contact-form-button">SUBMIT</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                </div>

            </div>
            </div>
            <Footer />
        </div>
    )
}

export default FundingInitiativesPage;