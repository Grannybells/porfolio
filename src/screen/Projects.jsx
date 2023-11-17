import React from "react";
import mouse from "../assets/Mouse.svg"
import github from "../assets/github.svg"


import project1 from "../assets/Frame 1.png"
import project3 from "../assets/Frame 3.png"

import html from "../assets/HTML.png"
import css from "../assets/CSS.png"
import tailwind from "../assets/Tailwind.png"
import js from "../assets/javascript.png"
import reactIco from "../assets/React.png"
import cplusplus from "../assets/C++.png"
import arduino from "../assets/Arduino.png"
import firebase from "../assets/firebase.png"

const Projects = () => {
    return (
        <div className="w-full px-5 md:px-20 lg:px-48 bg-[#292F36] pb-20">
            <div className="flex items-center justify-center h-36">
                <img className="h-20" src={mouse} alt="mouse" />
            </div>
            <div className="flex items-center justify-center">
                <div className="w-full flex flex-col items-center gap-10">
                    <h1 className="font-poppins text-[#10FFE6] text-4xl font-bold">Works</h1>
                    
                    <div className="w-full flex flex-row">

                        <div className="w-full md:w-1/2 p-5 flex flex-col gap-5 items-end">
                            <h1 className="font-poppins text-2xl text-[#10FFE6] font-bold text-right">Nutrigrow</h1>
                            <div className="border-[1px] w-48" />
                            <div className="flex flex-row gap-5">
                                <img className="h-10 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none" src={reactIco} alt="logo" />
                                <img className="h-10 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none" src={tailwind} alt="logo" />
                                <img className="h-10 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none" src={firebase} alt="logo" />
                            </div>
                            <p className="font-poppins text-sm text-white/80 text-justify h-64 lg:h-auto overflow-hidden">In the Philippines, the manual spreading of granular fertilizers in fields poses inefficiencies due to imprecise nutrient dispersal rates. To revolutionize agriculture, there's a critical need for an automated nutrient management system that operates in real time. This project aims to empower farmers with tools for effective crop nutrient management, reducing costs and optimizing planting processes by analyzing soil data and recommending ideal nutrient ratios for individual plants. This innovative system, boasting a success rate of 99.35% in various tests, promises to enhance livelihoods by automating planting procedures and boosting crop yields for high-value crops.</p>
                            <a href='https://github.com/Grannybells/nutrigrow-app.git' className=" cursor-pointer">
                                <img href='https://github.com/Grannybells/x-track-web.git' className="h-10" src={github} alt="github" />
                            </a>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-start items-center">
                            <img className="h-48 md:h-96" src={project3} alt="project3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
