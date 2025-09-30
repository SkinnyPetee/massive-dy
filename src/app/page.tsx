import Hero from "@/modules/hero/redone-index";
import About from "@/modules/about";
import Services from "@/modules/services";
import ContactSection from "@/modules/contact";
import Navbar from "@/modules/commons/navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ContactSection />
    </div>
  );
}
