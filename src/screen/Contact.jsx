import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import mouse from "../assets/mouse.svg"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7ei27hz', 'template_rjkcx28', form.current, 'DEQvIKY6r_BWMck8P')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="w-full px-5 md:px-20 lg:px-48 bg-[#292F36] pb-20">
            <div className="flex items-center justify-center h-36 border-t-[1px] border-white/50">
                <img className="h-20" src={mouse} alt="mouse" />
            </div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 items-center justify-center">
                <h1 className="text-[#10FFE6] font-poppins text-2xl md:text-4xl">Send email and we can talk</h1>
                <input className="w-96 md:w-[30rem] h-10 rounded-md p-5" type="text" name="user_name" placeholder="Name" />
                <input className="w-96 md:w-[30rem] h-10 rounded-md p-5" type="email" name="user_email" placeholder="Email" />
                <textarea className="w-96 md:w-[30rem] h-48 rounded-md p-5" name="message" placeholder="Message" />
                <button className="w-96 md:w-[30rem] h-12 md:h-16 hover:bg-[#444743] bg-[#44474F] text-[#10FFE6] font-poppins font-bold rounded-md tracking-wider text-xl" type="submit" value="Send">Send</button>
            </form>
        </div>
    );
};

export default Contact;
