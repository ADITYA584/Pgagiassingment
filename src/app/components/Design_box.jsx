import GlassEffect from "./Glasseffect";

const DesignBox = () => {
  return (
    <GlassEffect>
      <div className=" text-primary_text w-full h-[200px] sm:h-[420px] font-bold flex justify-center items-center ">
        <div className="  hidden sm:block absolute bg-custom-svg bg-no-repeat  bg-center h-full w-full md:flex items-center justify-center animate-spin transition  "></div>
        <h1 className=" z-10 text-2xl sm:text-[2rem] md:text-4xl lg:6xl text-center sm:leading-[2rem] md:leading-[4rem] bg-gradient-to-r from-[#6a6eec] to-[#FFFFFF] text-transparent bg-clip-text pb-5 md:pb-0 whitespace-nowrap">
          {"Here's How we Make Our"} <br /> Product Grow
        </h1>
      </div>
    </GlassEffect>
  );
};

export default DesignBox;
