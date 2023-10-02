import * as React from "react"
import axios from "axios"
import Navbar from "../../components/home/navbar"
import Footer from "../../components/home/footer"
import FundingBanner from "../../components/misc/funding_banner"
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
        })
    }
    

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
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label for="name" className="form-label" >Name</label>
                                            <input type="text" className="form-control" name="senderName" placeholder="Enter your name" required ></input>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label for="company" className="form-label" >Company</label>
                                            <input type="text" className="form-control" name="senderCompany" placeholder="Enter your company name" required ></input>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label for="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" name="senderEmail" placeholder="Enter your email" required ></input>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label for="message" className="form-label">Message</label>
                                            <textarea className="form-control" name="message" rows="6" placeholder="Enter your message" required ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div>
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