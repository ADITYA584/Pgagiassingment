
import { jsx } from "react/jsx-runtime";
import GlassEffect from "./Glasseffect";

const DisplayBoxes = ({ index, head, text, key }) => {

    return (
      <GlassEffect>
        <div
          key={key}
          className=" relative flex flex-col justify-center  w-full h-[300px]  sm:h-[420px]"
        >
          {/* <span
            className={
              " hidden md:block absolute bg-custom-svg bg-no-repeat w-[400px] bg-center h-full  animate-spin transition " +
              `${index % 2 == 0 ? "left-0" : "right-0"}`
            }
          ></span> */}

          <div
            className={
              "  absolute top-0 p-8 sm:p-10 md:p-16 md:pt-14 lg:p-16 " +
              `${index % 2 == 0 ? "sm:right-0" : "sm:left-0"}`
            }
          >
            <span className=" relative text-[1.5rem] sm:text-[1.9rem]  md:text-[2rem] lg:text-[3rem] font-bold text-transparent bg-gradient-to-r from-[#6a6eec] to-[#FFFFFF]  bg-clip-text md:pb-0 whitespace-nowrap">
              PHASE
              <span
                className=" opacity-[0.1] text-[3rem] sm:text-[4.5rem] top-[-1.2rem] sm:top-[-2.2rem] sm:left-[5.7rem]  absolute md:top-[-4.8rem] md:left-[6rem] md:text-[8rem] lg:top-[-7.8rem]
            lg:left-[7rem] lg:text-[12rem] bg-white  bg-clip-text md:pb-0 whitespace-nowrap"
              >
                {index + 1}
              </span>
            </span>
          </div>

          <div className="flex flex-col z-10  text-primary_text">
            <h1
              className={
                "  text-xl sm:text-3xl md:text-4xl flex flex-col  md:px-[4rem] lg:px-[6rem] w-[100%] text-center p-4  " +
                ` ${index % 2 == 0 ? "md:text-end" : "md:text-start"}`
              }
            >
              {head}
              <p className="text-sm  sm:text-md md:text-lg">{text}</p>
            </h1>
          </div>
        </div>
      </GlassEffect>
    );
  };

  export default DisplayBoxes;
