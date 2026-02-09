function Services() {
  return (
    <div
      id="services"
      className="bg-[#FFFBF3] w-full h-fit lg:h-[120vh] flex lg:flex-row flex-col"
    >
      <div className="border border-[#543E33] bg-transparent flex flex-col justify-center text-center items-center lg:w-[50%] px-10 h-screen lg:h-full">
        <p className="text-xl font-light text-[#543E33]">SERVICES</p>
        <h2 className="text-7xl text-[#543E33] font-semibold my-5 leading-tight">
          BEAUTY AT YOUR SERVICE
        </h2>
        <p className="text-xl font-light text-[#543E33]">
          Together we will achieve your dream look
        </p>
      </div>
      <div className="border border-[#543E33] lg:w-[50%] h-screen lg:h-full">
        <img
          className="w-full h-full object-cover object-center"
          src="https://static.wixstatic.com/media/c837a6_96a9316c858549939a8ff8a1d76e70b8~mv2.jpg/v1/fill/w_947,h_1347,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_96a9316c858549939a8ff8a1d76e70b8~mv2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Services;
