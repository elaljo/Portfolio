import NavBar from "./components/Nav_bar"
import PersonalInfo from "./components/Personal_info"
import Contact from "./components/Contact";

import Projects from "./components/Projects";
export default function Home() {
  return (
    <main className="color">
      <NavBar />
      <PersonalInfo />
      <Projects />
      <Contact />
    </main>
  );
}
