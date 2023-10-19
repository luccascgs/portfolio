import About from "../components/About";
import Demoreel from "../components/Demoreel";
import Projects from "../components/Projects";
import ProjectsTitle from "../components/ProjectsTitle";
import Skills from "../components/Skills";
import WellcomeTitle from "../components/WellcomeTitle";

export default function HomeScreen() {
    return (
        <main>
            <WellcomeTitle />
            <About />
            <Skills />
            <Demoreel />
            <ProjectsTitle />
            <Projects />
        </main>
    )
}