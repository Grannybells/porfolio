import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import mouse from "../assets/Mouse.svg"

const Contact = () => {

    const [error, setError] = useState(null); // Holds any error messages
    const [name, setName] = useState(''); // Holds any error messages
    const [email, setEmail] = useState(''); // Holds any error messages
    const [message, setMessage] = useState(''); // Holds any error messages
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            setError('Please enter the following fields');
            alert('Please enter the following fields');
            return;
        }

        emailjs.sendForm('service_7ei27hz', 'template_rjkcx28', form.current, 'DEQvIKY6r_BWMck8P')
            .then((result) => {
                name,
                    email,
                    message,
                    console.log(result.text);
                setError('Email sent, thank you!');
                alert('Email sent, thank you!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className="w-full px-5 md:px-20 lg:px-48 bg-[#292F36] pb-20">
            <div className="flex items-center justify-center h-36 border-t-[1px] border-white/50">
                <img className="h-20" src={mouse} alt="mouse" />
            </div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 items-center justify-center">
                {error && <div className=" text-red-500">{error}</div>}
                <h1 className="text-[#10FFE6] font-poppins text-2xl md:text-3xl">Send me an email and we can talk!</h1>
                <input className="w-96 md:w-[30rem] h-10 rounded-md p-5" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} selected={name} />
                <input className="w-96 md:w-[30rem] h-10 rounded-md p-5" type="email" name="user_email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} selected={email} />
                <textarea className="w-96 md:w-[30rem] h-48 rounded-md p-5" name="message" placeholder="Message" onChange={(e) => setMessage(e.target.value)} selected={message} />
                <button className="w-96 md:w-[30rem] h-12 md:h-16 hover:bg-slate-300 bg-[#44474F] text-[#10FFE6] hover:text-[#44474F] font-poppins font-bold rounded-md tracking-wider text-xl" type="submit" value="Send">Send</button>
            </form>
        </div>
    );
};

export default Contact;
