import Calendlylink from "../buttons/callbutton"; // Import the CalendlyLink component

export default function Book() {
  const url = "https://calendly.com/vivek-_ou/30min";

  return (
    <div className="  md:ml-0 min-h-screen flex items-center justify-center px-2 mt-20">
      <div className="flex bg-gradient-to-r rounded-lg from-[#281653]   to-[#000000] flex-col md:flex-row  justify-end w-full max-w-6xl  ">
        {" "}
        {/* Adjusted max-width and added gap */}
        <div className="flex   items-center justify-center flex-col mb-4 md:mb-0 p-6 rounded-lg ">
          <div className="text-4xl  font-bold text-primary_text">
            {" "}
            Got anything in mind?
          </div>
          <br></br>
          <div className="hidden md:block ">
            {" "}
            {/* Hide CalendlyLink on medium screens and up */}
            <h1 className="text-3xl font-bold text-[#000AFF]">
              Let&apos;s do it <br></br>together!
            </h1>
          </div>
          {/* <div className="mt-8 md:hidden w-full"> 
              <Calendlylink />
            </div> */}
        </div>
        <div className="  justify-center border-2 items-center flex w-full lg:w-1/2 sm:w-full md:justify-center md:w-full  rounded-lg shadow-lg md:ml-[6rem]">
          <iframe src={url} width="100%" height="500px"></iframe>
        </div>
      </div>
    </div>
  );
}
