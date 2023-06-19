import * as React from "react"
import { Link } from "gatsby"
import "./../styles/styles.css"

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
                  <img style={{width:'100%', height:'40%'}} src={require("../images/logobanner.jpg").default} alt='Logo' />
                  <table cellpadding="0" cellspacing="0" style={{width:'100%'}} className="font_position">
                  <tbody>
                    <tr>
                      <td className="td1">
                        Coming Soon
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
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" style={{width:'100%', textAlign:'center', background:'#fff'}}>
          <td>
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" style= {{width:'960px', margin:'auto', textAlign:'center'}}>
                  <tbody>
                    <tr>
                      <td>
                      <img style= {{width:'30%'}} src={"../images/icon.png"} alt=""></img>
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
                        <table cellpadding="0" cellspacing="0" style={{width:'960px', margin:'auto', textAlign:'center'}}>
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
          </table>
        </td>
      </tr>
                </tbody>
            </table>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
