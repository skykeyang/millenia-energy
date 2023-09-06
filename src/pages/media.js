import * as React from "react"
import Navbar from "../components/home/navbar"
import Footer from "../components/home/footer"
import "./../styles/styles.css"
import "./../styles/media.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"

const MediaPage = () => {
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <div className="banner">
            
            </div>
            <div className="container-flex">
                <div className="row justify-content-center media-title">
                    MEDIA
                </div>
                <div className="row justify-content-center">
                    <div className="col empty-left-col">

                    </div>
                    <div className="col media-content">
                        All good things come to those who wait...
                    </div>
                    <div className="col media-placeholder-image">
                        <img src={require("../styles/media-placeholder-image.jpg").default}></img>
                    </div>
                    
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default MediaPage;