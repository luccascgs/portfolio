import ProjectLabel from "../ProjectLabel";
import { Section, Grid } from "./styles";

export default function Projects() {
    return (
        <Section>
            <h1>ANIMAÇÃO</h1>
            <h2>DE PRODUTO</h2>
            <Grid>
                <ProjectLabel title={"RedBull"} alt={"Lata de Redbull"} img={""} route={"/redbull"} />
                <ProjectLabel title={"Iphone 15"} alt={"Câmera do Iphone"} img={""} route={"/iphone-15"} />
                <ProjectLabel title={"Mel Pantaneiro"} alt={"Pote de mel"} img={""} route={"/mel-pantaneiro"} />
            </Grid>
        </Section>
    );
}