import * as React from "react"
import Navbar from "../components/home/navbar"
import Footer from "../components/home/footer"
import "./../styles/styles.css"
import "./../styles/portfolio.css"
import "./../styles/about.css"
import "./../styles/media.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"
import { Link } from "gatsby"
import PortfolioBanner from "../components/misc/portfolio-banner"

const PortfolioPage = () => {
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <PortfolioBanner />
            <div className="container about-text-container">
            <div className="row">
                <h2 className="about-title">Our Projects</h2>
            </div>
            <div className="row justify-content-center">
            <p className="portfolio-subtitle"> 
                Empowering Green Energy Initiatives</p>
                <p className="about-quote" id="about-quote"> 
                Millenia Energy's projects stand as beacons of innovation and sustainability. 
                We are committed to empowering clean energy initiatives that not only reduce carbon footprints but also maximize efficiency and financial viability. <br/><br/>
                Together, we can shape a brighter and more sustainable tomorrow.</p>
            </div>
            </div>
            <div className="container">

                {/* ROW OF ITEMS */}
                <div className="row justify-content-center">
                    {/* ITEM 1 */}
                    <div className="col-sm-4" align="center">
                    <Link to="portfolio1"className="article-link" target="_blank" rel="noreferrer">
                        <div className="article-wrapper">
                            <div className="row article-image">
                                <img src={require("../images/portfolio/portfoliomain1.png").default} alt="article1" className="article-image"/>
                                {/* <div className="image-overlay">
                                    {articles[0].length}
                                </div> */}
                            </div>
                            <Link to="portfolio1"className="article-link" target="_blank" rel="noreferrer">
                            <div className="row article-title">
                                62 Senoko Road
                            </div>
                            </Link>
                        </div>
                    </Link>
                    </div>
                    {/* ITEM 2 */}
                    <div className="col-sm-4" align="center">
                    <Link to="portfolio2" className="article-link" target="_blank" rel="noreferrer">
                        <div className="article-wrapper">
                            <div className="row article-image">
                                <img src={require("../images/portfolio/chinbee.png").default} alt="article1" className="article-image"/>
                                
                            </div>
                            <div to="#"className="article-link" target="_blank" rel="noreferrer">
                            <div className="row article-title">
                                21 Chin Bee Ave
                            </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    {/* ITEM 3 */}
                    <div className="col-sm-4" align="center">
                        <Link to="portfolio3"className="article-link" target="_blank" rel="noreferrer">
                            <div className="article-wrapper">
                                <div className="row article-image">
                                    <img src={require("../images/portfolio/TuasSouthStreet.png").default} alt="article1" className="article-image"/>
                                </div>
                                <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                <div className="row article-title">
                                    7 & 9 Tuas South Street 1
                                </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* ROW OF ITEMS */}
                <div className="row justify-content-center">
                    {/* ITEM 4 */}
                    <div className="col-sm-4" align="center">
                        <Link to="portfolio4"className="article-link" target="_blank" rel="noreferrer">
                            <div className="article-wrapper">
                                <div className="row article-image">
                                    <img src={require("../images/portfolio/PF4IMG1.jpg").default} alt="article1" className="article-image"/>
                                </div>
                                <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                <div className="row article-title">
                                    32 Senoko Road
                                </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* ITEM 5 */}
                    <div className="col-sm-4" align="center">
                    <Link to="portfolio5"className="article-link" target="_blank" rel="noreferrer">
                        <div className="article-wrapper">
                            <div className="row article-image">
                                <img src={require("../images/portfolio/PF5IMG1.jpg").default} alt="article1" className="article-image"/>
                                
                            </div>
                            <div to="#"className="article-link" target="_blank" rel="noreferrer">
                            <div className="row article-title">
                                34 Joo Koon Circle
                            </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    
                    {/* ITEM 6 */}
                    <div className="col-sm-4" align="center">
                    <div to="#"className="article-link" target="_blank" rel="noreferrer">
                        <div className="article-wrapper">
                            <div className="row article-image">
                                <img src={require("../images/portfolio/3TuasAvenue10.png").default} alt="article1" className="article-image"/>
                                <div className="image-overlay">
                                        Work In Progress
                                </div>
                            </div>
                            <div to="#"className="article-link" target="_blank" rel="noreferrer">
                            <div className="row article-title">
                                3 Tuas Avenue 10
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* ROW OF ITEMS */}
                <div className="row justify-content-center">
                    {/* ITEM 7 */}
                    <div className="col-sm-4" align="center">
                        <div to="#"className="article-link" target="_blank" rel="noreferrer">
                            <div className="article-wrapper">
                                <div className="row article-image">
                                    <img src={require("../images/portfolio/30KianTeckDr.png").default} alt="article1" className="article-image"/>
                                    <div className="image-overlay">
                                        Work In Progress
                                    </div>
                                </div>
                                <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                <div className="row article-title">
                                    30 Kian Teck Drive
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ITEM 8 */}
                    <div className="col-sm-4" align="center">
                        <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                <div className="article-wrapper">
                                    <div className="row article-image">
                                        <img src={require("../images/portfolio/5TuasSouthStreet.png").default} alt="article1" className="article-image"/>
                                        <div className="image-overlay">
                                            Work In Progress
                                        </div>
                                    </div>
                                    <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                    <div className="row article-title">
                                        5 Tuas South Street 1
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    {/* ITEM 9 */}
                    <div className="col-sm-4" align="center">
                        <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                    <div className="article-wrapper">
                                        <div className="row article-image">
                                            <img src={require("../images/portfolio/66SenokoRoad.png").default} alt="article1" className="article-image"/>
                                            <div className="image-overlay">
                                                Work In Progress
                                            </div>
                                        </div>
                                        <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                        <div className="row article-title">
                                            66 Senoko Road
                                        </div>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
                {/* ROW OF ITEMS */}
                <div className="row justify-content-center">
                    {/* ITEM 10 */}
                    <div className="col-sm-4" align="center">
                        <div to="#"className="article-link" target="_blank" rel="noreferrer">
                            <div className="article-wrapper">
                                <div className="row article-image">
                                    <img src={require("../images/portfolio/66ASenokoRoad.png").default} alt="article1" className="article-image"/>
                                    <div className="image-overlay">
                                        Work In Progress
                                    </div>
                                </div>
                                <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                <div className="row article-title">
                                    66A Senoko Road
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ITEM 11 */}
                    <div className="col-sm-4" align="center">
                        <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                <div className="article-wrapper">
                                    <div className="row article-image">
                                        <img src={require("../images/portfolio/62SungeiKadutLoop.png").default} alt="article1" className="article-image"/>
                                        <div className="image-overlay">
                                            Work In Progress
                                        </div>
                                    </div>
                                    <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                    <div className="row article-title">
                                        62 Sungei Kadut Loop
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    {/* ITEM 12 */}
                    <div className="col-sm-4" align="center">
                        <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                    <div className="article-wrapper">
                                        <div className="row article-image">
                                            <img src={require("../images/portfolio/19WoodlandsIndustrialParkE1.png").default} alt="article1" className="article-image"/>
                                            <div className="image-overlay">
                                                Work In Progress
                                            </div>
                                        </div>
                                        <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                        <div className="row article-title">
                                            19 Woodlands Industrial Park E1
                                        </div>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
                {/* ROW OF ITEMS */}
                <div className="row justify-content-center">
                    {/* ITEM 13 */}
                    <div className="col-sm-4" align="center">
                        <div to="#"className="article-link" target="_blank" rel="noreferrer">
                            <div className="article-wrapper">
                                <div className="row article-image">
                                    <img src={require("../images/portfolio/21WoodlandsIndustrialParkE1.png").default} alt="article1" className="article-image"/>
                                    <div className="image-overlay">
                                        Work In Progress
                                    </div>
                                </div>
                                <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                <div className="row article-title">
                                    21 Woodlands Industrial Park E1
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ITEM 14 */}
                    <div className="col-sm-4" align="center">
                        <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                <div className="article-wrapper">
                                    <div className="row article-image">
                                        <img src={require("../images/portfolio/No1WoodlandsIndustrialParkE1.png").default} alt="article1" className="article-image"/>
                                        <div className="image-overlay">
                                            Work In Progress
                                        </div>
                                    </div>
                                    <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                    <div className="row article-title">
                                        No.1 Woodlands Industrial Park E1
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    {/* ITEM 15 */}
                    <div className="col-sm-4" align="center">
                        <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                    <div className="article-wrapper">
                                        <div className="row article-image">
                                            <img src={require("../images/portfolio/No3WoodlandsIndustrialParkE1.png").default} alt="article1" className="article-image"/>
                                            <div className="image-overlay">
                                                Work In Progress
                                            </div>
                                        </div>
                                        <div to="#"className="article-link" target="_blank" rel="noreferrer">
                                        <div className="row article-title">
                                            No.3 Woodlands Industrial Park E1
                                        </div>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
                </div>
            <Footer />
        </div>
    )
}

export default PortfolioPage;