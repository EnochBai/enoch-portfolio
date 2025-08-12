import React, { ReactNode, useState, useEffect } from "react";
import CircleButton from "../componets/CircleButton";
import { Fade } from "react-awesome-reveal";

import linkedinIcon from "../images/linkedin.png";
import githubMark from "../images/github-mark.png";

interface NavbarProps {
  children: ReactNode;
  handleScrollToSection: (id: string) => void;
}

const GeneralPanel: React.FC<NavbarProps> = ({
  children,
  handleScrollToSection,
}) => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`bg-gray-800 bg-opacity-95 text-white py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
          scrolling ? "bg-gray-800 shadow-md" : "bg-transparent"
        }`}
      >
        {/* Menu Items */}
        <div className="container mx-auto flex items-center justify-center space-x-10">
          <Fade cascade damping={0.2} triggerOnce={true}>
            <button
              className="absolute top-2 left-2 md:hidden text-white focus:outline-none"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <ul className="hidden md:flex space-x-16">
              <li>
                <a
                  onClick={() => handleScrollToSection("home")}
                  className="hover:underline cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleScrollToSection("weatherReport")}
                  className="hover:underline cursor-pointer"
                >
                  Weather
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleScrollToSection("about")}
                  className="hover:underline cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleScrollToSection("experiences")}
                  className="hover:underline cursor-pointer"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleScrollToSection("contacts")}
                  className="hover:underline cursor-pointer"
                >
                  Contacts
                </a>
              </li>
            </ul>

            {/* Mobile Menu */}
            <div
              className={`absolute top-8 left-4 bg-gray-800 text-white rounded-md overflow-hidden transition-all duration-300 ${
                menuOpen ? "max-h-80 opacity-95" : "max-h-0 opacity-0"
              }`}
              style={{ width: "200px" }}
            >
              <ul className="space-y-4 py-6 px-6">
                <li>
                  <a
                    onClick={() => {
                      handleScrollToSection("home");
                      setMenuOpen(false);
                    }}
                    className="hover:underline cursor-pointer block"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleScrollToSection("weatherReport");
                      setMenuOpen(false);
                    }}
                    className="hover:underline cursor-pointer block"
                  >
                    Weather
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleScrollToSection("about");
                      setMenuOpen(false);
                    }}
                    className="hover:underline cursor-pointer block"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleScrollToSection("experiences");
                      setMenuOpen(false);
                    }}
                    className="hover:underline cursor-pointer block"
                  >
                    Experiences
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleScrollToSection("contacts");
                      setMenuOpen(false);
                    }}
                    className="hover:underline cursor-pointer block"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </header>
      <main className="flex-grow bg-gray-900 text-white w-full flex flex-col justify-center items-center">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-10 pb-4">
            <CircleButton
              icon={
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
              }
              size="w-9 h-9 rounded-md"
              href="https://www.linkedin.com/in/enoch-bai/"
            />
            <CircleButton
              icon={<img src={githubMark} alt="Github" />}
              size="w-9 h-9 rounded-md"
              href="https://github.com/EnochBai"
            />
          </div>
          <p>
            &copy; {new Date().getFullYear()} - All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GeneralPanel;
