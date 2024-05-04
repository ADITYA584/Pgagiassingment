const Calousal_card = (props) => {
  return (
    <div
      key={props.service.id}
      data-aos="zoom-in"
      data-aos-duration="300"
      className="rounded-2xl min-w-[270px]  mb-5 bg-[#d9d9d960] overflow-hidden shadow-sm shadow-slate-50 duration-high h-[320px] flex flex-col justify-between mr-5"
    >
      <div className="mt-5 h-[240px] flex items-center justify-center mx-auto">
        <img
          src={props.service.img}
          alt=""
          className="max-h-[120px] transform group-hover:scale-105 duration-300"
        />
      </div>
      <div className="p-5 text-center flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-xl font-bold mb-1">{props.service.name}</h1>
        </div>
        <p className=" text-sm mt-1">{props.service.description}</p>
      </div>
    </div>
  );
};

export default Calousal_card;
