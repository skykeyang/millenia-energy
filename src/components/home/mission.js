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
                
                <h2 className="missiontitle row">Together For A Greener Tomorrow </h2>
                <h3 className="ourmission">Our Mission</h3>
                {/* <section id='image-mobile' className="image-wrapper col-sm-6"
                style={{transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
                    <img className="solar-image" src={require("../../images/solar_image_mobile.png").default}></img>
                </section> */}
                <p className="missioncontent">
                    At Millenia Energy, our mission is to build a greener world. We achieve this by decarbonizing the built environment, 
                    which contributes to 40% of global greenhouse gas emissions.
                </p>

                <div className="row d-flex justify-content-center">
                    <img className="coastal-turbine-image" src={require("../../images/coastal_turbines.png").default}></img>
                </div>

                <h3 className="ourcommitment">Our Commitment</h3>
                {/* <section id='image-mobile' className="image-wrapper col-sm-6"
                style={{transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
                    <img className="solar-image" src={require("../../images/solar_image_mobile.png").default}></img>
                </section> */}
                <p className="commitmentcontent">
                At Millenia Energy, we assume roles as project developer, owner, and operator for solar ventures, 
                alleviating capital cost constraints for our clients. Your seamless and cost-effective solar journey is our priority.
                </p>
            </section>

            <section id='mission-right' className="image-wrapper col-sm-6"
            style={{transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
                <img className="turbine-image" src={require("../../images/wind_turbines.jpg").default}></img>
                <h3 className="ourvision">Our Vision</h3>
                {/* <section id='image-mobile' className="image-wrapper col-sm-6"
                style={{transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
                    <img className="solar-image" src={require("../../images/solar_image_mobile.png").default}></img>
                </section> */}
                <p className="visioncontent">
                Our vision at Millenia Energy is to lead the South East Asian transition towards a sustainable and carbon-neutral future, 
                where clean energy powers every aspect of modern life.
                </p>
                <div className="row d-flex justify-content-center">
                    <img className="coastal-turbine-image" src={require("../../images/solar_image.png").default}></img>
                </div>
            </section>
        </div>
        </div>
    )
}