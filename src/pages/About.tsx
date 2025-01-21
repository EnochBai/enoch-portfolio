import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen pt-24"
      id="about"
    >
      <Fade direction="down" triggerOnce={true}>
        <h1 className="text-4xl font-bold pb-4">About Me</h1>
      </Fade>
      <div className="w-1/2">
        <Fade direction="up" triggerOnce={true}>
          <p className="py-2">
            Hi, I'm Enoch, a passionate and dedicated web developer with a
            strong foundation in front-end and full-stack development. With a
            degree in Information Systems from Queensland University of
            Technology, I have honed my skills in JavaScript(ES6+),
            ReactJS(React Hooks, Context API, Redux, Redux Toolkit, React
            Query), TypeScript, and Tailwind CSS, alongside backend experience
            using Java Spring Boot, Node.js and Express.
          </p>
          <p className="py-2">
            I’ve worked on a variety of projects, from real estate web
            applications to complex business systems, focusing on delivering
            innovative and user-centric solutions. My expertise extends to
            database management with MSSQL, and I am familiar with business
            analysis tools such as BPMN and UML diagrams, enabling me to
            understand and meet customer requirements effectively.
          </p>
          <p className="py-2">
            In addition to my technical skills, I pride myself on being a fast
            learner, a team player, and a problem solver. I thrive in
            collaborative environments and am always eager to learn new
            technologies and methodologies to improve my craft.
          </p>
          <p className="py-2">
            When I’m not coding, I’m exploring new trends in web design and
            development, always seeking new ways to create clean, efficient, and
            engaging web experiences.
          </p>
          <p className="py-2">
            Currently, I'm the co-founder of a web design studio, where my team
            and I focus on crafting beautiful and functional websites that help
            businesses thrive in the digital world.
          </p>
          <p className="py-2">Let's connect!</p>
        </Fade>
      </div>
    </div>
  );
};

export default About;
