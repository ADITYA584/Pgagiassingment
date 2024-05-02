import Image from "next/image";

const Hoverwhatwedo = (props) => {
  return (
    <div
      id="whatwedo"
      className=" text-primary_text bg-[#160C30]  flex md:justify-evenly md:px-8 lg:px-12 xl:px-24 py-4"
      onMouseLeave={() => props.setShowwhatwedo(false)}
    >
      <div
        className=" body-font mt-0 flex flex-wrap justify-center w-[80%] max-h-[515px]"
        style={{ overflowY: "auto" }}
      >
        <div className="py-4 px-4 flex items-start w-full md:w-1/3 relative">
          <div className="h-full flex-grow">
            <div className="hover:bg-[#D9D9D926] p-2 hover:rounded-lg  mb-6 group">
              <div className="flex items-center">
                <h1 className="title-font text-md font-bold  mb-2 mr-2">
                  Create MVP
                </h1>
              </div>
            </div>
            <div className=" hover:bg-[#D9D9D926] p-2 hover:rounded-lg  mb-6 group">
              <div className="flex items-center">
                <h1 className="title-font text-md font-bold">
                  Improve Product
                </h1>
              </div>
            </div>

            <div className="hover:bg-[#D9D9D926] p-2 hover:rounded-lg  mb-6 group">
              <div className="flex items-center">
                <div className="flex items-center">
                  <h1 className="title-font text-md font-bold   hover:text-black     mb-2 mr-2">
                    AI Research
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 px-4 flex items-start w-full md:w-1/3 relative">
          <div className="h-full flex-grow flex flex-col"></div>
        </div>
      </div>
    </div>
  );
};

export default Hoverwhatwedo;
