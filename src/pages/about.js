import * as React from "react"
import Navbar from "../components/home/navbar"
import Footer from "../components/home/footer"
import "../styles/about.css"
// import "../assets/vendor/aos/aos.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"

const AboutPage = () => {
    return (
        <div className="main">
            <div className="banner">
            <div className="container">
                <Navbar />
            </div>
            </div>
            <div className="container about-text-container">
            <div className="row justify-content-center">
                <h2 className="about-title">WHO ARE WE?</h2>
            </div>
            <div className="row justify-content-center">
                <h3 className="about-quote" id="about-quote"> "At every stage of the process, including acquisition, development, 
                            construction, financing, operations, and asset management, we are dedicated to mitigating climate change and creating a positive environmental, 
                            social, and governance (ESG) impact that will pave the way for a brighter future."</h3>
            </div>
            </div>
                <div className="container-fluid about-squares-container">
                <div className="row squares-wrapper">
                    <div className="col d-flex justify-content-center">
                        <div className="about-square">
                            <div className="row about-icon justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <path d="M8.75 8.75C8.75 6.33008 6.79492 4.375 4.375 4.375C1.95508 4.375 0 6.33008 0 8.75V54.6875C0 60.7305 4.89453 65.625 10.9375 65.625H65.625C68.0449 65.625 70 63.6699 70 61.25C70 58.8301 68.0449 56.875 65.625 56.875H10.9375C9.73437 56.875 8.75 55.8906 8.75 54.6875V8.75ZM64.3398 20.5898C66.0488 18.8809 66.0488 16.1055 64.3398 14.3965C62.6309 12.6875 59.8555 12.6875 58.1465 14.3965L43.75 28.8066L35.9023 20.959C34.1934 19.25 31.418 19.25 29.709 20.959L14.3965 36.2715C12.6875 37.9805 12.6875 40.7559 14.3965 42.4648C16.1055 44.1738 18.8809 44.1738 20.5898 42.4648L32.8125 30.2559L40.6602 38.1035C42.3691 39.8125 45.1445 39.8125 46.8535 38.1035L64.3535 20.6035L64.3398 20.5898Z" fill="#3A4A01"/>
                            </svg>
                            </div>
                            <div className="row about-square-title justify-content-center">
                                Quality And Expertise
                            </div>
                            <div className="row about-square-text justify-content-center gx-0">
                                <span className="col">
                                Our extensive expertise and strategic industry partnerships enable us to identify and pursue well-balanced, 
                                high-quality investment opportunities that mitigate risks, ensuring favorable outcomes for our valued investors
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col d-flex justify-content-center">
                        <div className="about-square">
                            <div className="row about-icon justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                <g clip-path="url(#clip0_90_61)">
                                    <path d="M70 48.8594C59.9557 70.2188 35.8932 57.2969 35.8932 57.2969C28.5104 70.0781 16.3151 78.2969 2.2422 78.3438C-0.6927 78.3438 -0.783846 74.5312 2.2422 74.5312C13.9818 74.4844 24.2083 67.8594 30.8984 57.3281C23.4063 59.8125 9.27866 61.6875 1.44011 44.4844C21.3099 37.4688 30.4427 46.2344 33.9427 51.5938C35.7474 47.7813 37.0417 43.6406 37.8802 39.1406C37.8802 39.1406 12.4141 42.5625 10.6276 23.8125C32.3386 16.3281 38.4453 35.7969 38.4453 35.7969C38.737 33.1875 39.0469 27.5781 39.0469 27.4531C39.0469 27.4531 19.6693 15.9375 32.1016 1.64062C54.8151 8.35938 43.2943 27.0156 43.2943 27.0156C43.3854 27.2656 43.3854 30.7344 43.2943 32.2344C43.2943 32.2344 51.5339 18.3281 68.1589 23.25C67.3932 44.1875 42.2917 39.875 42.2917 39.875C41.4896 44.1562 40.25 48.2188 38.6458 51.9844C38.6458 51.9844 53.7761 37.6406 70 48.8594Z" fill="#3A4A01"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_90_61">
                                    <rect width="70" height="80" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            </div>
                            <div className="row about-square-title justify-content-center">
                                Sustainability
                            </div>
                            <div className="row about-square-text justify-content-center gx-0">
                                <span className="col">
                                We curate investments that align with your personal values, carefully constructing portfolios that prioritize your environmental, 
                                social, and governance considerations.
                                </span>
                            </div>
                            </div>
                        </div>
                    

                    <div className="col d-flex justify-content-center">
                        <div className="about-square">
                            <div className="row about-icon justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                    <path d="M34.025 10.0937L27.6375 18.0781C25.725 18.7344 23.95 19.9375 22.45 21.5938L19.125 25.2969C17.85 26.7188 16.1875 27.5 14.475 27.5H12V47.5C14.55 47.5938 16.975 48.8906 18.7875 51.1562L23.2375 56.7188L24.1125 57.8125L27.4875 62.0312C28.2625 63 29.5375 63 30.3125 62.0312C30.525 61.7656 30.6875 61.4531 30.775 61.125C31.125 59.9219 31.9375 59.0156 32.9375 58.7344C33.9375 58.4531 34.9875 58.8281 35.7125 59.75L37.0625 61.4062C38.5125 63.2188 40.8625 63.2188 42.3 61.4062C42.975 60.5625 43.3375 59.4844 43.375 58.375C43.425 57 44.075 55.7812 45.075 55.1875C46.075 54.5938 47.2375 54.7188 48.125 55.5156C49.3 56.5625 50.9375 56.4219 51.9875 55.1094C53.1625 53.6406 53.1625 51.2656 51.9875 49.8125L42.5125 37.9688L38.0375 43.125C34.625 47.0625 29.3875 47.125 25.9125 43.2656C21.95 38.8594 21.8625 31.1719 25.7125 26.625L34.475 
                                    16.2812C37.9 12.25 42.425 10 47.1375 10C51.65 10 56.0125 12.0781 59.375 15.8125L63.1375 20H68H73H78C79.1 20 80 21.125 80 22.5V55C80 57.7656 78.2125 60 76 60H72C70.525 60 69.225 59 68.5375 57.5H57.925C57.5 58.5469 56.9375 59.5469 56.2375 60.4219C54.1 63.0938 51.1375 64.1406 48.3625 63.5625C47.9125 64.7031 47.3 65.7656 46.5375 66.7188C43.125 70.9844 37.7875 71.4062 33.9875 67.9844C30.85 71.2344 26.175 71.0312 23.2375 67.3438L19.875 63.125L19 62.0312L14.55 56.4688C13.8625 55.6094 12.9625 55.1094 12 55.0156C12 57.7656 10.2 60 8 60H4C1.7875 60 0 57.7656 0 55V22.5C0 21.125 0.9 20 2 20H7H12H14.475C14.725 20 14.9625 19.8906 15.1375 19.6875L18.45 16C21.9375 12.1406 26.425 10 31.0875 10H32.375C32.925 10 33.4875 10.0312 34.025 10.0937ZM68 50V27.5H62C61.2625 27.5 60.55 27.1562 60.0125 26.5469L55.4 21.4219C53.125 18.8906 50.1875 17.5 47.1375 17.5C43.9625 17.5 40.9125 19.0156 38.6 21.7344L29.8375 32.0781C28.55 33.6094 28.575 36.1875 29.9 37.6562C31.0625 38.9531 32.825 38.9219 33.9625 37.6094L42.95 27.2344C44.1625 25.8281 46.0625 25.9219 47.1875 27.4531C48.3125 28.9844 48.2375 31.3438 47.0125 32.75L46.9125 32.875L56.2125 44.5C57.4625 46.0625 58.275 47.9844 58.6375 49.9844H68V50ZM8 52.5C8 51.837 7.78929 51.2011 7.41421 50.7322C7.03914 50.2634 6.53043 50 6 50C5.46957 50 4.96086 50.2634 4.58579 50.7322C4.21071 51.2011 4 51.837 4 52.5C4 53.163 4.21071 53.7989 4.58579 54.2678C4.96086 54.7366 5.46957 55 6 55C6.53043 55 7.03914 54.7366 7.41421 54.2678C7.78929 53.7989 8 53.163 8 52.5ZM74 55C74.5304 55 75.0391 54.7366 75.4142 54.2678C75.7893 53.7989 76 53.163 76 52.5C76 51.837 75.7893 51.2011 75.4142 50.7322C75.0391 50.2634 74.5304 50 74 50C73.4696 50 72.9609 50.2634 72.5858 50.7322C72.2107 51.2011 72 51.837 72 52.5C72 53.163 72.2107 53.7989 72.5858 54.2678C72.9609 54.7366 73.4696 55 74 55Z" fill="#3A4A01"/>
                                </svg>
                            </div>
                            <div className="row about-square-title justify-content-center">
                                Strong Partnerships
                            </div>
                            <div className="row about-square-text justify-content-center gx-0">
                                <span className="col">
                                We leverage our extensive network of private investors and family offices to offer robust financing support to our project, 
                                ensuring their successful realization
                                </span>
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