import React from "react";
import skillbackground from "../assets/Skills.svg"
import mouse from "../assets/mouse.svg"
import monitor from "../assets/monitor.svg"
import phone from "../assets/cellphone-settings.svg"
import cpu from "../assets/memory.svg"

import html from "../assets/HTML.png"
import css from "../assets/cSS.png"
import tailwind from "../assets/Tailwind.png"
import js from "../assets/javascript.png"
import reactIco from "../assets/React.png"
import cplusplus from "../assets/C++.png"
import arduino from "../assets/Arduino.png"

export const Skills = () => {
    return (
        <div className="min-h-screen px-5 md:px-20 lg:px-48 relative">
            <div className="absolute inset-0 z-0">
                <img className="w-full h-full object-cover" src={skillbackground} alt="Background" />
            </div>
            <div className="relative z-10 flex flex-col">
                <div className="flex items-center justify-center h-36">
                    <img className="h-20" src={mouse} alt="mouse" />
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-full md:h-[calc(100vh-9rem)] flex flex-col items-center justify-center gap-10">
                        <h1 className="font-poppins text-[#10FFE6] text-4xl font-bold">Skills</h1>
                        <div className="border-[1px] w-48 border-[#10FFE6]" />
                        <div className="flex flex-row gap-10 flex-wrap items-center justify-center">
                            <div className="flex flex-col items-center justify-center bg-[#98FAED] w-48 h-24 gap-1 border-l-[10px] border-teal-800 rounded-lg">
                                <img className="h-8" src={monitor} alt="monitor" />
                                <h1 className="font-poppins text-gray-600 text-sm">Web development</h1>
                                <h1 className="font-poppins text-gray-600 text-xs">CSS Tailwind Js ReactJs</h1>
                            </div>

                            <div className="flex flex-col items-center justify-center bg-[#98FAED] w-48 h-24 gap-1 border-l-[10px] border-teal-800 rounded-lg">
                                <img className="h-8" src={phone} alt="phone" />
                                <h1 className="font-poppins text-gray-600 text-sm">Mobile development</h1>
                                <h1 className="font-poppins text-gray-600 text-xs">Android React Native</h1>
                            </div>

                            <div className="flex flex-col items-center justify-center bg-[#98FAED] w-48 h-24 gap-1 border-l-[10px] border-teal-800 rounded-lg">
                                <img className="h-8" src={cpu} alt="cpu" />
                                <h1 className="font-poppins text-gray-600 text-sm">Embedded System</h1>
                                <h1 className="font-poppins text-gray-600 text-xs">Arduino C++</h1>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10 flex-wrap items-center justify-center">
                            <div className="flex flex-col justify-between items-center gap-2 h-16 lg:h-24">
                                <img className="h-10 lg:h-16 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none" src={html} alt="logo" />
                                <span className="font-poppins text-[#98FAED] text-xs md:text-sm font-medium">HTML</span>
                            </div>

                            <div className="flex flex-col justify-between items-center gap-2 h-16 lg:h-24">
                                <img className="h-10 lg:h-16 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none" src={css} alt="logo" />
                                <span className="font-poppins text-[#98FAED] text-xs md:text-sm font-medium">CSS</span>
                            </div>

                            <div className="flex flex-col justify-between items-center gap-2 h-16 lg:h-24">
                                <img className="h-10 lg:h-16 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none" src={tailwind} alt="logo" />
                                <span className="font-poppins text-[#98FAED] text-xs md:text-sm font-medium">Tailwind</span>
                            </div>

                            <div className="flex flex-col justify-between items-center gap-2 h-16 lg:h-24">
                                <img className="h-10 lg:h-16 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none" src={js} alt="logo" />
                                <span className="font-poppins text-[#98FAED] text-xs md:text-sm font-medium">Javascript</span>
                            </div>

                            <div className="flex flex-col justify-between items-center gap-2 h-16 lg:h-24">
                                <img className="h-10 lg:h-16 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none" src={reactIco} alt="logo" />
                                <span className="font-poppins text-[#98FAED] text-xs md:text-sm font-medium">React</span>
                            </div>

                            <div className="flex flex-col justify-between items-center gap-2 h-16 lg:h-24">
                                <img className="h-10 lg:h-16 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none" src={cplusplus} alt="logo" />
                                <span className="font-poppins text-[#98FAED] text-xs md:text-sm font-medium">C++</span>
                            </div>

                            <div className="flex flex-col justify-between items-center gap-2 h-16 lg:h-24">
                                <img className="h-10 lg:h-16 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none" src={arduino} alt="logo" />
                                <span className="font-poppins text-[#98FAED] text-xs md:text-sm font-medium">Arduino</span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
