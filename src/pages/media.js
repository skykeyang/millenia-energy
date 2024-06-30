import * as React from "react"
import Navbar from "../components/home/navbar"
import Footer from "../components/home/footer"
import MediaBanner from "../components/misc/media-banner"
import "./../styles/styles.css"
import "./../styles/media.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"

const MediaPage = () => {

    const articles = [
        {
            "title": "Solar panels to be installed at 1,075 HDB blocks in largest tender under green push",
            "image-link": "../images/articles/article9.png",
            "url": "https://www.straitstimes.com/singapore/solar-panels-to-be-installed-at-1075-hdb-blocks-as-part-of-largest-tender-under-govt-solar-programme",
            "author": "The Straits Times",
            "length": "7 mins read"
            },
        {
            "title": "Gas, electricity prices to rise in next quarter with higher GST, carbon tax and energy costs",
            "image-link": "../images/articles/article8.png",
            "url": "https://www.straitstimes.com/singapore/gas-electricity-prices-to-rise-next-quarter-with-higher-gst-carbon-tax-and-energy-costs",
            "author": "The Straits Times",
            "length": "7 mins read"
            },
        {
            "title": "Solar vision: The future looks bright for Singapore",
            "image-link": "../images/articles/article1.png",
            "url": "https://www.jtc.gov.sg/about-jtc/news-and-stories/feature-stories/solar-vision-the-future-looks-bright-for-singapore",
            "author": "JTC",
            "length": "5 mins read"
            },
        {
            "title": "Renewable energy main draw for green investments in South-east Asia",
            "image-link": "../images/articles/article2.png",
            "url": "https://www.straitstimes.com/business/renewable-energy-main-draw-for-green-investments-in-south-east-asia",
            "author": "The Straits Times",
            "length": "5 mins read"
            },
        {
            "title": "Carbon Tax",
            "image-link": "../images/articles/article3.png",
            "url": "https://www.nccs.gov.sg/singapores-climate-action/mitigation-efforts/carbontax/#:~:text=The%20carbon%20tax%20level%20was,period%20for%20emitters%20to%20adjust.&text=To%20support%20our%20net%20zero,tCO2e%20by%202030",
            "author": "NCSS",
            "length": "8 mins read"
            },
        {
            "title": "Singapore's carbon tax increase of up to 16-fold will make low carbon technologies and power imports cost competitive",
            "image-link": "../images/articles/article4.png",
            "url": "https://www.spglobal.com/commodityinsights/en/ci/research-analysis/singapores-carbon-tax-increase-of-up-to-16fold-will-make-low-c.html",
            "author": "S&P Global Commodity Insights",
            "length": "10 mins read"
            },
        {
            "title": "Bali can lead as the clean energy province, the island owned enormous potential for technical and market of solar PV",
            "image-link": "../images/articles/article5.png",
            "url": "https://iesr.or.id/en/bali-can-lead-as-the-clean-energy-province-the-island-owned-enormous-potential-for-technical-and-market-of-solar-pv",
            "author": "IESR",
            "length": "10 mins read"
            },
        {
            "title": "Bali's PV potential shines in ADB mapping study",
            "image-link": "../images/articles/article6.png",
            "url": "https://www.pv-magazine.com/2017/08/21/balis-pv-potential-shines-in-adb-mapping-study/",
            "author": "PV Magazine",
            "length": "5 mins read"
            },
        {
            "title": "Solar PV can help businesses save at least 25% in electricity cost, says UOB",
            "image-link": "../images/articles/article7.png",
            "url": "https://www.mida.gov.my/mida-news/solar-pv-can-help-businesses-save-at-least-25-in-electricity-cost-says-uob/",
            "author": "MIDA",
            "length": "3 mins read"
            },
        {
            "title": "What Selection Criteria Can Companies Use to Purchase Renewable Energy Certificates?",
            "image-link": "../images/articles/article10.png",
            "url": "https://redex.eco/what-selection-criteria-can-companies-use-to-purchase-renewable-energy-certificates/",
            "author": "REDEX",
            "length": "5 mins read"
            },
        {
            "title": "The Economics of Renewable Energy Investment: Costs, Savings, and ROI",
            "image-link": "../images/articles/article11.png",
            "url": "https://redex.eco/the-economics-of-renewable-energy-investment-costs-savings-and-roi/",
            "author": "REDEX",
            "length": "5 mins read"
            },
        ]
    
        
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <MediaBanner />
            <div className="container">

                {/* ROW OF ARTICLES */}
                <div className="row justify-content-center">
                    {/* ARTICLE 1 */}
                    <div className="col-sm-12 col-lg-4" align="center">
                        <a href={articles[0].url} target="_blank" rel="noreferrer" className="unstyled-a">
                        <div className="article-wrapper">
                            <div className="row article-image">
                                <img src={require("../images/articles/article9.png").default} alt="article1" className="article-image"/>
                                <div className="image-overlay">
                                    {articles[0].length}
                                </div>
                            </div>
                            <a className="article-link"href={articles[0].url} target="_blank" rel="noreferrer">
                            <div className="row article-title">
                                {articles[0].title}
                            </div>
                            </a>
                            <div className="row article-author">
                                Written by: {articles[0].author}
                            </div>
                        </div>
                    </a>
                    </div>
                    {/* ARTICLE 2 */}
                    <div className="col-sm-12 col-lg-4" align="center">
                        <a href={articles[1].url} target="_blank" rel="noreferrer" className="unstyled-a">
                        <div className="article-wrapper">
                        <div className="row article-image">
                                <img src={require("../images/articles/article8.png").default} alt="article1" className="article-image"/>
                                <div className="image-overlay">
                                    {articles[1].length}
                                </div>
                            </div>
                            <a className="article-link"href={articles[1].url} target="_blank" rel="noreferrer">
                            <div className="row article-title">
                                {articles[1].title}
                            </div>
                            </a>
                            <div className="row article-author">
                                Written by: {articles[1].author}
                            </div>
                        </div>
                        </a>
                    </div>
                    {/* ARTICLE 3 */}
                    <div className="col-sm-12 col-lg-4" align="center">
                        <a href={articles[2].url} target="_blank" rel="noreferrer" className="unstyled-a">
                        <div className="article-wrapper">
                        <div className="row article-image">
                                <img src={require("../images/articles/article1.png").default} alt="article1" className="article-image"/>
                                <div className="image-overlay">
                                    {articles[2].length}
                                </div>
                            </div>
                            <a className="article-link" href={articles[2].url} target="_blank" rel="noreferrer">
                            <div className="row article-title">
                                {articles[2].title}
                            </div>
                            </a>
                            <div className="row article-author">
                                Written by: {articles[2].author}
                            </div>
                        </div>
                        </a>
                    </div>
                </div>

                {/* ROW OF ARTICLES */}
                <div className="row justify-content-center">
                    {/* ARTICLE 4 */}
                    <div className="col-sm-12 col-lg-4" align="center">
                        <a href={articles[3].url} target="_blank" rel="noreferrer" className="unstyled-a">
                        <div className="article-wrapper">
                            <div className="row article-image">
                                <img src={require("../images/articles/article2.png").default} alt="article1" className="article-image"/>
                                <div className="image-overlay">
                                    {articles[3].length}
                                </div>
                            </div>
                            <a className="article-link" href={articles[3].url} target="_blank" rel="noreferrer">
                            <div className="row article-title-long">
                                {articles[3].title}
                            </div>
                            </a>
                            <div className="row article-author">
                                Written by: {articles[3].author}
                            </div>
                        </div>
                        </a>
                    </div>
                    {/* ARTICLE 5 */}
                    <div className="col-sm-12 col-lg-4" align="center">
                        <a href={articles[4].url} target="_blank" rel="noreferrer" className="unstyled-a">
                        <div className="article-wrapper">
                        <div className="row article-image">
                                <img src={require("../images/articles/article3.png").default} alt="article1" className="article-image"/>
                                <div className="image-overlay">
                                    {articles[4].length}
                                </div>
                            </div>
                            <a className="article-link" href={articles[4].url} target="_blank" rel="noreferrer">
                            <div className="row article-title-long">
                                {articles[4].title}
                            </div>
                            </a>
                            <div className="row article-author">
                                {articles[4].author}
                            </div>
                        </div>
                        </a>
                    </div>
                    {/* ARTICLE 6 */}
                    <div className="col-sm-12 col-lg-4" align="center">
                        <a href={articles[5].url} target="_blank" rel="noreferrer" className="unstyled-a">
                        <div className="article-wrapper">
                        <div className="row article-image">
                                <img src={require("../images/articles/article4.png").default} alt="article1" className="article-image"/>
                                <div className="image-overlay">
                                    {articles[5].length}
                                </div>
                            </div>
                            <a className="article-link" href={articles[5].url} target="_blank" rel="noreferrer">
                            <div className="row article-title">
                                {articles[5].title}
                            </div>
                            </a>
                            <div className="row article-author">
                                {articles[5].author}
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
                
                {/* ROW OF ARTICLES */}
                <div className="row justify-content-center">
                    {/* ARTICLE 7 */}
                    <div className="col-sm-12 col-lg-4" align="center">
                        <a href={articles[6].url} target="_blank" rel="noreferrer" className="unstyled-a">
                        <div className="article-wrapper">
                            <div className="row article-image">
                                <img src={require("../images/articles/article5.png").default} alt="article1" className="article-image"/>
                                <div className="image-overlay">
                                    {articles[6].length}
                                </div>
                            </div>
                            <a className="article-link" href={articles[6].url} target="_blank" rel="noreferrer">
                            <div className="row article-title">
                                {articles[6].title}
                            </div>
                            </a>
                            <div className="row article-author">
                                {articles[6].author}
                            </div>
                        </div>
                        </a>
                    </div>
                    {/* ARTICLE 8 */}
                    <div className="col-sm-12 col-lg-4" align="center">
                        <a href={articles[7].url} target="_blank" rel="noreferrer" className="unstyled-a">
                        <div className="article-wrapper">
                            <div className="row article-image">
                                <img src={require("../images/articles/article6.png").default} alt="article1" className="article-image"/>
                                <div className="image-overlay">
                                    {articles[7].length}
                                </div>
                            </div>
                            <a className="article-link" href={articles[7].url} target="_blank" rel="noreferrer">
                            <div className="row article-title">
                                {articles[7].title}
                            </div>
                            </a>
                            <div className="row article-author">
                                {articles[7].author}
                            </div>
                        </div>
                        </a>
                    </div>
                    {/* ARTICLE 9 */}
                    <div className="col-sm-12 col-lg-4" align="center">
                        <a href={articles[8].url} target="_blank" rel="noreferrer" className="unstyled-a">
                        <div className="article-wrapper">
                            <div className="row article-image">
                                <img src={require("../images/articles/article7.png").default} alt="article1" className="article-image"/>
                                <div className="image-overlay">
                                    {articles[8].length}
                                </div>
                            </div>
                            <a className="article-link" href={articles[8].url} target="_blank" rel="noreferrer">
                            <div className="row article-title">
                                {articles[8].title}
                            </div>
                            </a>
                            <div className="row article-author">
                                {articles[8].author}
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
                {/* ROW OF ARTICLES */}
                <div className="row justify-content-center">
                    {/* ARTICLE 10 */}
                    <div className="col-sm-12 col-lg-4" align="center">
                        <a href={articles[9].url} target="_blank" rel="noreferrer" className="unstyled-a">
                        <div className="article-wrapper">
                            <div className="row article-image">
                                <img src={require("../images/articles/article10.png").default} alt="article1" className="article-image"/>
                                <div className="image-overlay">
                                    {articles[9].length}
                                </div>
                            </div>
                            <a className="article-link" href={articles[9].url} target="_blank" rel="noreferrer">
                            <div className="row article-title">
                                {articles[9].title}
                            </div>
                            </a>
                            <div className="row article-author">
                                {articles[9].author}
                            </div>
                        </div>
                        </a>
                    </div>
                    {/* ARTICLE 11 */}
                    <div className="col-sm-12 col-lg-4" align="center">
                        <a href={articles[10].url} target="_blank" rel="noreferrer" className="unstyled-a">
                        <div className="article-wrapper">
                            <div className="row article-image">
                                <img src={require("../images/articles/article11.png").default} alt="article1" className="article-image"/>
                                <div className="image-overlay">
                                    {articles[10].length}
                                </div>
                            </div>
                            <a className="article-link" href={articles[10].url} target="_blank" rel="noreferrer">
                            <div className="row article-title">
                                {articles[10].title}
                            </div>
                            </a>
                            <div className="row article-author">
                                {articles[10].author}
                            </div>
                        </div>
                        </a>
                    </div>
                    {/* ARTICLE 12 */}
                    <div className="col-sm-12 col-lg-4" align="center">
                        {/* <a href={articles[8].url} target="_blank" rel="noreferrer" className="unstyled-a">
                        <div className="article-wrapper">
                            <div className="row article-image">
                                <img src={require("../images/articles/article7.png").default} alt="article1" className="article-image"/>
                                <div className="image-overlay">
                                    {articles[8].length}
                                </div>
                            </div>
                            <a className="article-link" href={articles[8].url} target="_blank" rel="noreferrer">
                            <div className="row article-title">
                                {articles[8].title}
                            </div>
                            </a>
                            <div className="row article-author">
                                {articles[8].author}
                            </div>
                        </div>
                        </a> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MediaPage;