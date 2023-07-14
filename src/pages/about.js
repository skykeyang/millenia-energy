import * as React from "react"
import Navbar from "../components/home/navbar"
import Footer from "../components/home/footer"
import "../styles/about.css"
// import "../assets/vendor/aos/aos.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"

const AboutPage = () => {
    return (
        <div className="main">
            <div className="banner">
            <div className="container">
                <Navbar />
            </div>
            </div>
            <div className="container">
            <div className="row justify-content-center">
                <h2 className="about-title">WHO ARE WE?</h2>
            </div>
            <div className="row justify-content-center">
                <h3 className="about-quote">"QUOTE"</h3>
            </div>
                <div className="row">
                    <div className="col-xl about-image"></div>
                    <div className="col align-self-center">
                        <div className="about-text">
                            "At every stage of the process, including acquisition, development, 
                            construction, financing, operations, and asset management, we are dedicated to mitigating climate change and creating a positive environmental, 
                            social, and governance (ESG) impact that will pave the way for a brighter future."
                        </div>
                    
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage;