import * as React from "react"
import Navbar from "../../components/home/navbar"
import Footer from "../../components/home/footer"
import InvestmentOpportunitiesBanner from "../../components/misc/investment_opportunities_banner"
import { navigate } from "gatsby"
import axios from "axios"
import "./../../styles/styles.css"
import "./../../styles/investors.css"
import "../../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/vendor/boxicons/css/boxicons.min.css"

const FundingInitiativesPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        axios.post("https://og188mg535.execute-api.ap-southeast-1.amazonaws.com/default/SES_Send_Email", {body: formJson})
        

        .then((response) => {
            console.log(response);
            if (response.data.status === 'success') {
                alert("Message Sent.");
                
                
                // this.context.router.history.push('/success')
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
            navigate("/investors/success")
        })
    }

    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            < InvestmentOpportunitiesBanner />
            <div className="container about-text-container">
            <div className="row">
                <h2 className="about-title">Empowering Your Investments: Partnering With Millenia Energy</h2>
            </div>
            <div className="row justify-content-center">
                <p className="about-quote" id="about-quote"> 
                Millenia Energy is committed to driving positive change through renewable energy solutions, 
                powering a sustainable future for all. Our unique approach sets us apart as trailblazers in 
                the solar energy industry. We acquire cutting-edge projects poised to transform the energy 
                landscape and take the lead in harnessing the potential of these projects. </p>
            </div>
            </div>
            <div className="container-fluid contact-form-wrapper gx-0">
                <div className="container">
                    <div className="row">
                        <div className="form-wrapper">
                            <form className="contact-form" onSubmit={ handleSubmit }>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-10 share-projects-header-box-wrapper">
                                        <div className="share-projects-header-box">
                                            <h2 className="share-projects-header"><b>Share Your Projects With Us</b></h2>
                                        </div>
                                    </div>

                                    <div className="col-10">
                                        <h4 className="share-projects-subheader">Together, let's redefine energy.</h4>
                                    </div>

                                    <div className="col-10">
                                        <p className="share-projects-text-1">
                                        At Millenia Energy, we aim to collaborate with esteemed developer/installer partners to acquire projects. 
                                        Through our invested capital, we strive to unlock the full potential of your project. <br></br><br></br>

                                        Our acquisition would be subjected to satisfying the pre-requisites to our contract. <br></br><br></br>

                                        
                                        </p>
                                        <p className="share-projects-text-2"><b>Join us in harnessing the power of clean energy projects and maximizing your returns with Millenia Energy.<br></br></b></p>
                                    </div>
                                    <div className="col-8">
                                        <div className="mb-3">
                                            <label for="name" className="form-label" >Name</label>
                                            <input type="text" className="form-control" name="senderName" placeholder="Enter your name" required ></input>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="mb-3">
                                            <label for="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" name="senderEmail" placeholder="Enter your email" required ></input>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="mb-3">
                                            <label for="company" className="form-label" >Company</label>
                                            <input type="text" className="form-control" name="senderCompany" placeholder="Enter your company name" required ></input>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="mb-3">
                                            <label for="message" className="form-label">Tell Us About Your Project</label>
                                            <textarea className="form-control" name="message" rows="6" placeholder="Enter your message" required ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="contact-button-wrapper">
                                            <button type="submit" className="btn btn-primary rounded-pill contact-form-button-2">Share Your Project</button>
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