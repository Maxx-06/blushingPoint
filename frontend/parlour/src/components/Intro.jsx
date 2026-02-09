function Intro() {
  return (
    <div
      id="about"
      className="bg-[#FFFBF3] w-full h-fit lg:h-[130vh] flex lg:flex-row flex-col-reverse"
    >
      <div className="border border-[#543E33] lg:py-25 lg:px-15 lg:w-[50%] h-screen lg:h-full">
        <img
          className="w-full h-full object-cover object-center"
          src="https://static.wixstatic.com/media/c837a6_085e78a76281485b82a7ce99abf2756a~mv2.jpg/v1/fill/w_668,h_839,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_085e78a76281485b82a7ce99abf2756a~mv2.jpg"
          alt=""
        />
      </div>
      <div className="bg-[#543E33] text-white border lg:py-25 lg:px-20 border-[#543E33] flex flex-col justify-center text-center items-center lg:w-[50%] px-10 h-screen lg:h-full">
        <h3 className="text-4xl font-light ">YOUR BEAUTY IS OUR PASSION</h3>
        <p className="text-lg light font-light mt-10 mb-20 leading-relaxed">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
        <button className="border light border-white  bg-transparent text-xl px-8 py-3 font-light hover:bg-[#FFFBF3] hover:text-[#543E33] transition-colors duration-300    ">
          <a href="#contact">About Us</a>
        </button>
      </div>
    </div>
  );
}

export default Intro;
