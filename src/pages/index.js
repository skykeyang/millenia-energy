import * as React from "react"
import Navbar from "../components/home/navbar"
import Footer from "../components/home/footer"
import HomeBanner from "../components/home/home_banner"
import Mission from "../components/home/mission"
// import Metrics from "../components/home/metrics"
import Metrics2 from "../components/home/metrics2"
import "./../styles/styles.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"
import OurExpertise from "../components/home/ourexpertise"
import { Link } from "gatsby"


const IndexPage = () => {
  return (
    <>
    <div className="container">
    <Navbar />
    </div>
    <div className="row main gx-0">
    <HomeBanner>
    <div className="container"> 
    
    <div className="title-wrapper container">
      <h1 className="maintitle">We are Millenia Energy</h1>
      <h2 className="subtitle">The Future Is Green</h2>
      <Link to="investors/investment_opportunities" className="button-wrapper"><button type="button" className="btn btn-primary morebutton rounded-pill"><b>Talk To Us</b></button></Link>
    </div>
    <Metrics2 />
  
    </div>
    </HomeBanner>
    </div>
    <OurExpertise />
    <Mission/>
    
    
    <Footer />

    
    </>
  )
}

export default IndexPage

export const Head = () => (
<>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<meta name='viewport' content='width=device-width, initial-scale=1.0'/>
<title>Millenia Energy</title>
</>
)
