import React from "react";
import background from "../assets/Background.svg"
import mouse from "../assets/Mouse.svg"
import vector from "../assets/vector.jpg"

const About = () => {
    return (
        <div className="min-h-screen px-5 md:px-20 lg:px-48 relative">
            <div className="absolute inset-0 z-0">
                <img className="w-full h-full object-cover" src={background} alt="Background" />
            </div>
            <div className="relative z-10 flex flex-col">
                <div className="flex items-center justify-center h-36">
                    <img className="h-20" src={mouse} alt="mouse" />
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="h-1/2 w-auto md:w-1/2 md:h-[calc(100vh-9rem)] flex flex-col justify-center gap-10">
                        <h1 className="flex w-[200px] h-[60px] bg-[#44474F] border-4 border-[#10FFE6] rounded-full font-poppins justify-center items-center text-white font-medium text-xl"> About me</h1>
                        <p className="bg-[#44474F] p-10 rounded-3xl font-poppins text-sm text-justify text-white tracking-wide"><span className="text-[#10FFE6]">Computer engineering</span> graduate with a focus on embedded programming and web development. Skilled in <span className="text-[#10FFE6]">c++</span> and <span className="text-[#10FFE6]">web technologies</span> such as <span className="text-[#10FFE6]">React Js</span> and <span className="text-[#10FFE6]">React Native</span>. Seeking a role in creating innovative embedded systems or web/mobile applications. Committed to delivering <span className="text-[#10FFE6]">high-quality, user-friendly solutions</span>.</p>
                    </div>
                    <div className="h-1/2 w-auto md:w-1/2 md:h-[calc(100vh-9rem)] flex items-center justify-center p-10">
                        <img className="h-64 md:h-96 rounded-lg border-2 hidden md:block" src={vector} alt="mouse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
