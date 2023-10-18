import About from "../components/About";
import Skills from "../components/Skills";
import WellcomeTitle from "../components/WellcomeTitle";

export default function HomeScreen() {
    return (
        <main>
            <WellcomeTitle />
            <About />
            <Skills />
        </main>
    )
}