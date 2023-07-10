import React from "react";
import { Component } from 'react';
import "./css/mission.css";
import "../styles/styles.css";

// 770px for top section
// 560px for metrics

export default function Mission() {

    return (
        <div className="row section-two">
            <section id='mission' className="missionvision col-sm-6">
                <h2 className="missiontitle">Millenia Energy</h2>
                <h3 className="together">Together For A Greener Tomorrow </h3>
                <h3 className="ourmission">Our Mission</h3>
                <p className="missioncontent">Our primary mission is centered around the crucial objective of decarbonizing the built environment, recognizing its significant contribution of approximately 40% to global greenhouse gas emissions.
                 <br/><br/> Our goal is to establish ourselves as a prominent player in the South East Asia region by actively developing, investing in, and operating renewable energy
                 <br/><br/> At Millenia Energy, our commitment entails assuming the role of project developer, owner, and operator for solar ventures, effectively alleviating the capital cost constraints faced by our valued clientele.</p>
                <h3 className="ourmission">Sustainable & Impact Investing (SII)</h3>
                <p className="missioncontent">
                We hold the view that the economy, markets, and portfolios are exposed to substantial risks stemming from unsustainable environmental and social justice trends.
                <br/><br/>Moreover, we firmly believe that clients are not compelled to make a trade-off between long-term portfolio returns and making a positive impact in the real world. 
                <br/><br/>By constructing portfolios that prioritize sustainability and solutions-oriented approaches, our objective is to provide portfolios that are resilient and future-proof.
                </p>
            </section>
            <section id='image' className="image-wrapper col-sm-6">
                <img className="solar-image" src={require("../images/solar_image.png").default}></img>
            </section>
        </div>
    )
}