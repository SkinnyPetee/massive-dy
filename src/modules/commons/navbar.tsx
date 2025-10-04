"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { xSpaceFont } from "@/app/fonts/xspace";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`lg:px-12 fixed top-1 z-999 left-0 w-full mx-auto transition-colors duration-300 ${
          scrolled ? "backdrop-blur-lg bg-primary/80" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex items-center justify-between px-2 py-4">
          {/* Logo */}
          <div className="text-xl font-bold text-primary-foreground">
            <a href="#hero">
              <div className="w-max h-max rounded-2xl flex  justify-center items-center">
                <img
                  className="w-[50px] h-[40px] lg:w-[140px] lg:h-[70px] object-contain"
                  src="/images/logo/logo.jpeg"
                  alt="logo of massive dynamics"
                />
                <h2
                  className={`${xSpaceFont.className} text-white text-sm lg:text-xl `}
                >
                  THE MASSIVE DYNAMICS
                </h2>
              </div>
            </a>
          </div>

          {/* Desktop Links */}
          <ul className="lg:flex gap-6 hidden">
            <li>
              <a
                href="#founder"
                className="hover:text-primary-foreground/80 text-primary-foreground"
              >
                Founder
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-primary-foreground/80 text-primary-foreground"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-primary-foreground/80 text-primary-foreground"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <Button
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsOpen(true)}
          >
            <Menu />
          </Button>
        </nav>
      </header>

      {/* Mobile Slide-in Menu */}
      <div
        className={`z-999 backdrop-blur-lg bg-primary border-b border-primary/20 fixed top-0 right-0 h-screen w-screen border-l transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center  m-12">
          <div
            className={`text-xl font-bold text-primary-foreground transition-opacity duration-1000 ease-in-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="p-2 w-max h-max rounded-2xl">
              <img
                className="w-[80px] h-[40px] lg:w-[140px] lg:h-[70px] object-contain"
                src="/images/logo/logo.jpeg"
                alt="logo of massive dynamics"
              />
            </div>
          </div>
          <button
            className="text-primary-foreground"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-12">
          <li>
            <a
              href="#founder"
              className="hover:text-primary-foreground/80 text-primary-foreground font-semibold text-2xl"
              onClick={() => setIsOpen(false)}
            >
              Founder
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-primary-foreground/80 text-primary-foreground font-semibold text-2xl"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-primary-foreground/80 text-primary-foreground font-semibold text-2xl"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
