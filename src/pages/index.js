import * as React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
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
    <Navbar />
    <table className="tblOutter">
    <tbody>
      <tr>
        <td>
          <table style={{width:'100%', textAlign:'center', padding:'0', margin:'0'}}>
            <tbody>
              <tr>
                <td style={{position:'relative'}}>
                  <img style={{width:'100%', height:'40%'}} src={require("../images/logobanner.jpg").default} alt='Logo' />
                  {/* <table cellpadding="0" cellspacing="0" style={{width:'100%'}} className="font_position">
                  <tbody>
                    <tr> */}
                      <div className="td1" style={{position: 'relative', textAlign:'center', marginTop:'10px'}}>
                      Coming Soon In August!
                      </div>
                    {/* </tr>
                  </tbody>
                  </table> */}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table style={{width:'100%', textAlign:'center', background:'#fff', marginTop:"15px"}}>
            <tr>
              <td>
              <img style= {{width:'5%'}} src={require("../images/logo_nobg.png").default} alt=""></img>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Millenia Energy</h2>
              </td>
            </tr>
            <tr>
              <td style={{lineHeight:'1.5'}}>1 Yishun Industrial Street 1, #08-16 A POSH Bizhub, Singapore 768160.</td>
            </tr>
            <tr>
              <td style={{height:'20px'}}></td>
            </tr>
            <tr>
                <td>
                    <table cellpadding="0" cellspacing="0" style={{width:'230px', margin:'auto'}}>
                        <tbody>
                        <tr>
                            <td style={{paddingLeft:'10px', fontSize:'18px', fontWeight:'400', fontFamily:'Roboto Condensed, Arial'}}>
                                <a href="mailto:info@millenia-energy.com" title="info@millenia-energy.com" style={{whiteSpace: 'nowrap', color: 'black', textDecoration: 'none'}}><i className="bx bx-envelope" style={{padding: '5px'}}></i>info@millenia-energy.com</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                      <td style={{height:'30px'}}>
                          &nbsp;
                      </td>
                    </tr>
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" style={{width:'100%', textAlign:'center', borderTop:'1px solid #ddd'}}>
                  <tbody>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" style={{width:'100%', margin:'auto', textAlign:'center'}}>
                            <tbody>
                              <tr>
                                <td>
                                  <table className="tblContent">
                                    <tbody>
                                    <tr>
                                        <td style={{height:'20px'}}></td>
                                    </tr>
                                    <tr>
                                      <td style={{fontSize:'14px'}}>
                                          Thank you for visiting us. We're currently upgrading our website.
                                      </td>
                                    </tr>
                                    <tr>
                                        <td style={{height:'10px'}}></td>
                                    </tr>
                                    <tr>
                                        <td style={{height:'20px'}}></td>
                                    </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </table>

        </td>
      </tr>
                </tbody>
            </table>
    <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => (
<>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<title>Home Page</title>
</>
)
