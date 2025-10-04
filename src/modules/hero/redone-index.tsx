import { xSpaceFont } from "@/app/fonts/xspace";

const Hero = () => {
  return (
    <>
      <section
        className="relative min-h-screen bg-black text-white overflow-hidden"
        id="hero"
      >
        {/* Background gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" /> */}
        <img
          src="/images/background/vtol.jpg"
          alt="background image"
          className="w-full h-full absolute inset-0 object-cover opacity-40"
        />

        <div className="relative flex flex-col-reverse h-[140vh]">
          {/* <div className="flex justify-center items-center w-full lg:w-[50%]">
            <div className="relative">
         
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl scale-110" />

              
              <div className="relative">
                <PulsingBorderShader />
              </div>

              
              <div
                className="absolute -top-4 -right-4 w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="absolute top-1/3 -left-6 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute bottom-1/4 -right-8 w-4 h-4 bg-pink-400 rounded-full animate-bounce"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div> */}

          <img
            className="w-[300px] h-[300px] l object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="/images/background/hero.jpeg"
            alt="logo of massive dynamics"
          />

          <div className="flex flex-col absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1
              className={`${xSpaceFont.className} z-100 text-2xl lg:text-4xl text-center font-bold tracking-tight leading-tight px-8`}
            >
              Transforming <span className="">awareness</span> into
              <br />
              <span className="">architecture</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
