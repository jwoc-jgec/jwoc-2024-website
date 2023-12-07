"use client"
import Image from "next/image";
import React,{useState} from "react";
import { Inter } from "next/font/google";
import {Linkedin,Mail} from 'lucide-react';

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail, MdMail } from "react-icons/md";
import '../css/footer.css'
import logo from '../assets/jwoc_logos/jwoc_sticker.svg';
import { useForm, ValidationError } from "@formspree/react";

// const jetbrains = Inter({subsets:["latin"]})
const inter = Inter({ subsets: ['latin'] })


const Footer = () => {

  const [state, handleSubmit] = useForm("mleyqgkp");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  // const handleSubmit = (e:any) => {
  //   e.preventDefault();
  //   // Add your form submission logic here
  //   console.log('Form submitted:', formData);
  // }

  return (
    <>
  
  <footer className="footer-sec">
    <div className="main">
      
      
      <div className="logo row">
        <div className="footer-header">
          <img src={logo.src} className="jwoc" alt="JWoC"/>
        </div>
          <h5>JWoC</h5>
        <div className="logo-des">
          <p>JGEC Winter of Code</p>
          
          {/* <a href="#" className="btn-know">Know More</a> */}
        </div>
        
        
      </div>
      
      
  
      
      
      <div className="link row">
        <div className="footer-header">
          <h3 className="font-bold text-[#787a91]">Archive</h3>
        </div>
        
        <div className="link-des">
          <a href="#" className="footer-links">Team Archive</a>
          <a href="https://jwoc-2k23.vercel.app/" className="footer-links">JWoC 2023</a>
          <a href="https://jwoc2k22.vercel.app/" className="footer-links">JWoC 2022</a>
          <a href="https://jwoc-2k21.vercel.app/" className="footer-links">JWoC 2021</a>
          {/* <a href="#" className="footer-links">Contact</a> */}
        </div>
        
      </div>
      
      
      <div className="newsletter row">
        <div className="newsletter-des">
          
        <div className=" rounded-lg p-6 w-72 text-center">
    <h2 className="text-2xl font-bold text-[#787a91] mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <div className="flex gap-3">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none "
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none "
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none "
              // rows="3"
              required
            ></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            // disabled={state.submitting}
            className="bg-white text-blue-600 font-bold transition-all duration-1000 ease-in-out px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:shadow-outline-blue"
          >
            Send
          </button>
        </form>
        </div>
          <div className="icons">
          <a href="https://www.linkedin.com/company/jwoc/"><FaLinkedin fontSize="2em" /></a>
          <a href="https://github.com/jwoc-jgec"><FaGithub fontSize="2em" /></a>
          <a href="https://twitter.com/TeamJWOC"><FaXTwitter fontSize="2em" /></a>
          <a href="mailto:contact.jwoc@gmail.com"><MdMail fontSize="2em" /></a>
            
          </div>
        </div>
      </div>
      
      
    </div>

  </footer>

    </>
  );
};

export default Footer;
