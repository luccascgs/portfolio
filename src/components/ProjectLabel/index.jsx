import { Link } from "react-router-dom";
import { Label } from "./styles";

const ProjectLabel = (props) => {
    return (
        <Label>
            <Link to={props.route}>
                <footer>
                    <h4>{props.title}</h4>
                </footer>
            </Link>
        </Label>
    );
}

export default ProjectLabel;