import Hero from "@/modules/hero/redone-index";
import About from "@/modules/about";
import Services from "@/modules/services";
import ContactSection from "@/modules/contact";

export default function Page() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <ContactSection />
    </div>
  );
}
