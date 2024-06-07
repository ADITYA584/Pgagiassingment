// Footer.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <footer className="relative  text-primary_text pt-4 pb-3 xs:pt-8 xs:pb-6 bg-[#FFFFFF1A] w-full md:text-center ">
        <div className="container mx-auto px-4 hidden sm:block">
          <div className="flex justify-around text-left lg:text-left">
            <div className="px-4">
              <div className="flex mb-10 flex-col  ">
                <Image
                  src="/images/Pgagi_logo.png"
                  alt="Company logo"
                  className="h-16  object-contain"
                  width={70}
                  height={70}
                />

                <h4 className="pl-2 text-sm">PG-AGI</h4>
              </div>

              <div className="mb-6 flex items-center ">
                <a
                  className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border sm:mr-4 lg:mr-3 xl:mr-4"
                  href="https://twitter.com/PGAGI123"
                >
                  <TwitterIcon />
                </a>

                <a
                  href="https://www.youtube.com/channel/UCKySzInhClSvewLucjmQmhQ"
                  className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border    sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <YouTubeIcon />
                </a>
                <a
                  href="https://www.linkedin.com/company/pg-agi/"
                  className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border  sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://twitter.com/PGAGI123"
                  className="mr-3 flex h-10 w-10  items-center justify-center rounded-full border sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="   flex flex-col justify-center w-full lg:w-6/12">
              <div className="flex justify-center ">
                <div className="w-full lg:w-4/12  pl-2 ">
                  <span className="block uppercase text-slate-500 text-sm font-semibold mb-2 ">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        href="/aboutus"
                        className=" hover:text-blueGray-800 font-semibold block pb-2 text-sm whitespace-nowrap"
                      >
                        About Us
                      </Link>
                    </li>

                    <li>
                      <a className=" hover:text-blueGray-800 font-semibold block pb-2 text-sm whitespace-nowrap">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className=" hover:text-blueGray-800 font-semibold block pb-2 text-sm whitespace-nowrap"
                        href="https://github.com/PG-AGI"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a className=" hover:text-blueGray-800 font-semibold block pb-2 text-sm whitespace-nowrap">
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4 ">
                  <span className=" uppercase text-slate-400 text-sm font-semibold mb-2 hidden md:block">
                    Other Resources
                  </span>
                  <ul className="list-unstyled hidden md:block">
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-1 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="flex justify-center items-center text-sm text-blueGray-500 font-semibold py-1 whitespace-nowrap">
                Copyright © <span id="get-current-year">2024</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="flex justify-center items-center text-blueGray-500 "
                  target="_blank"
                  whitespace-nowrap="true"
                >
                  {" "}
                  PG-AGI
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* smaller */}
        <div className="container mx-auto sm:hidden text-center">
          <div className="flex flex-col items-center">
            <div className="mb-2 gap-1 flex justify-center items-center">
              <Image
                src="/images/pgagi.png"
                alt="Company logo"
                className=" object-contain"
                width={40}
                height={40}
              />
              <h4 className="text-lg font-extrabold  whitespace-nowrap">
                PG-AGI
              </h4>
            </div>
            <h5 className="text-sm mb-3  whitespace-nowrap">
              Find us on any of these platforms
            </h5>
            {/* Social icons */}
            <div className="mb-4 flex justify-center items-center">
              <a
                href="https://twitter.com/PGAGI123"
                className=" flex h-8 w-8 items-center justify-center rounded-full border border-stroke  hover:border-primary hover:bg-primary hover:text-white mr-4"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.youtube.com/channel/UCKySzInhClSvewLucjmQmhQ"
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke hover:border-primary hover:bg-primary hover:text-white  "
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/pg-agi/"
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke hover:border-primary hover:bg-primary hover:text-white  "
              >
                <LinkedInIcon />
              </a>
              <a
                href=""
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke hover:border-primary hover:bg-primary hover:text-white "
              >
                <InstagramIcon />
              </a>

              {/* Twitter icon */}
              {/* YouTube icon */}
              {/* LinkedIn icon */}
              {/* Instagram icon */}
            </div>
            <span className="block uppercase text-blueGray-500 text-[0.7rem] mb-2 font-semibold whitespace-nowrap">
              Useful Links
            </span>
            <ul className=" flex flex-col list-unstyled">
              <li>
                <Link
                  href="/aboutus"
                  className="text-blueGray-600 hover:text-blueGray-800 block pb-1 text-[0.6rem] whitespace-nowrap"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800  block pb-1 text-[0.6rem] whitespace-nowrap">
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-blueGray-600 hover:text-blueGray-800 block pb-1 text-[0.6rem] whitespace-nowrap"
                  href="https://github.com/PG-AGI"
                >
                  Github
                </a>
              </li>
              <li>
                <a className="text-primary_white hover:text-blueGray-800 block pb-1 text-[0.6rem] whitespace-nowrap">
                  Free Products
                </a>
              </li>
            </ul>
            {/* Useful Links */}
            <span className="block uppercase text-blueGray-500 text-[0.6rem] mb-1 whitespace-nowrap">
              Other Resources
            </span>
            {/* Other Resources */}
          </div>
          <hr className="my-3 border-blueGray-300" />
          <div className="flex justify-center items-center  text-[0.6rem] text-blueGray-500 py-1 whitespace-nowrap">
            Copyright © <span id="get-current-year">2024</span>
            <a
              href="https://www.creative-tim.com/product/notus-js"
              className="text-blueGray-500 "
              target="_blank"
              whitespace-nowrap="true"
            >
              {" "}
              PG-AGI
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
