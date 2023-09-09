import * as React from "react"
import { useState } from 'react';
import { Lightbox } from "react-modal-image"
import Navbar from "../components/home/navbar"
import Footer from "../components/home/footer"
import "../styles/about.css"
// import "../assets/vendor/aos/aos.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"


const AboutPage = () => {
    const [isLightboxVisible, setLightboxVisible] = useState('none')
    const openLightbox = () => {
        setLightboxVisible('visible');
      };
    return (
        <div>
        <div className="container">
                <Navbar />
            </div>
            <div className="banner">
                <div className="container justify-content-center">
                    <div className="about-banner-box ">
                        <div className="col-5">
                            <h1 className="about-banner-title">
                                ABOUT US
                            </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="177" height="8" viewBox="0 0 177 8" fill="none" className="about-banner-title-line">
                            <path d="M4 4H172.899" stroke="white" stroke-width="7" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div className="col-7">
                            <p className="about-banner-quote">
                            We are dedicated to mitigating climate change and creating a positive environmental, social and governance 
                            (ESG) impact, paving the way for a brighter future
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container about-text-container">
            <div className="row">
                <h2 className="about-title">Empowering Sustainable Futures</h2>
            </div>
            <div className="row justify-content-center">
                <p className="about-quote" id="about-quote"> 
                Millenia Energy is a privately-owned solar development fund based in Singapore. 
                We actively engage in solar project development, renewable energy production, 
                and green financing. Our commitment to sustainability extends to providing consulting 
                services for carbon credits and renewable energy certificates. With a vision for a greener world, 
                we are passionate about empowering sustainable futures through innovative and impactful solutions.</p>
            </div>
            </div>

                <div className="container-fluid about-squares-container">
                <div className="row values-title-wrapper">
                <div className="col values-title">
                    Our Values
                </div>
                
                <div className="row">
                <div className="col values-subtitle">
                    Guiding Principles for Excellence
                </div>
                </div>
                </div>
                <div className="row squares-wrapper">
                    <div className="col d-flex justify-content-center">
                        <div className="about-square">

                            <div className="no-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <g clip-path="url(#clip0_72_38)">
                                <path d="M1.875 15C1.875 18.481 3.25781 21.8194 5.71922 24.2808C8.18064 26.7422 11.519 28.125 15 28.125C18.481 28.125 21.8194 26.7422 24.2808 24.2808C26.7422 21.8194 28.125 18.481 28.125 15C28.125 11.519 26.7422 8.18064 24.2808 5.71922C21.8194 3.25781 18.481 1.875 15 1.875C11.519 1.875 8.18064 3.25781 5.71922 5.71922C3.25781 8.18064 1.875 11.519 1.875 15ZM30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15ZM17.4056 7.50375V22.5H14.9456V10.0087H14.8238L11.385 12.48V10.0969L14.9456 7.50375H17.4056Z" fill="#3A4A01"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_72_38">
                                <rect width="30" height="30" fill="white"/>
                                </clipPath>
                            </defs>
                            </svg>
                            <div className="about-square-title">
                                Integrity
                            </div>
                            </div>
                            
                            <div className="row about-square-text justify-content-center gx-0">
                                <span className="col">
                                Millenia Energy upholds the highest standards of trust, honesty, and sincerity in 
                                all our endeavours. We believe that transparency and integrity is key to fostering 
                                lasting relationships with mutual respect and ethical practices.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col d-flex justify-content-center">
                        <div className="about-square">

                        <div className="no-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clip-path="url(#clip0_72_41)">
                            <path d="M1.875 15C1.875 18.481 3.25781 21.8194 5.71922 24.2808C8.18064 26.7422 11.519 28.125 15 28.125C18.481 28.125 21.8194 26.7422 24.2808 24.2808C26.7422 21.8194 28.125 18.481 28.125 15C28.125 11.519 26.7422 8.18064 24.2808 5.71922C21.8194 3.25781 18.481 1.875 15 1.875C11.519 1.875 8.18064 3.25781 5.71922 5.71922C3.25781 8.18064 1.875 11.519 1.875 15ZM30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15ZM12.4613 11.7V11.8313H10.0781V11.7112C10.0781 9.43687 11.7262 7.2075 15.0225 7.2075C17.9888 7.2075 19.9219 8.98687 19.9219 11.3606C19.9219 13.2394 18.7969 14.4863 17.5088 15.9169L17.3287 16.1175L13.6275 20.28V20.4244H20.1862V22.5H10.1663V20.94L15.735 14.7656C16.5487 13.875 17.4281 12.8756 17.4281 11.5688C17.4281 10.1737 16.3837 9.25125 14.9662 9.25125C13.3856 9.25125 12.4613 10.4044 12.4613 11.7Z" fill="#3A4A01"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_72_41">
                            <rect width="30" height="30" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                            <div className="about-square-title">
                                Safety
                            </div>
                            </div>

                            <div className="row about-square-text justify-content-center gx-0">
                                <span className="col">
                                Safety is of utmost importance to us. We are committed to maintaining a safe work environment, 
                                implementing stringent safety measures, and adhering to industry best practices to ensure that 
                                everyone involved in our projects feels secure and protected.
                                </span>
                            </div>
                            </div>
                        </div>
                    

                    <div className="col d-flex justify-content-center">
                        <div className="about-square">

                        <div className="no-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clip-path="url(#clip0_72_44)">
                            <path d="M14.8463 15.7762H13.1981V13.7662H14.7694C16.2319 13.7662 17.2969 12.7875 17.2856 11.4469C17.2856 10.1175 16.23 9.20625 14.7581 9.20625C13.2769 9.20625 12.2981 10.14 12.2306 11.1844H9.89065C9.95815 9.0525 11.6719 7.21875 14.8125 7.2075C17.8013 7.185 19.7025 8.86687 19.7569 11.0737C19.8 13.2056 18.0975 14.4037 16.9781 14.5894V14.7206C18.2963 14.8519 20.1844 15.9206 20.2294 18.315C20.2744 21.0506 17.835 22.8075 14.7356 22.8075C11.5388 22.8075 9.66002 20.9944 9.5719 18.7875H11.8688C11.9794 19.9069 13.1438 20.775 14.7581 20.7862C16.5825 20.7975 17.7581 19.7306 17.7356 18.2475C17.7244 16.7869 16.5713 15.7762 14.8463 15.7762Z" fill="#3A4A01"/>
                            <path d="M30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15ZM1.875 15C1.875 18.481 3.25781 21.8194 5.71922 24.2808C8.18064 26.7422 11.519 28.125 15 28.125C18.481 28.125 21.8194 26.7422 24.2808 24.2808C26.7422 21.8194 28.125 18.481 28.125 15C28.125 11.519 26.7422 8.18064 24.2808 5.71922C21.8194 3.25781 18.481 1.875 15 1.875C11.519 1.875 8.18064 3.25781 5.71922 5.71922C3.25781 8.18064 1.875 11.519 1.875 15Z" fill="#3A4A01"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_72_44">
                            <rect width="30" height="30" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                            <div className="about-square-title">
                                Collaboration
                            </div>
                            </div>
                            
                            <div className="row about-square-text justify-content-center gx-0">
                                <span className="col">
                                We touch on the power of collaboration to seek partnerships with trusted companies. 
                                Together, we shall unlock the potential for innovative solutions and sustainable growth, 
                                forging a united front in creating a greener and more resilient future for all.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-banner-2">
                    <div className="container justify-content-center">
                        <div className="about-banner2-box">
                            <div className="about-banner2-title col-4">
                                Area of Excellence
                            </div>
                            <div className="about-banner2-content col-8">

                                <div className="areas-of-excellence-image"></div>
                            </div>

                        </div>
                    </div>
            </div>

            <Lightbox large={require("../styles/team_structure.png").default} alt="LEARN MORE"  style={{display: `${isLightboxVisible}`}}/>

            <div className="our-team">
                <div className="container justify-content-center">
                    <div className="our-team-box container">
                        <div className="team-content-wrapper">
                        <div className="row our-team-title">
                            OUR TEAM
                        </div>
                        <div className="row our-team-content">
                        At Millenia Energy, our team boasts a wealth of experience in development, 
                        financial acumen, and a wide network of connections in the clean energy industry. 
                        With a shared passion for sustainable solutions, we are committed to driving positive change in the renewable energy landscape.
                        </div>
                        
                        <div className="row btn btn-primary rounded-pill" onClick={openLightbox}>
                        LEARN MORE
                        </div>
                        
                        
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage;