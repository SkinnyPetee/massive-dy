"use client";

import BackgroundPaths from "@/components/kokonutai/background-paths";
import { ContactForm } from "./contact-form";
import { Badge } from "@/components/ui/badge";

export default function ContactSection() {
  return (
    <section
      className="w-full min-h-screen lg:py-30 lg:flex flex-row relative"
      id="contact"
    >
      <div className="w-full min-h-screen flex flex-col z-99">
        <div className="flex flex-col w-full h-max gap-3 items-center z-99">
          <Badge>Get in Touch</Badge>
          <h1 className="text-4xl font-bold text-center">
            Feel free to contact us
          </h1>
          <p className="text-muted-foreground font-medium text-md -mt-2 text-center">
            Transforming Awareness into Clarity and Strategy
          </p>
        </div>
        <div className="w-full flex justify-center items-center my-12 z-99 mx-auto px-6">
          <ContactForm />
        </div>
      </div>

      <BackgroundPaths
        title="feel free to get in touch with us"
        subtitle="For remote viewing and shamanic healing services, share your details below and we’ll reach out shortly."
        className="w-full absolute inset-0 z-1"
      ></BackgroundPaths>
    </section>
  );
}
