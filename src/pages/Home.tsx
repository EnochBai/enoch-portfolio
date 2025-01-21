import React from "react";
import ParticlesBg from "particles-bg";
import { Fade } from "react-awesome-reveal";

import CircleButton from "../componets/CircleButton";
import linkedinIcon from "../images/linkedin.png";
import githubMark from "../images/github-mark.png";
import email from "../images/email.png";

interface HomeProps {
  handleScrollToSection: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ handleScrollToSection }) => {
  const buttons = [
    {
      href: "https://www.linkedin.com/in/enoch-bai/",
      icon: linkedinIcon,
    },
    { href: "https://github.com/EnochBai", icon: githubMark },
    {
      icon: email,
      onClick: () => handleScrollToSection("contacts"),
    },
  ];

  return (
    <div
      className="bg-[url(./images/HeaderBackground.jpg)] w-full h-screen flex items-center justify-center relative"
      id="home"
    >
      <ParticlesBg color="#C0C0C0" type="cobweb" num={150} />
      <div className="text-center absolute">
        <Fade direction="down" triggerOnce={true}>
          <h1 className="text-4xl pb-4">Hello, I'm</h1>
          <h1 className="text-6xl font-bold pb-4">Enoch Bai</h1>
        </Fade>
        <Fade direction="left" triggerOnce={true}>
          <p>Frontend Developer | Full-Stack Developer</p>
        </Fade>
        <div className="flex justify-around items-center py-12">
          {buttons.map((button, index) => (
            <Fade
              direction="up"
              cascade={true}
              delay={index * 200}
              triggerOnce={true}
            >
              <CircleButton
                key={index}
                href={button.href || undefined}
                icon={
                  <img
                    src={button.icon}
                    alt={button.icon}
                    className="w-8 h-8"
                  />
                }
                onClick={button.onClick}
              />
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
