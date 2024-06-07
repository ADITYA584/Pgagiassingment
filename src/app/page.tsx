"use client";

import Footer from "./components/footer";
import HeroSection from "./components/Myhero";
import Designbox_data from "./Designbox_data";
import DesignCarousal from "./components/Design_Carousal_section";
import Book from "./components/Bookcall";
import DesignBox from "./components/Design_box";
import React, { useState } from "react";
import Classes from "./page.module.scss";
import PartnerCompanies from "./components/Partner";
import DisplayBoxes from "./components/DisplayBoxes";
import { Lottie } from "xtreme-ui";
import { useEffect, useRef } from "react";
import Image from "next/image";
export default function Page() {
  

  const segmentRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
      window.addEventListener("scroll", () => {
        const scroll = window.scrollY;
        if (!segmentRef.current) return;
        const rectSegment = segmentRef.current?.getBoundingClientRect();
        const offset = Math.round(rectSegment.top + scroll);
        const blob = document.querySelector(`.${Classes.blob}`) as HTMLDivElement;
        if (!blob) return;
        const scrollY = (scroll - offset) / window.innerHeight;
        const percent = (scrollY - Math.floor(scrollY)) * 100;
        let pos;

        if (scroll >= offset && scroll <= offset + window.innerHeight * 5) {
          if (scrollY <= 1) pos = 50 - percent / 2;
          else if (Math.floor(scrollY % 2) === 0) pos = 100 - percent;
          else pos = percent;
          blob.style.top = "50%";
          blob.style.left = `${pos}%`;
        }
        if (
          scroll >= offset + window.innerHeight * 5 &&
          scroll <= offset + window.innerHeight * 6
        ) {
          pos = percent;
          if (percent > 80) blob.style.top = `${50 + (percent - 80)}%`;
          else blob.style.top = "50%";
          blob.style.left = `${pos}%`;
        }
      });
    }, []);

  return (
    <div className={Classes.main} >
      <div className="">
        <HeroSection />
      </div>
      <PartnerCompanies />
      <DesignCarousal />
      <div className="flex my-[5rem] sm:my-[7rem] flex-col sm:p-4 justify-center  ">
        <DesignBox />
        <div className={Classes.segmentSection}>
        <div className={Classes.lottieWindow}>
            <Image alt="Sphere" className={` animate-spin transition ${Classes.blob}`} src="/svgs/glasssphere.svg" width={250} height={250} />
				</div>
          <div ref={segmentRef} className={Classes.segmentList}>
            {Designbox_data.map((item) => (
              <DisplayBoxes
                key={item.id}
                index={item.id}
                head={item.head}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
      <Book />
      <Footer />
    </div>
  );
}
