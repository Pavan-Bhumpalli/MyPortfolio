import React, { useRef } from 'react';
import { FaLinkedin, FaPhoneSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import emailjs from 'emailjs-com';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pjka4ji', 'template_gfg75sq', e.target, 'PxhkfZke3knRGF9es')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again!");
      });

    e.target.reset(); // Clears the form after sending
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-around p-6 bg-black" id="contact">
      <form className="w-full md:w-1/2 bg-[#484747] p-4 rounded shadow-md" onSubmit={sendEmail}>
        <h1 className="text-3xl font-bold text-white">
          <span style={{ textDecoration: "none", borderBottom: "3px solid aqua", borderRadius: "2px" }}>CONTACT</span>
        </h1>

        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-bold mb-2 pt-2" htmlFor="name">Name</label>
          <input 
            className="shadow  border rounded w-full py-2 px-3 text-gray-700  " 
            id="name" 
            name="name" 
            type="text" 
            placeholder="Your name" 
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input 
            className="shadow  border rounded w-full py-2 px-3 text-gray-700  " 
            id="email" 
            name="email" 
            type="email" 
            placeholder="Your email" 
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
          <input 
            className="shadow  border rounded w-full py-2 px-3 text-gray-700  " 
            id="subject" 
            name="subject" 
            type="text" 
            placeholder="Subject" 
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea 
            className="shadow  border rounded w-full py-2 px-3 text-gray-700  " 
            id="message" 
            name="message" 
            placeholder="Your message" 
            rows="3"
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button 
            className="bg-[#00FFFF] hover:bg-[#1b8c8c] hover:text-white text-black font-bold py-2 px-4 rounded " 
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Right side contact links */}
      <div className="flex flex-col gap-y-3 items-start justify-center">
        <div className='flex items-center'>
          <AiFillInstagram className='text-white w-8 h-8 pt-1 pr-1'/>
          <a href="https://www.instagram.com/pavanbhumpalli1/" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-lg hover:text-gray-100">
            @pavanbhumpalli
          </a>
        </div>
        <div className='flex items-center'>
          <FaLinkedin className='text-white w-7 h-7 pr-1'/>
          <a href="https://www.linkedin.com/in/pavan-bhumpalli-6ab593241/" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-lg hover:text-gray-100">
            @pavan-bhumpalli-6ab593241
          </a>
        </div>
        <div className='flex items-center'> 
          <IoMdMail className='text-white w-7 h-7 pr-1'/>
          <a href="mailto:pavanbhumpalli@gmail.com" className="text-gray-500 text-lg hover:text-gray-100">
            pavanbhumpalli@gmail.com
          </a>
        </div>
        <div className='flex items-center'>
          <FaPhoneSquare className='text-white w-7 h-7 pr-1'/>
          <a href="tel:+919908152921" className="text-gray-500 text-lg hover:text-gray-100">
            9908152921
          </a>
        </div>
        <div>
          <button className='bg-[#00FFFF] text-black rounded-lg shadow-xl p-2 font-semibold hover:text-gray-100 hover:bg-[#176363]'>
            <a href="https://drive.google.com/file/d/1pwf7XLRWHpe_Tlurv_RFlylqf8N5VXVP/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Get My Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
