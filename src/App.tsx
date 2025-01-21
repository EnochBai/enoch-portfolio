import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Experiences from "./pages/Experiences";
import GeneralPanel from "./componets/GeneralPanel";

const App = () => {
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <GeneralPanel handleScrollToSection={handleScrollToSection}>
      <Home handleScrollToSection={handleScrollToSection} />
      <About />
      <Experiences />
      <Contacts />
    </GeneralPanel>
  );
};

export default App;
