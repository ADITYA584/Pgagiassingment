import Image from "next/image";

const Hoverwhowear = (props) => {
  return (
    <div
      className="text-primary_text bg-[#160C30]  md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24 py-6"
      onMouseLeave={() => props.setShowhoweare(false)}
    >
      <div
        className=" body-font mt-0 flex flex-wrap justify-center w-[80%]"
        style={{ height: "280px", overflow: "hidden" }}
      >
        {/* <div className="py-6 px-6 flex items-start  w-full md:w-1/3" style={{ position: 'relative' }}>
                            <div className="h-full flex-grow hover:bg-[#F5F6FC]  mb-6 group" style={{ width: '100%', height: '100%' }}>
                                <div className="flex items-center">
                                    <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-3">AI+ eBook</h1>
                                    <img
                                        src="/images/rightarrow.png"
                                        alt="Arrow"
                                        style={{ width: '20px', height: '20px', transition: 'transform 0.1s' }}
                                        className='group-hover:translate-x-1'
                                    />
                                </div>
                                <p className="text-gray-600 hover:text-black    text-sm leading-relaxed mb-5">Maximize your AI knowledge</p>
                            </div>
                        </div> */}
        <div
          className=" py-6 px-6 flex items-start w-full md:w-1/3"
          style={{ position: "relative" }}
        >
          <div
            className="h-full flex-grow flex flex-col"
            style={{ width: "100%", height: "100%" }}
          >
            <div
              className="  mb-6 group flex flex-col gap-4"
              style={{ width: "100%" }}
            >
              <div className=" p-2 hover:bg-[#D9D9D930] hover:rounded-lg flex items-center">
                <h1
                  className="title-font text-md font-bold  mb-3"
                  style={{ marginRight: "10px" }}
                >
                  About us
                </h1>
              </div>
              <div className=" p-2 hover:bg-[#D9D9D930] hover:rounded-lg flex items-center">
                <h1
                  className="title-font text-md font-bold  mb-3"
                  style={{ marginRight: "10px" }}
                >
                  Leadership
                </h1>
              </div>
              <div className=" p-2 hover:bg-[#D9D9D930] hover:rounded-lg flex items-center">
                <h1
                  className="title-font text-md font-bold  mb-3"
                  style={{ marginRight: "10px" }}
                >
                  Contact us
                </h1>
              </div>
            </div>
            {/* <div className='hover:bg-[#F5F6FC]  mb-6 group' style={{ width: '100%' }}>
                                    <div className="flex items-center">
                                        <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-3" style={{ marginRight: '10px' }}>See All Downloads</h1>
                                        <img
                                            src="/images/rightarrow.png"
                                            alt="Arrow"
                                            style={{ width: '20px', height: '20px', transition: 'transform 0.1s' }}
                                            className='group-hover:translate-x-1'
                                        />
                                    </div>
                                    <p className="text-gray-600 hover:text-black    text-sm leading-relaxed mb-5">UX Templates,checklist & Guides</p>
                                </div> */}
          </div>
          {/* Vertical Line */}
          {/* <div className="absolute h-full w-px bg-gray-200 top-0 right-0"></div> */}
        </div>
        <div className="py-6 px-6 flex items-start  mb-6 group w-full md:w-1/3">
          {/* <div className="h-full flex-grow" style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                                <div className="flex items-center">
                                    <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-3" style={{ marginRight: '10px' }}>AI pilot</h1>
                                    <img
                                        src="/images/rightarrow.png"
                                        alt="Arrow"
                                        style={{ width: '20px', height: '20px', transition: 'transform 0.1s' }}
                                        className='group-hover:translate-x-1'
                                    />
                                </div>
                                <p className="text-gray-600 hover:text-black    text-sm leading-relaxed mb-5">Your AI-UX Assistant</p>
                                <div style={{ position: 'relative', flex: '1', width: '100%' }}>
                                    <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
                                        <source src="https://www.datocms-assets.com/16499/1699230326-customws.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hoverwhowear;
