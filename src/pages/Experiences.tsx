import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Fade } from "react-awesome-reveal";
// import CyberlarkExpImg from "../images/CyberlarkExpImg.png";
// import TrndiffExpImg from "../images/TrndiffExpImg.png";
import react from "../images/react.png";
import html from "../images/html.png";
import java from "../images/java.png";

const Experiences = () => {
  const experiences = [
    {
      date: "JAN 2024",
      iconColor: "#2D3748",
      icon: react,
      role: "Web Developer",
      location: "Brisbane, QLD",
      description:
        "As a member of the development team, I participated in front-end development for a real estate project at CyberlarkCode. Developed and enhanced features using React, TypeScript, Tailwind CSS, and Redux. Key contributions included implementing calendar downloads, image handling, QR code layout, user management functions, and improving system UI/UX. Collaborated in an Agile environment, gaining hands-on experience in real-world project operations and teamwork.",
      technologies: [
        { name: "React", color: "bg-cyan-500" },
        { name: "TypeScript", color: "bg-cyan-500" },
        { name: "Tailwind CSS", color: "bg-cyan-500" },
        { name: "Redux", color: "bg-cyan-500" },
        { name: "React Query", color: "bg-cyan-500" },
        { name: "Node.js", color: "bg-cyan-800" },
        { name: "Express", color: "bg-cyan-800" },
        { name: "RESTful API", color: "bg-cyan-800" },
        { name: "DynamoDB", color: "bg-black" },
        { name: "Team Collaboration", color: "bg-stone-500" },
        { name: "Agile Project Management", color: "bg-stone-500" },
        { name: "CI/CD", color: "bg-stone-500" },
      ],
    },
    {
      date: "MAR 2023",
      iconColor: "#D1D5DB",
      icon: html,
      role: "Developer + Product Owner",
      location: "Brisbane, QLD",
      description:
        "Contributed to the TRNDiff Visualisation System project focused on biology data visualization. Involved in Agile project planning, client communication, and team collaboration. Developed a user guidelines interface using HTML and participated in system enhancement and testing. Managed version control with GitHub and GitBucket, gaining experience in project development workflows and stakeholder engagement.",
      technologies: [
        { name: "HTML", color: "bg-cyan-500" },
        { name: "CSS", color: "bg-cyan-500" },
        { name: "Agile Project Management", color: "bg-stone-500" },
        { name: "UI/UX Design", color: "bg-stone-500" },
        { name: "Team Collaboration", color: "bg-stone-500" },
        { name: "Requirements Analysis", color: "bg-stone-500" },
        { name: "Clients Meeting", color: "bg-stone-500" },
      ],
    },
    {
      date: "Feb 2021",
      iconColor: "#E5E7EB",
      icon: java,
      role: "Backend Developer",
      location: "Wuhan, China",
      description:
        "Developed backend functionalities for the SINOSURE system at a Wuhan-based company using Java Spring Boot. Focused on API programming and XML database operations across multiple application layers, including Control, Service, Mapper, DAO, and Entity. Managed application architecture using IntelliJ IDEA and ensured seamless system integration. Gained hands-on experience in backend development, database management, and enterprise system architecture.",
      technologies: [
        { name: "Vue.js", color: "bg-cyan-500" },
        { name: "SpringBoot", color: "bg-cyan-800" },
        { name: "RESTful API", color: "bg-cyan-800" },
        { name: "MSSQL", color: "bg-black" },
        { name: "Team Collaboration", color: "bg-stone-500" },
      ],
    },
  ];

  return (
    <>
      <div className="w-1/2 pt-24" id="experiences">
        <Fade direction="down" triggerOnce={true}>
          <div className="flex-col flex items-center">
            <h1 className="text-4xl font-bold pb-4">
              Projects and Experiences
            </h1>
          </div>
        </Fade>
      </div>
      <VerticalTimeline className="w-full lg:w-2/3 mx-auto">
        {experiences.map((experience) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#374151" }}
            contentArrowStyle={{ borderRight: "7px solid  #374151" }}
            date={experience.date}
            iconStyle={{
              background: `${experience.iconColor}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={
              <img src={experience.icon} alt="icon" className="w-10 h-10" />
            }
          >
            <h3 className="vertical-timeline-element-title pt-4">
              {experience.role}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {experience.location}
            </h4>
            <p>{experience.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`flex items-center px-3 py-1 rounded-full ${tech.color}`}
                >
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default Experiences;
