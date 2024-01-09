import React from "react";
import "./Customize2.css";
import { Navigate, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useSnapshot } from 'valtio'
import { state } from "../../store";

export const Customize = ({handleButtonClose, onToggleFirstMesh, onToggleSecondMesh}) => {
    const navigate = useNavigate()

    const handleClose = () => {
        navigate("/")
    } 

    const snap = useSnapshot(state)

    
   
    return (
                <div className="customize">
                    {/* <div className="close"> */}
                        
                    <motion.div className="close"
                        initial={{opacity: 0, y: -25,}}
                        whileInView={{opacity: 1, y: 0,}}
                        transition={{duration: 1, delay: 1,}}> 
                    <img className="close" alt="Close" src="/Close.png"  onClick={() => {handleButtonClose(); handleClose()} }></img>
                    </motion.div>
                    {/* </div> */}

                    <motion.div className="options"
                        initial={{opacity: 0, y: 25,}}
                        whileInView={{opacity: 1, y: 0,}}
                        transition={{duration: 1, delay: 1,}}> 
                    {/* <div className="options"> */}
                        <div className="paint">
                            <div className="text-wrapper">Paint</div>
                            <div className="frame">
                            
                                {snap.colors.map((color) => (
                                    <div key={color} className={`circle`}  style={{ background: color }}  onClick={() => (state.color = color)}>      
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="div-2">
                            <div className="text-wrapper-2">Wheels</div>
                            <div className="frame-2">
                                <img className="wheel" alt="Wheel" src="/Wheel.png" onClick={onToggleFirstMesh}/>
                                <img className="wheel" alt="Wheel" src="/Wheel.png" onClick={onToggleSecondMesh}/>
                            </div>
                        </div>
                        <div className="div-2">
                            <div className="text-wrapper-3">Brake Pads</div>
                            <div className="frame-3">
                            {snap.Inner.map((inner) => (
                                    <div key={inner} className={`circle`}  style={{ background: inner }}  onClick={() => (state.inner = inner)}>      
                                    </div>
                                ))}
                            </div>
                        </div>
                        </motion.div>
                    {/* </div> */}
                </div>
            );
        };
        

        
    

