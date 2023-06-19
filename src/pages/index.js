import * as React from "react"
import { Link } from "gatsby"
import "./../styles/styles.css"
// import "../assets/vendor/aos/aos.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"
// import "../assets/vendor/glightbox/css/glightbox.min.css"
// import "../assets/vendor/swiper/swiper-bundle.min.css"

function IndexPage() {
  return (
    <table className="tblOutter">
    <tbody>
      <tr>
        <td>
          <table style={{width:'100%', textAlign:'center', padding:'0', margin:'0'}}>
            <tbody>
              <tr>
                <td style={{position:'relative'}}>
                  <img style={{width:'100%', height:'40%'}} src={require("../images/logobanner.jpeg").default} alt='Logo' />
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
          {/* <table cellpadding="0" cellspacing="0" style={{width:'100%', textAlign:'center', background:'#fff'}}>
          <td style={{textAlign:'center'}}>
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" style= {{margin:'auto', textAlign:'center'}}>
                  <tbody>
                    <tr>
                      <td>
                      <img style= {{width:'100%'}} src={"../images/icon.png"} alt=""></img>
                      </td>
                    </tr>
                    <tr>
                    <td style={{height:'30px'}}></td>
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
                                        <a href="mailto:info@millenia-energy.com" title="info@millenia-energy.com">info@millenia-energy.com</a>
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
                  </tbody>
                </table>
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
                                          Thank you for visiting us. We're upgrading our website.
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
          </td>
          </table> */}
        </td>
      </tr>
                </tbody>
            </table>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
