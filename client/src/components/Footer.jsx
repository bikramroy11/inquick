import React from "react";
import {assets, footer_data} from "../assets/assets";
import {useNavigate} from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/300 text-gray-500">
        
        {/* Logo & Description */}
        <div className="">
          <img onClick={()=> navigate("/")} src={assets.inQuick} alt="logo" className='w-32 sm:w-44'/>
          <p className="max-w-[700px] mt-6">
                inQuick is your go-to platform for staying ahead in the fast-paced world of technology. We bring you the latest tech updates, insightful guides, and practical knowledge—from web development and AI to cybersecurity and data science—so you can learn, grow, and stay relevant in an ever-evolving digital landscape.
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section, index)=>(
            <div key={index}>
                <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                <ul className="text-sm space-y-1">
                    {section.links.map((link, i)=>(
                        <li key={i}>
                            <a href="#" className="hover:underline transition">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
          ))}
        </div>

      </div>

      <div className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © inQuick. By Bikram Roy – All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
