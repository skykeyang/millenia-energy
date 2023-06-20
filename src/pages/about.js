import * as React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import "./../styles/styles.css"
// import "../assets/vendor/aos/aos.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <h1>This is the about Page</h1>
            <Footer />
        </div>
    )
}

export default AboutPage;