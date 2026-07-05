import React from "react";
import "./Skills.css";
// import AnimatedCanvas from "../AnimatedCanvas/AnimatedCanvas";


const Skills = () => {
    return (
        <section id="Skills" >
            {/* <AnimatedCanvas /> */}

            <h2 className="sub-title">
                My <span>Skills</span>
            </h2>

            <div className="skills">

                {/* ----------------- Technical Skills ----------------- */}
                <div className="container1">
                    <h3 className="heading1">Technical Skills</h3>

                    <div className="Technical-bars">
                        {/* HTML */}
                        <div className="bar">
                            <div className="info">
                                <i className="fa-brands fa-html5" style={{ color: "#e34c26" }}></i>
                                <span>HTML</span>
                            </div>
                            <div className="progress-line html">
                                <span></span>
                            </div>
                        </div>

                        {/* CSS */}
                        <div className="bar">
                            <div className="info">
                                <i className="fa-brands fa-css3-alt" style={{ color: "#264de4" }}></i>
                                <span>CSS</span>
                            </div>
                            <div className="progress-line css">
                                <span></span>
                            </div>
                        </div>

                        {/* JavaScript */}
                        <div className="bar">
                            <div className="info">
                                <i className="fa-brands fa-js" style={{ color: "#f7df1e" }}></i>
                                <span>JavaScript</span>
                            </div>
                            <div className="progress-line javascript">
                                <span></span>
                            </div>
                        </div>

                        {/* Bootstrap */}
                        <div className="bar">
                            <div className="info">
                                <i className="fa-brands fa-bootstrap" style={{ color: "#7952b3" }}></i>
                                <span>Bootstrap</span>
                            </div>
                            <div className="progress-line bootstrap">
                                <span></span>
                            </div>
                        </div>

                        {/* React */}
                        <div className="bar">
                            <div className="info">
                                <i className="fa-brands fa-react" style={{ color: "#61dbfb" }}></i>
                                <span>React</span>
                            </div>
                            <div className="progress-line react">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ----------------- Professional Skills ----------------- */}
                <div className="container1">
                    <h3 className="heading1">Professional Skills</h3>

                    <div className="radial-bars">
                        {/* Creativity */}
                        <div className="radial-bar">
                            <svg viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">90%</div>
                            <div className="text">Creativity</div>
                        </div>

                        {/* Communication */}
                        <div className="radial-bar">
                            <svg viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">65%</div>
                            <div className="text">Communication</div>
                        </div>

                        {/* Problem Solving */}
                        <div className="radial-bar">
                            <svg viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-3" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">75%</div>
                            <div className="text">Problem Solving</div>
                        </div>

                        {/* Team Work */}
                        <div className="radial-bar">
                            <svg viewBox="0 0 200 200">
                                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                <circle className="path path-4" cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className="percentage">85%</div>
                            <div className="text">Team Work</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;