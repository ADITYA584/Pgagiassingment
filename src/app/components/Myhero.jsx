"use client";
import { TypeAnimation } from "react-type-animation";
import Mobilenavbar from "./mobilenavbar"; // Import the Mobilenavbar component
import Calendlylink from "../buttons/callbutton"; // Import the CalendlyLink component
import Image from "next/image";
import heroImage from "../../../public/images/hero-image.png";
import React, { useState } from "react";

// const Mysvg = () => {
//   return (
//     <svg
//       fill="#000000"
//       viewBox="0 0 24 24"
//       id="research"
//       data-name="Flat Line"
//       xmlns="http://www.w3.org/2000/svg"
//       className="icon flat-line mx-1 -ml-1"
//       width={30}
//       height={25}
//     >
//       <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//       <g
//         id="SVGRepo_tracerCarrier"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       ></g>
//       <g id="SVGRepo_iconCarrier">
//         <circle
//           id="secondary"
//           cx="8"
//           cy="10"
//           r="3"
//           style={{ fill: "#2ca9bc", strokeWidth: 2 }}
//         ></circle>
//         <path
//           id="primary"
//           d="M17,12v5m-4,0V15M3,15l2.83-2.83M8,7a3,3,0,1,0,3,3A3,3,0,0,0,8,7Z"
//           style={{
//             fill: "none",
//             stroke: "#000000",
//             strokeLinecap: "round",
//             strokeLinejoin: "round",
//             strokeWidth: 2,
//           }}
//         ></path>
//         <path
//           id="primary-2"
//           data-name="primary"
//           d="M8,3H20a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V17"
//           style={{
//             fill: "none",
//             stroke: "#000000",
//             strokeLinecap: "round",
//             strokeLinejoin: "round",
//             strokeWidth: 2,
//           }}
//         ></path>
//       </g>
//     </svg>
//   );
// };

export default function HeroSection() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className=" text-primary_text h-[100vh]  max-w-screen-xl mx-auto px-4  ">
      {/* Heading and Navbar button */}

      <div className="flex items-center justify-center   h-[100%]  w-full md:flex-col  space-x-2 text-primary_text">
        <div className="flex flex-col w-full  justify-center   mt-5 md:w-[55%] md:ml-8 lg:ml-12 xl:ml-16">
          {/* Content */}
          <div className="  bg-gradient-to-r from-[#6a6eec] to-[#FFFFFF] text-transparent bg-clip-text font-bold text-center text-sm md:text-md leading-normal md:mb-2 mt-2">
            {" "}
            Start your AI journey with us
          </div>
          <div className="font-extrabold self-center  sm:text-xl lg:text-2xl xl:text-4xl leading-normal mb-8 ">
            Your Go-To AI Consultancy for
            <div className=" text-center md:pt-1 lg:pt-5">
              {" "}
              <TypeAnimation
                sequence={[
                  "AI MVP Design",
                  1000,
                  " AI Research",
                  1000,
                  " Idea Validation",
                  1000,
                  "AI Solutions",
                  1000,
                  "AI Products",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  display: "inline-block",
                  background:
                    "linear-gradient(90deg, #000AFF 0%, #000699 100%); -webkit-background-clip: text; color: transparent;",
                }}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="w-full flex sm:flex sm:justify-evenly xs:flex xs:justify-evenly  sm-gap-4  xs:text-[16px]  md:flex-row  md:py-1 md:px-6 md:justify-center  items-center mt-0 lg:gap-6 md:gap-6">
            <div className="md:w-auto ">
              <Calendlylink />
            </div>
            <button className="  border border-primary text-[0.8rem] sm:text-lg font-bold p-1 sm:py-2 sm:px-2 rounded-lg  items-center  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <p className=" sm:w-[10rem]">See case studies</p>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {isNavbarOpen && (
        <Mobilenavbar closeNavbar={() => setIsNavbarOpen(false)} />
      )}
    </div>
  );
}
