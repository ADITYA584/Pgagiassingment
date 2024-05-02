const Hoveraboutus = () => {
  return (
    <div
      className=" border-b-2 hidden md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24"
      onMouseLeave={() => setShowAboutUs(false)}
    >
      <section className="text-gray-600 body-font mt-0">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap items-start justify-center -mx-8 -my-8">
            {/* <div className="py-8 px-8  flex items-start justify-center" style={{ marginLeft: '1rem', padding: '2rem', maxWidth: '400px', borderRadius: '8px' }} onMouseEnter={() => toggleAboutUs('Our core principles and beliefs')}>
                      <div className="h-full flex-grow">
                          <div className="flex hover:bg-[#F5F6FC]  mb-6 group items-center">
                              <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-3" style={{ marginRight: '10px' }}>Our Story and why Us</h1>
                              <img
                                  src="/images/rightarrow.png"
                                  alt="Arrow"
                                  style={{ width: '20px', height: '20px', transition: 'transform 0.1s' }}
                                  className='group-hover:translate-x-1'
                              />
                          </div>
                      </div>
                  </div> */}
            <div
              className="py-8 px-8 flex items-start justify-center"
              style={{
                marginLeft: "1rem",
                padding: "2rem",
                maxWidth: "400px",
                borderRadius: "8px",
              }}
              onMouseEnter={() =>
                toggleAboutUs("Our core principles and beliefs")
              }
            >
              <div className="h-full flex-grow">
                <div className="flex hover:bg-[#F5F6FC] mb-6 group items-center">
                  <Link
                    href="/aboutus"
                    className="title-font text-md font-bold text-gray-600 hover:text-black mb-3"
                    style={{ marginRight: "10px" }}
                  >
                    Our core principles and beliefs
                  </Link>
                  <Image
                    src="/images/rightarrow.png"
                    alt="Arrow"
                    width={20}
                    height={20}
                    style={{ transition: "transform 0.1s" }}
                    className="group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hoveraboutus;
