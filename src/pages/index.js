import * as React from "react"
// import { Link } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import HomeBanner from "../components/home_banner"
import Mission from "../components/mission"
import Metrics from "../components/metrics"
import "./../styles/styles.css"
// import "../assets/vendor/aos/aos.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"
// import "../assets/vendor/glightbox/css/glightbox.min.css"
// import "../assets/vendor/swiper/swiper-bundle.min.css"

const IndexPage = () => {
  return (
    <div>
    <div className="row">
    <HomeBanner>
    <Navbar /> 
    <div className=" col-lg-4">
      <h1 className="maintitle">We are Millenia Energy</h1>
      <h2 className="subtitle">The Future Is Green</h2>
      <button type="button" class="btn btn-primary morebutton rounded-pill" href='#mission'>Read More</button>
    </div>
    </HomeBanner>
    </div>
    <Mission />
    <Metrics />
    <div className="row">
    {/* <Footer /> */}
    </div>
    </div>
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
