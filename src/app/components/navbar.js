"use client";

import React, { useState } from "react";
import Calendlylink from "../buttons/callbutton";
import Image from "next/image";
import Link from "next/link";
import Hoverwhatwedo from "./OnhoverComponents/Hoverwhatwedo";
import Hoverwhoweare from "./OnhoverComponents/Hoverwhoweare";

export default function Navbar() {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [Showwhatwedo, setShowwhatwedo] = useState(false);
  const [Showwhoweare, setShowwhoweare] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleAboutUs = () => {
    if (!showAboutUs) {
      setShowAboutUs(true);

      setShowwhatwedo(false); // Close Solutions section
      setShowwhoweare(false); // Close AI Resources section
      setSelectedOption("About Us");
    }
  };

  const togglewhatwedo = () => {
    setShowwhatwedo(!Showwhatwedo);
    setShowAboutUs(false); // Close About Us section
    setShowwhoweare(false); // Close AI Resources section
    setSelectedOption("whatwedo");
  };

  const toggleWhoweare = () => {
    setShowwhoweare(!Showwhoweare);
    setShowAboutUs(false); // Close About Us section
    setShowwhatwedo(false); // Close Solutions section
    setSelectedOption("whoweare");
  };

  return (
    <div className="fixed text-[0.7rem] sm:text-lg bg-gradient-to-r from-[#160C30]   to-[#000000] top-0 w-full  z-10 ">
      {/* Thin horizontal blue line */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30px",
          width: "100%",
        }}
      >
        <span style={{ marginRight: "10px" }} className="text-primary_text">
          AI Calling Agent -
        </span>
        <div>
          <Link
            href="/aboutus"
            style={{ fontWeight: "bold" }}
            className="text-primary_text"
          >
            Learn more
          </Link>
        </div>
      </div>

      <div className="  flex justify-evenly md:px-8 lg:px-12 xl:px-24 ">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center xl:pl-16 md:pl-10">
          <div className="flex-shrink-0  ">
            <Image
              src="/images/pgagi_logo.png"
              alt="Company logo"
              className=" w-[55px] h-[55px] object-contain"
              width={60}
              height={60}
            />
          </div>
          <div className="text-[0.6]  text-primary_text">PG-AGI</div>
        </div>
        {/* Navbar links */}
        <div className="header-links contents text-[0.6rem]  sm:text-lg text-primary_text ">
          <ul className="flex items-center ml-4  lg:ml-5 xl:ml-2 lg:mr-8">
            <li className="p-2.5 xl:p-6">
              <button
                onMouseEnter={() => togglewhatwedo("whatwedo")}
                className="focus:outline-none flex items-center"
              >
                <span className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#000AFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                  What we do
                </span>
              </button>
            </li>
            <li className="p-2.5 xl:p-6">
              <button
                onMouseEnter={() => toggleAboutUs("About Us")}
                className="focus:outline-none flex items-center"
              >
                <span className="relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#000AFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                  What we think
                </span>
              </button>
            </li>
            <li className="p-2.5 xl:p-6">
              <button
                onMouseEnter={() => toggleWhoweare("whoweare")}
                onClick={toggleWhoweare}
                className="focus:outline-none flex items-center"
              >
                <span className=" relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#000AFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">
                  Who we are
                </span>
              </button>
            </li>
          </ul>
        </div>
        {/* Search bar and button */}
        <div className=" md: lg:-ml-12 flex items-center gap-5 ">
          <Calendlylink />
        </div>
      </div>

      {/* AI Resources Section */}
      {Showwhoweare && <Hoverwhoweare setShowhoweare={setShowwhoweare} />}

      {Showwhatwedo && <Hoverwhatwedo setShowwhatwedo={setShowwhatwedo} />}

      {/* Industries Section */}

      {/* About Us Section */}
      {showAboutUs && (
        <div
          className="bg-[#160C30] text-primary_text hidden md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24"
          onMouseLeave={() => setShowAboutUs(false)}
        >
          <section className=" body-font mt-0">
            <div className="container px-5 py-12 mx-auto">
              <div className="flex flex-wrap items-start justify-center -mx-8 -my-8">
                {/* <div className="py-8 px-8  flex items-start justify-center" style={{ marginLeft: '1rem', padding: '2rem', maxWidth: '400px', borderRadius: '8px' }} onMouseEnter={() => toggleAboutUs('Our core principles and beliefs')}>
                        <div className="h-full flex-grow">
                            <div className="flex hover:bg-[#F5F6FC]  mb-6 group items-center">
                                <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-3" style={{ marginRight: '10px' }}>Our Story and why Us</h1>
                                <img
                                    src="/images/rightarrow.png"
                                    alt="Arrow"
                                    style={{ width: '20px', height: '20px', transition: 'transform 0.1s' }}
                                    className='group-hover:translate-x-1'
                                />
                            </div>
                        </div>
                    </div> */}
                <div
                  className="py-8 px-8 flex items-start justify-center"
                  style={{
                    marginLeft: "1rem",
                    padding: "2rem",
                    maxWidth: "400px",
                    borderRadius: "8px",
                  }}
                  onMouseEnter={() =>
                    toggleAboutUs("Our core principles and beliefs")
                  }
                >
                  <div className="h-full flex-grow">
                    <div className="flex hover:rounded-lg p-2 hover:bg-[#D9D9D930] mb-6 group items-center">
                      <Link
                        href="/aboutus"
                        className="title-font text-md font-bold  mb-3"
                        style={{ marginRight: "10px" }}
                      >
                        Our core principles and beliefs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
