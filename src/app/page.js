"use client";
import Footer from "./components/footer";
import HeroSection from "./components/Myhero";

import Designbox_data from "./Designbox_data";
import DesignCarousal from "./components/Design_Carousal_section";

import Book from "./components/Bookcall";
import DesignBox from "./components/Design_box";
import React from "react";
import PartnerCompanies from "./components/Partner";
import DisplayBoxes from "./components/DisplayBoxes";

export default function Page() {
  return (
    <div>
      <div className="min-h-screen">
        <HeroSection />
      </div>
      <PartnerCompanies />
      <DesignCarousal />
      <div className="flex my-[10rem] flex-col sm:p-4 justify-center  ">
        <DesignBox />
        <div>
          {Designbox_data.map((item) => {
            return (
              <DisplayBoxes
                key={item.id}
                index={item.id}
                head={item.head}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
      <Book />
      <Footer />
    </div>
  );
}
