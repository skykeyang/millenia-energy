import * as React from "react"
import Navbar from "../components/home/navbar"
import Footer from "../components/home/footer"
import "./../styles/styles.css"
import "./../styles/portfolio.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"

const PortfolioPage = () => {
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <div className="banner">
            
            </div>
            <div className="container-flex">
                <div className="row justify-content-center portfolio-title">
                    PORTFOLIO
                </div>
                <div className="row justify-content-center gx-0">
                    <div className="col portfolio-placeholder-image">
                        <img src={require("../styles/portfolio-placeholder-image.jpg").default}></img>
                    </div>
                    <div className="col portfolio-content">
                        Get ready to meet our latest creations
                    </div>
                    <div className="col empty-right-col">
                        
                    </div>
                    
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default PortfolioPage;