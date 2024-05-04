const GlassEffect = (props) => {
  return (
    <div className=" my-1  rounded-2xl flex justify-center mx-auto mt-[5rem] sm:mt-[10rem] w-[70%]  shadow-sm shadow-slate-50 bg-white/10 z-5 backdrop-filter backdrop-blur-lg">
      {props.children}
    </div>
  );
};

export default GlassEffect;
