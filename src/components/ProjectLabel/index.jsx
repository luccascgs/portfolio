import { Label } from "./styles";

const ProjectLabel = (props) => {
    return (
        <Label>
                <img src={props.img} alt={props.alt} />
                <footer>
                    <h4>{props.title}</h4>
                </footer>
        </Label>
    );
}

export default ProjectLabel;