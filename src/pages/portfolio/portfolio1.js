import * as React from "react"
import Navbar from "../../components/home/navbar"
import Footer from "../../components/home/footer"
import PortfolioBanner from "../../components/misc/portfolio-banner"
import "./../../styles/styles.css"
import "./../../styles/portfolio.css"
import "./../../styles/about.css"
import "./../../styles/media.css"
import "../../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/vendor/boxicons/css/boxicons.min.css"


const Portfolio1 = () => {
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <PortfolioBanner />
            <div className="container">
            <div className="project-content-wrapper">
            <h3 className="project-title">
                62 SENOKO ROAD
            </h3>
            <div className="project-main-image d-flex justify-content-center">
                <img src={require("../../images/portfolio/portfoliomainlarge1.png").default} alt="article1"/>
            </div>
            <div className="project-description">
            <p>
            62 Senoko Road is located in the North region of Singapore. <br></br>
            It is a 250KWp solar PV system that is installed on the rooftop of an industrial building,
            capable of generating 320,000KWh of clean energy annually.
            </p>
            </div>
            <table className="project-secondary-images justify-content-center">
                <tr>
                    <td>
                    <img src={require("../../images/portfolio/PF1IMG1.jpg").default} alt="image" className="project-secondary-image"/>
                    </td>
                    <td>
                    <img src={require("../../images/portfolio/PF1IMG2.jpg").default} alt="image" className="project-secondary-image"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={require("../../images/portfolio/PF1IMG3.jpg").default} alt="image" className="project-secondary-image"/>
                    </td>
                    <td>
                        <img src={require("../../images/portfolio/PF1IMG4.jpg").default} alt="image" className="project-secondary-image"/>
                    </td>
                </tr>
            </table>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio1;