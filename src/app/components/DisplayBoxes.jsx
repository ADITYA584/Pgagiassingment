import GlassEffect from "./Glasseffect";

const DisplayBoxes = ({ index, head, text, key }) => {
  return (
    <GlassEffect>
      <div
        key={key}
        className=" relative flex flex-col justify-center  w-full   h-[420px]"
      >
        <span
          className={
            " hidden md:block absolute bg-custom-svg bg-no-repeat w-[400px] bg-center h-full  animate-spin transition " +
            `${index % 2 == 0 ? "left-0" : "right-0"}`
          }
        ></span>

        <div
          className={
            "  absolute top-0  p-20  " +
            `${index % 2 == 0 ? "right-0" : "left-0"}`
          }
        >
          <span className=" relative  text-[3rem]  font-bold text-transparent bg-gradient-to-r from-[#6a6eec] to-[#FFFFFF]  bg-clip-text md:pb-0 whitespace-nowrap">
            PHASE
            <span className=" opacity-[0.1]   absolute top-[-7.8rem] left-[7.3rem] text-[12rem] bg-white  bg-clip-text md:pb-0 whitespace-nowrap">
              {index + 1}
            </span>
          </span>
        </div>

        <div className="flex flex-col z-10  text-primary_text">
          <h1
            className={
              " text-4xl flex flex-col px-[10rem] w-[100%] text-start p-4 " +
              `${index % 2 == 0 ? "text-end" : "text-start"}`
            }
          >
            {head}
            <p className="text-sm">{text}</p>
          </h1>
        </div>
      </div>
    </GlassEffect>
  );
};

export default DisplayBoxes;
