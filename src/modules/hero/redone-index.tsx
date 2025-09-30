import PulsingBorderShader from "@/components/pulsing-border-shader";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

        <div className="flex flex-col-reverse py-30 ">
          {/* graphic section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind the shader */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl scale-110" />

              {/* Main shader component */}
              <div className="relative">
                <PulsingBorderShader />
              </div>

              {/* Floating elements */}
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
          </div>

          <div className="flex flex-col items-center w-full h-max gap-4">
            <div className="flex gap-2 w-max px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm">
              <Sparkles className="w-4 h-4" />
              Remote Viewing Movement
            </div>

            <h1 className="z-100 text-5xl lg:text-7xl text-center font-bold tracking-tight leading-tight">
              Transforming{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                awareness
              </span>{" "}
              into
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                architecture
              </span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
