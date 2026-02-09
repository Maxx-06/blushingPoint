import "../App.css";
function ServicesInfo() {
  return (
    <div className="bg-[#FFE4D6] p-25 h-fit w-full text-center">
      <div className="text-4xl font-light">SERVICES</div>
      <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap lg:flex-nowrap gap-10 py-20">
        <div className="services flex flex-col justify-center items-center">
          <img src="/images/care.png" alt="" className="h-15 w-15" />
          <h1 className="py-5 border-b font-light my-5">FULL SERVICE</h1>
          <p className="font-light light">
            'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
        </div>
        {/*  */}

        <div className="services flex flex-col justify-center items-center">
          <img src="/images/mirror.png" alt="" className="h-15 w-15" />
          <h1 className="py-5 border-b font-light my-5">FACIAL</h1>
          <p className=" light">
            'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
        </div>
        {/*  */}
        <div className="services flex flex-col justify-center items-center">
          <img src="/images/lipstick.png" alt="" className="h-15 w-15" />
          <h1 className="py-5 border-b font-light my-5">MAKEUP</h1>
          <p className="light">
            'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
        </div>
        {/*  */}
        <div className="services flex flex-col justify-center items-center">
          <img src="/images/comb.png" alt="" className="h-15 w-15" />
          <h1 className="py-5 border-b font-light my-5">HAIRSTYLE</h1>
          <p className=" light">
            'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </p>
        </div>
      </div>

      <div>
        <button className="border light border-[#543E33] text-[#543E33]  bg-transparent text-xl px-8 py-3 font-light hover:bg-[#543E33] hover:text-white transition-colors duration-300    ">
          <a href="#contact">Contact Us</a>
        </button>
      </div>
    </div>
  );
}

export default ServicesInfo;
