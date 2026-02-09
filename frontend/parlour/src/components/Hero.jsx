function Hero() {
  return (
    <div
      id="hero"
      className="bg-[#FDBD99] w-full h-fit lg:h-[120vh] flex lg:flex-row flex-col"
    >
      <div className="border border-[#543E33] bg-transparent flex flex-col justify-center text-center items-center lg:w-[50%] px-10 h-screen lg:h-full">
        <p className="text-2xl light font-extralight italic text-[#543E33]">
          Hair & Makeup Studio
        </p>
        <h2 className="text-7xl text-[#543E33] font-semibold mt-5 mb-20 leading-tight">
          IT’S YOUR DAY TO SHINE
        </h2>
        <button className="border border-[#543E33] text-[#543E33]  bg-transparent text-xl px-8 py-3 light font-light hover:bg-[#543E33] hover:text-white transition-colors duration-300">
          <a href="#contact">Contact Us</a>
        </button>
      </div>
      <div className="border border-[#543E33] lg:w-[50%] h-screen lg:h-full">
        <img
          className="w-full h-full object-cover object-center"
          src="https://static.wixstatic.com/media/c837a6_83b176717069492394ec2ba4393637ed~mv2.jpg/v1/fill/w_947,h_1347,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_83b176717069492394ec2ba4393637ed~mv2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
