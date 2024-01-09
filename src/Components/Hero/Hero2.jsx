import React from "react";
import "./Hero2.css";

export const Hero = () => {
    return (
        <div className="header">
            <div className="left-column">
                <div className="heading">
                    <div className="div">
                        <div className="text-wrapper">The Classic</div>
                        <div className="frame">
                            <p className="BMW">
                                <span className="span">BMW</span>
                                <span className="text-wrapper-2">&nbsp;</span>
                                <span className="text-wrapper-3">M3</span>
                                <span className="text-wrapper-2">&nbsp;</span>
                                <span className="text-wrapper-3">E30</span>
                            </p>
                        </div>
                    </div>
                    <div className="explore-button">
                        <div className="text-wrapper-4">Customise</div>
                    </div>
                </div>
                <div className="specs">
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
                        <span className="text-wrapper-6">240kph</span>
                    </p>
                    <p className="p">
                        <span className="text-wrapper-5">
                            ACCELERATION
                            <br />
                        </span>
                        <span className="text-wrapper-6">6.8s</span>
                        <span className="text-wrapper-7">(0-100)</span>
                    </p>
                </div>
            </div>
            <div className="right-column" />
        </div>
    );
};
