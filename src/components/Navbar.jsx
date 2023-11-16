import logo from "../assets/Granny.svg"
import linkedIn from "../assets/linkedIn.svg"
import instagram from "../assets/instagram.svg"
import github from "../assets/github.svg"
import downloadbox from "../assets/download-box.svg"
import menuIcon from "../assets/menu.svg"
import React, { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isButtonHidden, setIsButtonHidden] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsButtonHidden(!isButtonHidden);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setIsButtonHidden(false);
    };


    return (
        <div className="flex flex-row items-center justify-between border-white/50 border-b-[1px] py-8">
            <img src={logo} alt="logo" />

            <button
                onClick={toggleMenu}
                className={`md:hidden block text-white focus:outline-none ${isButtonHidden ? 'hidden' : ''}`}
            >
                <img src={menuIcon} alt="linkedIn" />
            </button>

            {isOpen && (
                <button
                    onClick={closeMenu}
                    className="md:hidden block text-white focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            )}

            <div className={`md:flex md:flex-row md:gap-6 md:items-center ${isOpen ? 'block' : 'hidden'} md:mt-0 flex flex-col gap-3`}>
                <div className="flex flex-row items-center gap-2">
                    <img src={linkedIn} alt="linkedIn" />
                    <a className="text-white text-xs font-poppins">LinkedIn</a>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <img src={instagram} alt="instagram" />
                    <a className="text-white text-xs font-poppins">Instagram</a>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <img src={github} alt="github" />
                    <a className="text-white text-xs font-poppins">Github</a>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <img src={downloadbox} alt="downloadbox" />
                    <a className="text-white text-xs font-poppins">Download CV</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
