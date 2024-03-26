import {
    Button,
    Classes,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Navbar
} from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";

const MiNavbar = () => {
    const navigate = useNavigate();
    const goToClick = (path) => {
        navigate(path);
    };
    return (
        <Navbar>
            <NavbarGroup>
                <NavbarHeading>SPA Tools</NavbarHeading>
                <NavbarDivider />
                <Button className={Classes.MINIMAL} icon="home" text="Home" onClick={() => goToClick("/")} />
                <Button className={Classes.MINIMAL} icon="document" text="Automate" onClick={() => goToClick("automate")} />
            </NavbarGroup>
        </Navbar>
    );
};

export default MiNavbar;
