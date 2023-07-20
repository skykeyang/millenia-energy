import React from "react";
import { useRef } from "react";
import "./css/mission.css";
import "../../styles/styles.css";
import { useInView } from "framer-motion";

// 770px for top section
// 560px for metrics

export default function Mission() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="container" ref={ref}>
        <div className="row section-two">
            <section id='mission' className="missionvision col-sm-6" 
            style={{transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
                <h2 className="missiontitle">Millenia Energy</h2>
                <h3 className="together">Together For A Greener Tomorrow </h3>
                <h3 className="ourmission">Our Mission</h3>
                <section id='image-mobile' className="image-wrapper col-sm-6"
                style={{transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
                    <img className="solar-image" src={require("../../images/solar_image_mobile.png").default}></img>
                </section>
                <p className="missioncontent">Our primary mission is centered around the crucial objective of decarbonizing the built environment, recognizing its significant contribution of approximately 40% to global greenhouse gas emissions.
                 <br/><br/> Our goal is to establish ourselves as a prominent player in the South East Asia region by actively developing, investing in, and operating renewable energy
                 <br/><br/> At Millenia Energy, our commitment entails assuming the role of project developer, owner, and operator for solar ventures, effectively alleviating the capital cost constraints faced by our valued clientele.</p>
            </section>
            <section id='image-main' className="image-wrapper col-sm-6"
            style={{transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
                <img className="solar-image" src={require("../../images/solar_image.png").default}></img>
            </section>
        </div>
        </div>
    )
}