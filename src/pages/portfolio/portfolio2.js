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


const Portfolio2 = () => {
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <PortfolioBanner />
            <div className="container">
            <div className="project-content-wrapper">
            <h3 className="project-title">
                21 CHIN BEE AVENUE
            </h3>
            <div className="project-main-image d-flex justify-content-center">
                <img src={require("../../images/portfolio/PF2IMG3.png").default} alt="article2"/>
            </div>
            <div className="project-description">
            <p>
            Located in the industrial precinct of Chin Bee Avenue in western Singapore, this solar panel site features a robust 105 kWp capacity setup. <br></br><br/>
            Positioned atop an industrial building, it annually generates an impressive 126,000 kWh of renewable energy.
            </p>
            </div>
            <table className="project-secondary-images justify-content-center">
                <tr>
                    <td>
                    <img src={require("../../images/portfolio/PF2IMG2.png").default} alt="image" className="project-secondary-image"/>
                    </td>
                    <td>
                    <img src={require("../../images/portfolio/PF2IMG4.png").default} alt="image" className="project-secondary-image"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={require("../../images/portfolio/PF2IMG5.png").default} alt="image" className="project-secondary-image"/>
                    </td>
                    <td>
                        <img src={require("../../images/portfolio/PF2IMG6.png").default} alt="image" className="project-secondary-image"/>
                    </td>
                </tr>
            </table>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio2;