import React, { useState, useEffect } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import gsap, { Expo } from "gsap";
import { motion, useAnimation } from "framer-motion";


export const Hero = ({handleButtonClick}) => {

    const navigate = useNavigate()

    const navClick = () => {
        navigate("/Components/Customize");
    }

    // useEffect(() => {
    //     const tl = gsap.timeline();
    
    //     tl.to('.text-wrapper', 1.5, { opacity: 1,  x: -20, ease: Expo.easeInOut })
    //       .to('.BMW', 1.5, { opacity: 0, x: -20, ease: Expo.easeInOut })
    //       .to('.explore-button', 1.5, { opacity: 0, x: -20, ease: Expo.easeInOut })
    //     }, []);


  return (
    <div className="hero">
    {/* <div className="left-column"> */}
        <div className="heading">
            <div className="div">

            <motion.div className="text-wrapper"
              initial={{opacity: 0, y: 25,}}
              whileInView={{opacity: 1, y: 0,}}
              transition={{duration: 1, delay: 1,}}>The Classic </motion.div>
                {/* <div className="text-wrapper">The Classic</div> */}
                <div className="frame">
                <motion.div className="BMW" 
            initial={{opacity: 0, y: 25,}}
            whileInView={{opacity: 1, y: 0,}}
            transition={{duration: 1, delay: 1.3,}}>
                    {/* <p className="BMW"> */}
                        <span className="span">BMW</span>
                        <span className="text-wrapper-2">&nbsp;</span>
                        <span className="text-wrapper-3">M3</span>
                        <span className="text-wrapper-2">&nbsp;</span>
                        <span className="text-wrapper-3">E30</span>
                        </motion.div>
                    {/* </p> */}
                </div>
            </div>
            <motion.div className="explore-button" 
            initial={{opacity: 0, x: -55,}}
            whileInView={{opacity: 1, x: 0,}}
            transition={{duration: 1, delay: 1.5,}}
            onClick={() => {handleButtonClick(); navClick()}}>
            {/* <div className="explore-button" onClick={() => {handleButtonClick(); navClick()}}> */}
                <div className="text-wrapper-4">Customise</div>
            {/* </div> */}

            </motion.div>
        </div>
        {/* <div className="specs"> */}
        <motion.div className="specs" 
            initial={{opacity: 0, y: 25,}}
            whileInView={{opacity: 1, y: 0,}}
            transition={{duration: 1, delay: 1.7,}}>
                    <p className="HORSEPOWER-HP">
                        <span className="text-wrapper-5">
                            HORSEPOWER
                            <br />
                        </span>
                        <span className="text-wrapper-6">296 HP</span>
                    </p>
                    <p className="p">
                        <span className="text-wrapper-5">
                            TOP SPEED
                            <br />
                        </span>
                        <span className="text-wrapper-6">240 km/h</span>
                    </p>
                    <p className="p">
                        <span className="text-wrapper-5">
                            ACCELERATION
                            <br />
                        </span>
                        <span className="text-wrapper-6">6.8s</span>
                        <span className="text-wrapper-7">(0-100 km/h)</span>
                    </p>
                    </motion.div>
                {/* </div> */}
    {/* </div> */}


    {/* <div className="right-column" /> */}
</div>
  );
};