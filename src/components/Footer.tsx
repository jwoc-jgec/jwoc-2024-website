"use client";
import Image from "next/image";
import "../css/font.css"

import React, { useState } from "react";
import { Inter } from "next/font/google";
import { useToast } from "./ui/use-toast";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import '../css/footer.css'
import '../css/footers.css'
import logo from '../assets/jwoc_logos/jwoc-2024.svg';
import { useForm, ValidationError } from "@formspree/react";

// const jetbrains = Inter({subsets:["latin"]})
const inter = Inter({ subsets: ["latin"] });

const Footer = () => {

  const { toast } = useToast();

  const [state, formSubmit] = useForm("xyyqrddr");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // if (state.succeeded) {
  // return <p>Thanks for joining!</p>;
  // toast({
  //   title: "Message Sent Successfully",
  //   description: "Thank you for Contact Us."
  // })
  //   setFormData({ name: "", email: "", message: "" });
  // }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Add your form submission logic here
    await formSubmit(formData);
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for Contact Us."
    })
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <>
      <footer className="Footerstyles__StyledFooter-sc-r8jcrk-0 foot1">
        <div className="Containerstyles__StyledContainer-sc-10feieu-0 foot2">
          <div className="Footerstyles__StyledFooterContainer-sc-r8jcrk-1 foot3">
            <div className="Footerstyles__StyledFooterBackground-sc-r8jcrk-7 foot4"></div>
            <div className="Footerstyles__StyledFooterLogo-sc-r8jcrk-2 foot5">
              <img src={logo.src} className="jwoc" alt="JWoC" />
              <p>© jwoc 2024 <br /> All Rights Reserved.</p>
            </div>
            <div className="Footerstyles__StyledFooterContent-sc-r8jcrk-3 foot6">
              <nav aria-label="Footer" className="Footerstyles__StyledFooterLinks-sc-r8jcrk-4 foot7">
                <div className="Footerstyles__StyledFooterLinksColumn-sc-r8jcrk-5 foot8">
                  <h3 className="Footerstyles__StyledFooterLinksTitle-sc-r8jcrk-6 foot9">Archive</h3>
                  <ul>
                    <li><a href="https://jwoc-2k23.vercel.app/" target="_blank" className="footer-links py-1">JWoC 2023</a></li>
                    <li><a href="https://jwoc-2k22.vercel.app/" target="_blank" className="footer-links py-1">JWoC 2022</a></li>
                    <li><a href="https://jwoc-2k21.vercel.app/" target="_blank" className="footer-links py-1">JWoC 2021</a></li>
                    <li><a href="https://jwoc-2k20.vercel.app/" target="_blank"  className="footer-links py-1">JWoC 2020</a></li>

                  </ul>
                </div>



                <div className="Footerstyles__StyledFooterLinksColumn-sc-r8jcrk-5 foot8">
                  <h3 className="Footerstyles__StyledFooterLinksTitle-sc-r8jcrk-6 foot9">Contact us</h3>
                  <div >
                    <form onSubmit={handleSubmit} className="space-y-4 text-black">
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
                        {/* <ValidationError className="text-red-400"
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      /> */}
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
                        {/* <ValidationError className="text-red-400"
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    /> */}
                      </div>
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="bg-white text-blue-600 font-bold transition-all duration-1000 ease-in-out px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:shadow-outline-blue"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>








                <div className="Footerstyles__StyledFooterLinksColumn-sc-r8jcrk-5 foot8">

                  <h3 className="Footerstyles__StyledFooterLinksTitle-sc-r8jcrk-6 foot9">Connect with us</h3>
                  <ul>
                    <li  >
                      <a href="https://www.linkedin.com/company/jwoc/">
                        <div className="flex flex-row gap-3 items-center"><FaLinkedin fontSize="2em" />jwoc</div>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/jwoc-jgec">
                        <div className="flex flex-row gap-3 items-center"><FaGithub fontSize="2em" />jwoc-jgec</div>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/TeamJWOC">
                        <div className="flex flex-row gap-3 items-center"><FaXTwitter fontSize="2em" />TeamJWoC</div>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:contact.jwoc@gmail.com">
                        <div className="flex flex-row gap-3 items-center"><MdMail fontSize="2em" />contact.jwoc@gmail.com</div>
                      </a>
                    </li>
                  </ul>
                </div>


              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
