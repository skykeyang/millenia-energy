import * as React from "react"
import Navbar from "../../components/home/navbar"
import Footer from "../../components/home/footer"
import FundingBanner from "../../components/misc/funding_banner"
import { Link } from 'gatsby'
import "./../../styles/styles.css"
import "./../../styles/investors.css"
import "../../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/vendor/boxicons/css/boxicons.min.css"

const FundingInitiativesPage = () => {
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            < FundingBanner />
            <div className="container about-text-container">
            <div className="row">
                <h2 className="about-title">Unveiling Premium Renewable Opportunities</h2>
            </div>
            <div className="row justify-content-center">
                <p className="about-quote" id="about-quote"> 
                Navigating renewable energy investments can be challenging, with complexities 
                introducing uncertainties for investors. At Millenia Energy, we've streamlined the 
                process by conducting thorough evaluations of projects and their developers, 
                considering factors such as scale, timeline, and risk. As a result, 
                we exclusively present you with premium opportunities that have surpassed 
                our rigorous risk assessment standards. Leverage our decades of experience 
                and close the knowledge gap by investing in projects meticulously vetted by our expert team.</p>
            </div>
            </div>
            <div className="container funding-content-container">
            <div className="row squares-wrapper">
                    <div className="col d-flex justify-content-center">

                        <div className="funding-initiatives-square">

                        <div className="row about-icon justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M5 5C5 3.61719 3.88281 2.5 2.5 2.5C1.11719 2.5 0 3.61719 0 5V31.25C0 34.7031 2.79688 37.5 6.25 37.5H37.5C38.8828 37.5 40 36.3828 40 35C40 33.6172 38.8828 32.5 37.5 32.5H6.25C5.5625 32.5 5 31.9375 5 31.25V5ZM36.7656 11.7656C37.7422 10.7891 37.7422 9.20312 36.7656 8.22656C35.7891 7.25 34.2031 7.25 33.2266 8.22656L25 16.4609L20.5156 11.9766C19.5391 11 17.9531 11 16.9766 11.9766L8.22656 20.7266C7.25 21.7031 7.25 23.2891 8.22656 24.2656C9.20312 25.2422 10.7891 25.2422 11.7656 24.2656L18.75 17.2891L23.2344 21.7734C24.2109 22.75 25.7969 22.75 26.7734 21.7734L36.7734 11.7734L36.7656 11.7656Z" fill="#3A4A01"/>
                        </svg>
                            </div>
                            <div className="row about-square-title justify-content-center">
                                Quality And Expertise
                            </div>
                            <div className="row about-square-text justify-content-center gx-0">
                                <span className="col">
                                Through our vast expertise and strategic partnerships, we pinpoint well-balanced, 
                                high-quality investment opportunities that mitigate risks, ensuring favorable outcomes for our valued investors.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col d-flex justify-content-center">
                        <div className="funding-initiatives-square">

                        <div className="row about-icon justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <g clip-path="url(#clip0_101_460)">
                                <path d="M40.0001 24.4297C34.2605 35.1094 20.5105 28.6484 20.5105 28.6484C16.2917 35.0391 9.32299 39.1484 1.28132 39.1719C-0.395759 39.1719 -0.447842 37.2656 1.28132 37.2656C7.98966 37.2422 13.8334 33.9297 17.6563 28.6641C13.3751 29.9062 5.30216 30.8438 0.822991 22.2422C12.1772 18.7344 17.3959 23.1172 19.3959 25.7969C20.4272 23.8906 21.1667 21.8203 21.6459 19.5703C21.6459 19.5703 7.09383 21.2812 6.07299 11.9062C18.4792 8.16406 21.9688 17.8984 21.9688 17.8984C22.1355 16.5938 22.3126 13.7891 22.3126 13.7266C22.3126 13.7266 11.2397 7.96875 18.3438 0.820312C31.323 4.17969 24.7397 13.5078 24.7397 13.5078C24.7917 13.6328 24.7917 15.3672 24.7397 16.1172C24.7397 16.1172 29.448 9.16406 38.948 11.625C38.5105 22.0938 24.1667 19.9375 24.1667 19.9375C23.7084 22.0781 23.0001 24.1094 22.0834 25.9922C22.0834 25.9922 30.7292 18.8203 40.0001 24.4297Z" fill="#3A4A01"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_101_460">
                                <rect width="40" height="40" fill="white"/>
                                </clipPath>
                            </defs>
                            </svg>
                            </div>
                            <div className="row about-square-title justify-content-center">
                                Sustainability
                            </div>
                            <div className="row about-square-text justify-content-center gx-0">
                                <span className="col">
                                Our commitment to sustainability allows us to curate well-balanced investment 
                                opportunities that deliver favorable outcomes that align with your environmental, 
                                social and governance consideration.
                                </span>
                            </div>
                            </div>
                        </div>
                    

                    <div className="col d-flex justify-content-center">
                        <div className="funding-initiatives-square">

                        <div className="row about-icon justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                        <path d="M19.1391 5.67773L15.5461 10.1689C14.4703 10.5381 13.4719 11.2148 12.6281 12.1465L10.7578 14.2295C10.0406 15.0293 9.10547 15.4688 8.14219 15.4688H6.75V26.7188C8.18437 26.7715 9.54844 27.501 10.568 28.7754L13.0711 31.9043L13.5633 32.5195L15.4617 34.8926C15.8977 35.4375 16.6148 35.4375 17.0508 34.8926C17.1703 34.7432 17.2617 34.5674 17.3109 34.3828C17.5078 33.7061 17.9648 33.1963 18.5273 33.0381C19.0898 32.8799 19.6805 33.0908 20.0883 33.6094L20.8477 34.541C21.6633 35.5605 22.9852 35.5605 23.7937 34.541C24.1734 34.0664 24.3773 33.46 24.3984 32.8359C24.4266 32.0625 24.7922 31.377 25.3547 31.043C25.9172 30.709 26.5711 30.7793 27.0703 31.2275C27.7313 31.8164 28.6523 31.7373 29.243 30.999C29.9039 30.1729 29.9039 28.8369 29.243 28.0195L23.9133 21.3574L21.3961 24.2578C19.4766 26.4727 16.5305 26.5078 14.5758 24.3369C12.3469 21.8584 12.2977 17.5342 14.4633 14.9766L19.3922 9.1582C21.3187 6.89062 23.8641 5.625 26.5148 5.625C29.0531 5.625 31.507 6.79395 33.3984 8.89453L35.5148 11.25H38.25H41.0625H43.875C44.4938 11.25 45 11.8828 45 12.6563V30.9375C45 32.4932 43.9945 33.75 42.75 33.75H40.5C39.6703 33.75 38.9391 33.1875 38.5523 32.3438H32.5828C32.3438 32.9326 32.0273 33.4951 31.6336 33.9873C30.4312 35.4902 28.7648 36.0791 27.2039 35.7539C26.9508 36.3955 26.6062 36.9932 26.1773 37.5293C24.2578 39.9287 21.2555 40.166 19.118 38.2412C17.3531 40.0693 14.7234 39.9551 13.0711 37.8809L11.1797 35.5078L10.6875 34.8926L8.18437 31.7637C7.79766 31.2803 7.29141 30.999 6.75 30.9463C6.75 32.4932 5.7375 33.75 4.5 33.75H2.25C1.00547 33.75 0 32.4932 0 30.9375V12.6563C0 11.8828 0.50625 11.25 1.125 11.25H3.9375H6.75H8.14219C8.28281 11.25 8.41641 11.1885 8.51484 11.0742L10.3781 9C12.3398 6.8291 14.8641 5.625 17.4867 5.625H18.2109C18.5203 5.625 18.8367 5.64258 19.1391 5.67773ZM38.25 28.125V15.4688H34.875C34.4602 15.4688 34.0594 15.2754 33.757 14.9326L31.1625 12.0498C29.8828 10.626 28.2305 9.84375 26.5148 9.84375C24.7289 9.84375 23.0133 10.6963 21.7125 12.2256L16.7836 18.0439C16.0594 18.9053 16.0734 20.3555 16.8188 21.1816C17.4727 21.9111 18.4641 21.8936 19.1039 21.1553L24.1594 15.3193C24.8414 14.5283 25.9102 14.5811 26.543 15.4424C27.1758 16.3037 27.1336 17.6309 26.4445 18.4219L26.3883 18.4922L31.6195 25.0312C32.3227 25.9102 32.7797 26.9912 32.9836 28.1162H38.25V28.125ZM4.5 29.5313C4.5 29.1583 4.38147 28.8006 4.1705 28.5369C3.95952 28.2732 3.67337 28.125 3.375 28.125C3.07663 28.125 2.79048 28.2732 2.5795 28.5369C2.36853 28.8006 2.25 29.1583 2.25 29.5313C2.25 29.9042 2.36853 30.2619 2.5795 30.5256C2.79048 30.7893 3.07663 30.9375 3.375 30.9375C3.67337 30.9375 3.95952 30.7893 4.1705 30.5256C4.38147 30.2619 4.5 29.9042 4.5 29.5313ZM41.625 30.9375C41.9234 30.9375 42.2095 30.7893 42.4205 30.5256C42.6315 30.2619 42.75 29.9042 42.75 29.5313C42.75 29.1583 42.6315 28.8006 42.4205 28.5369C42.2095 28.2732 41.9234 28.125 41.625 28.125C41.3266 28.125 41.0405 28.2732 40.8295 28.5369C40.6185 28.8006 40.5 29.1583 40.5 29.5313C40.5 29.9042 40.6185 30.2619 40.8295 30.5256C41.0405 30.7893 41.3266 30.9375 41.625 30.9375Z" fill="#3A4A01"/>
                        </svg>
                            </div>
                            <div className="row about-square-title justify-content-center">
                                Strong Partnerships
                            </div>
                            <div className="row about-square-text justify-content-center gx-0">
                                <span className="col">
                                We foster strong partnerships with private investors and family offices, 
                                ensuring robust financing support for our ventures. Together, we drive seamless 
                                project realization, making a lasting impact on the renewable energy landscape.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="row contact-row">
                    <div className="col d-flex justify-content-center">
                    <Link to="/investors/funding_initiatives_contact" className="btn btn-success">Contact Us</Link>
                    </div>
                    
                </div>
            <Footer />
        </div>
    )
}

export default FundingInitiativesPage;