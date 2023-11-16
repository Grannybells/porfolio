import React from "react";
import mouse from "../assets/mouse.svg"
import github from "../assets/github.svg"


import project1 from "../assets/Frame 1.png"

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
                        <div className="w-full md:w-1/2 flex items-center justify-end">
                            <img className="h-48 md:h-80" src={project1} alt="github" />
                        </div>
                        <div className="w-full md:w-1/2 p-5 flex flex-col gap-5 items-start">
                            <h1 className="font-poppins text-2xl text-[#10FFE6] font-bold">Project 1</h1>
                            <div className="border-[1px] w-48" />
                            <p className="font-poppins text-sm text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta lorem laoreet purus viverra, ut facilisis elit consequat. Nullam mollis, dui et laoreet vestibulum, dui arcu tincidunt libero, ut auctor.</p>
                            <div className="flex flex-row gap-5">
                                <img className="h-10" src={github} alt="github" />
                                <img className="h-10" src={github} alt="github" />
                                <img className="h-10" src={github} alt="github" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-row">

                        <div className="w-full md:w-1/2 p-5 flex flex-col gap-5 items-end">
                            <h1 className="font-poppins text-2xl text-[#10FFE6] font-bold text-right">Project 1</h1>
                            <div className="border-[1px] w-48" />
                            <p className="font-poppins text-sm text-white/80 text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta lorem laoreet purus viverra, ut facilisis elit consequat. Nullam mollis, dui et laoreet vestibulum, dui arcu tincidunt libero, ut auctor.</p>
                            <div className="flex flex-row gap-5">
                                <img className="h-10" src={github} alt="github" />
                                <img className="h-10" src={github} alt="github" />
                                <img className="h-10" src={github} alt="github" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-start items-center">
                            <img className="h-48 md:h-80" src={project1} alt="github" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
