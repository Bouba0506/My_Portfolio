import React from "react";
import { Mail,Phone, Linkedin, Facebook, Instagram } from 'lucide-react';
const footer = ["Home", "About", "Contact", "Career"];

const reseau = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/bouba_bah224/",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/boubacar-bah-a5b849278/",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100004883298025",
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/+212695632657",
  },
];

const Footer = () => {
  return (
    <div className="mt-10   bg-[#201b1b73] w-full text-white  ">
      <div className="flex flex-wrap items-center md:px-16 px-6 py-4 justify-between w-full">
        <h1 className="text-2xl font-bold">
          <span className="text-red-500">My</span> Portfolio
        </h1>

        <div className="flex flex-col gap-6 items-center">
          {footer.map((item, index) => (
            <div key={index} className="text-xl font-bold">
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-6">
          {reseau.map((items, ind) => (
            <a key={ind} href={items.href} className="text-xl font-bold">
              {items.name}
            </a>
          ))}
        </div>

          <div className="flex flex-col items-start justify-center gap-2">
           <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-[#9b061c] hover:scale-125 transition-all duration-300 rounded-full flex items-center justify-center">
              <Mail size={20}/>
            </span>
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold">Email</h1>
              <a href="mailto:Bouba.Sisu@proton.me" className="text-xs">
                Bouba.Sisu@proton.me
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-[#9b061c] hover:scale-125 transition-all duration-300 rounded-full flex items-center justify-center">
              <Phone size={20}/>
            </span>
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold">Phone</h1>
              <a href="http://Wa.me/+212695632657" className="text-xs">+212 695 632 657 </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-[#9b061c] hover:scale-125 transition-all duration-300 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail-icon lucide-mail"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </span>
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold">Location</h1>
              <p className="text-xs">1465 Tilila, Agadir, Maroc</p>
            </div>
          </div>



<div className="flex flex-col ml-7 mt-8">
            <h2>Connect With Me</h2>
            <div className="flex items-center mt-2 gap-2">
              <a href="https://www.linkedin.com/in/boubacar-bah-a5b849278/">
                <Linkedin size={16}/>
              </a>
              <a href="https://www.instagram.com/bouba_bah224/">
                <Instagram size={16}/>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100004883298025">
                <Facebook size={16}/>
              </a>
            </div>
          </div>

          </div>

      </div>
      <div className="py-2 flex items-center justify-center w-full">
        <p className="text-xs text-center">Created By Bah Boubacar &copy; 2025</p>
      </div>
    </div>
  );
};

export default Footer;
