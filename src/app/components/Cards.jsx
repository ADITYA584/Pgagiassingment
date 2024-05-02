import React from "react";

const ServicesData = [
  {
    id: 1,
    span: "Phase 1",
    img: "images/img1.png ",
    name: "Discovery and Feasibility",
    description:
      "Assessing AI's potential to innovate and validating the initial concept with a POC.",
  },
  {
    id: 2,
    span: "Phase 2",
    img: "images/img2.png",
    name: "Data Preparation and Research",
    description:
      "Curating and refining data sets to lay the groundwork for tailored AI solutions.",
  },
  {
    id: 3,
    span: "Phase 3",
    img: "images/img3.png ",
    name: "Model Development and Strategy",
    description:
      "Crafting and training bespoke AI models, strategizing for integration and scalability.",
  },
  {
    id: 4,
    span: "Phase 4",
    img: "images/img4.png",
    name: "MVP Creation",
    description:
      "Building a functional Minimum Viable Product that embodies the AI solution for user feedback.",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10 relative">
        <div className="container mx-auto">
          <div className="mb-auto text-center max-w-[400px] mx-auto    ">
            <h1 className="text-2xl lg:text-4xl mb-5 font-bold text-primary_text whitespace-nowrap md:text-center flex justify-center items-center">
              What's Trending
            </h1>

            <p className="text-sm text-black mb-5 dark:text-gray-400 hidden md:block">
              Our AI design process
            </p>
          </div>

          <div className="relative mt-2 border-2 border-white  overflow-hidden">
            <div className="absolute -inset-5 rounded-full bg-blue-500/20 blur-xl"></div>
            <div className="  grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  ">
              {ServicesData.map((service) => (
                <div>
                  <button
                    key={service.id}
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    className="rounded-2xl mb-5 bg-white relative shadow-xl  h-[200px] transition-transform hover:-translate-y-2 flex flex-col justify-between"
                  >
                    <div className="mt-5 h-[240px] w-[240px] flex items-center justify-center overflow-hidden mx-auto">
                      <img
                        src={service.img}
                        alt=""
                        className="max-h-full max-w-full transform group-hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-5 text-center flex flex-col justify-between flex-grow">
                      <div>
                        <h1 className="text-xl font-bold mb-1">
                          {service.name}
                        </h1>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">
                        {service.description}
                      </p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
