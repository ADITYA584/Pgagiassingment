"use client";
import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

const Calendlylink = () => {
    // Initialize state to hold the root element
    const [rootElement, setRootElement] = useState(null);
    const url = "https://calendly.com/vivek-_ou/30min";

    useEffect(() => {
        // Dynamically set the root element after the component mounts
        setRootElement(document.getElementById("root"));
    }, []);

    return (
      <div className="App" id="root">
        <div className="bg-primary border-2 text-[0.6rem] sm:text-lg border-[#3237C0] text-white font-bold px-2  py-2   rounded-lg inline-flex items-center gap-3 shadow-lg transition duration-300 ease-in-out transform hover:bg-[#3237C0] cursor-pointer">
          {rootElement && (
            <PopupButton
              url={url}
              rootElement={rootElement}
              text="Book a Call"
            ></PopupButton>
          )}
        </div>
      </div>
    );
};

export default Calendlylink;

