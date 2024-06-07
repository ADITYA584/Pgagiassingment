import React from "react";
import Image from "next/image";

const PartnerCompanies = () => {
  // Assuming you have logos stored in your project under the `assets/logos` directory
  const companyLogos = [
    // "/images/hounddog.png", // Replace with actual path to Samsung logo
    "/svgs/ais.svg",
    "/svgs/HX.svg", // Replace with actual path to T-Mobile logo
    "/svgs/Social.svg", // Replace with actual path to Kinteract logo
    "/svgs/CIEK.svg",
    "/svgs/AIXL.svg",
    // "/images/pgagi.png", // Replace with actual path to Thinkpricing logo
  ];

  return (
    // <div className=" pb-8 mt-10 ">
    //   <div className="container mx-auto px-6">
    //     <div className="flex flex-col items-center">
    //       <h2 className="text-xl lg:text-2xl bg-gradient-to-r from-[#6a6eec] to-[#FFFFFF] text-transparent bg-clip-text pb-5 md:pb-0 whitespace-nowrap">
    //         Partnered with Innovators like
    //       </h2>
    //       <div className=" flex-wrap pb-[10rem] pt-3 w-full  flex  justify-center items-center space-x-20 mt-4">
    //         {companyLogos.map((logo, index) => (
    //           <Image
    //             key={index}
    //             src={logo}
    //             alt="Company logo"
    //             width={124}
    //             height={80}
    //             style={{
    //               maxWidth: 124,
    //               height: "auto",
    //             }}
    //             className="h-20 object-contain "
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className=" mb-[4rem] sm:mb-[10rem]">
      <div className="lg:mb-12 mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-xl lg:text-2xl bg-gradient-to-r from-[#6a6eec] to-[#FFFFFF] text-transparent bg-clip-text sm:pb-5 md:pb-0 whitespace-nowrap">
            Partnered with Innovators like
          </h2>
          <div className=" grid  sm:grid-cols-5  md:grid-cols-5 lg:grid-cols-5 gap-6 lg:gap-8 pb-10 md:pb-0 pt-3 w-full justify-center items-center mt-4">
            {companyLogos.map((logo, index) => (
              <div className=" flex justify-center " key={index}>
                <img
                  src={logo}
                  alt="Company logo"
                  className="h-10 sm:h-20  max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCompanies;
