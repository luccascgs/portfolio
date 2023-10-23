import ProjectLabel from "../ProjectLabel";
import { Section } from `./styles`;

export default function Projects() {
    return (
        <section className="projects">
            <h1>ANIMAÇÃO</h1>
            <h2>DE PRODUTO</h2>
            <div className="grid">
                <ProjectLabel title={"RedBull"} alt={"Lata de Redbull"} img={""} />
                <ProjectLabel title={"Iphone 15"} alt={"Câmera do Iphone"} img={""} />
                <ProjectLabel title={"Mel Pantaneiro"} alt={"Pote de mel"} img={""} />
            </div>
        </section>
    );
}