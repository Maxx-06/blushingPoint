function Testimonial() {
  return (
    <div className="bg-[#FFFBF3] w-full h-fit lg:h-[130vh] flex lg:flex-row flex-col text-[#543E33]">
      <div className="border border-[#543E33] lg:w-[50%] h-screen lg:h-full">
        <img
          className="w-full h-full object-cover object-center"
          src="https://static.wixstatic.com/media/c837a6_8829155331af4618a5a6d5ba04ddad39~mv2.jpg/v1/fill/w_945,h_1539,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_8829155331af4618a5a6d5ba04ddad39~mv2.jpg"
          alt=""
        />
      </div>
      {/*  */}
      <div className="border border-[#543E33] bg-transparent flex flex-col justify-center  items-center lg:w-[50%] p-10 min-h-screen lg:h-full">
        <div className="text-4xl font-light  mt-20 mb-10 self-start px-10">
          FROM OUR CLIENTS
        </div>
        <div className="border-t pt-10 border-[#543E33] flex flex-col gap-10 lg:gap-0 lg:flex-row my-10">
          <div>
            <h3 className="px-10">Shelly, 34</h3>
            <p className="px-10 mt-5 italic">
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.”
            </p>
          </div>
          {/*  */}
          <div>
            <h3 className="px-10">Tara, 24</h3>
            <p className="lg:border-l italic border-[#543E33] mt-5 px-10">
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.”
            </p>
          </div>
        </div>

        {/*  */}

        <div className="border-t border-[#543E33] pt-10 flex my-10 flex-col gap-10 lg:gap-0  lg:flex-row">
          <div className="">
            <h3 className="px-10">Shelly, 34</h3>
            <p className="px-10 italic mt-5">
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.”
            </p>
          </div>
          {/*  */}
          <div className="">
            <h3 className="px-10">Tara, 24</h3>
            <p className="lg:border-l italic  px-10 mt-5">
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
