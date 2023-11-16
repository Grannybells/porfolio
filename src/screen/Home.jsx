import React from "react";
import Navbar from "../components/navbar";
import profile from "../assets/profile.jpg"

const Home = () => {
    return (
        <div className="bg-[#292F36] min-h-screen px-5 md:px-20 lg:px-48">
            <Navbar />
            <div className="flex flex-col md:flex-row items-center justify-center py-5">
                <div className="md:w-1/2 lg:w-2/5 lg:h-[calc(100vh-12.5rem)] flex items-center justify-center">
                    <img src={profile} alt="logo" className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-[8px] mb-10" />
                </div>
                <div className="md:w-1/2 lg:w-3/5 lg:h-[calc(100vh-12.5rem)] flex flex-col justify-center items-center md:items-start lg:px-5">
                    <h1 className="font-poppins text-2xl md:text-3xl lg:text-6xl font-medium text-[#98FAED] tracking-wider pb-5 lg:pb-10 text-center md:text-left">Software Engineer</h1>
                    <p className="font-poppins text-lg md:text-xl lg:text-2xl text-white tracking-wider text-center md:text-left">I create & develop applications,</p>
                    <h1 className="font-poppins text-xl md:text-2xl lg:text-4xl text-white font-extrabold tracking-wider leading-relaxed text-center md:text-left">My <span className="text-[#10FFE6]">dream</span> is to create websites that you and the viewers can like.</h1>
                    <span className="font-poppins text-sm md:text-sm lg:text-lg text-white font-thin tracking-wider pt-5 text-center md:text-left">Maybe I'm the one you're looking for?</span>
                    <button className="w-[200px] h-[50px] bg-[#44474F] text-[#10FFE6] font-poppins font-bold rounded-full tracking-wider text-xl mt-10">Contact Me</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
