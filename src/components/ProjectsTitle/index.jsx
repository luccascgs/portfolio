import { Title, Container, Line, Border, Outline } from "./styles";

export default function ProjectsTitle() {
    return (
        <Title>
            <Container>
                <Line><Outline>PROJETOS</Outline><Border/><h1>PROJETOS</h1></Line>
                <Line><h1>PROJETOS</h1></Line>
                <Line><h1>PROJETOS</h1><Border/><Outline>PROJETOS</Outline></Line>
            </Container>
        </Title>
    );
}