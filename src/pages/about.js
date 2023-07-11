import * as React from "react"
import { Link } from "gatsby"
import Navbar from "../components/home/navbar"
import Footer from "../components/home/footer"
import "../styles/about.css"
// import "../assets/vendor/aos/aos.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"

const AboutPage = () => {
    return (
        <div>
            <div className="banner row">
            <Navbar />
            </div>
            <div className="d-flex justify-content-center">
                <h2 className="about-title">WHO ARE WE?</h2>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl about-image">
                        <img src={require("../images/nature-solar-panels.jpg").default} />
                    </div>
                    <div className="col about-text align-self-center">
                    <h3>“Quote”</h3><br/>
                    "At every stage of the process, including acquisition, development, 
                    construction, financing, operations, and asset management, we are dedicated to mitigating climate change and creating a positive environmental, 
                    social, and governance (ESG) impact that will pave the way for a brighter future."
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage;