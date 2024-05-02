"use client";
import React, { useState } from "react";
import Image from "next/image";
import Calousal_card from "./Calousal_card";
import ServicesData from "./Servicedata";

const Design = (props) => {
  const scrollLeft = () => {
    const container = document.querySelector(".carousal");
    container.scrollBy({
      left: -294, // Adjust scroll distance based on card width
      behavior: "smooth",
    });
    // Check if scroll reached the beginning, then scroll to the end
    if (container.scrollLeft === 0) {
      container.scrollBy({
        left: container.scrollWidth, // Scroll to the end
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    const container = document.querySelector(".carousal");
    container.scrollBy({
      left: 294, // Adjust scroll distance as needed
      behavior: "smooth",
    });
    // Check if scroll reached the end, then scroll to the beginning
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollBy({
        left: -container.scrollWidth, // Scroll to the beginning
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" text-primary_text  ">
      <div className="flex flex-col items-center justify-center ">
        <div className="w-full lg:w-2/5">
          <h1 className="text-3xl sm:text-5xl  font-extrabold text-center mb-20">
            Whats's Trending
          </h1>
        </div>
      </div>
      <div
        style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}
        className=" w-[86%] m-auto sm:m-auto p-4 overflow-scroll carousal "
      >
        <div className="flex gap-8">
          {" "}
          {ServicesData.map((item, index) => (
            <Calousal_card key={index} service={item} />
          ))}
        </div>
      </div>
      <div className="controls flex justify-center mt-5 gap-2">
        <button
          onClick={scrollLeft}
          className=" border-2 border-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 duration-300 rounded-full"
        >
          <p>{`<`}</p>
        </button>
        <button
          onClick={scrollRight}
          className="border-2 border-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 duration-300 rounded-full"
        >
          <p>{`>`}</p>
        </button>
      </div>
    </div>
  );
};

export default Design;
