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


const Portfolio4 = () => {
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <PortfolioBanner />
            <div className="container">
            <div className="project-content-wrapper">
            <h3 className="project-title">
                32 SENOKO ROAD
            </h3>
            <div className="project-main-image d-flex justify-content-center">
                <img src={require("../../images/portfolio/PF4IMG1.jpg").default} alt="article3"/>
            </div>
            <div className="project-description">
            {/* <p>
            Nestled in the industrial landscape of Tuas South Street 1, this solar panel site boasts a substantial capacity of 220 kWp. <br></br><br/>
            This installation generates an impressive 264,000 kWh of clean energy annually.
            </p> */}
            </div>
            <table className="project-secondary-images justify-content-center">
                <tr>
                    <td>
                    <img src={require("../../images/portfolio/PF4IMG2.jpg").default} alt="image" className="project-secondary-image"/>
                    </td>
                    <td>
                    <img src={require("../../images/portfolio/PF4IMG3.jpg").default} alt="image" className="project-secondary-image"/>
                    </td>
                </tr>
            </table>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio4;