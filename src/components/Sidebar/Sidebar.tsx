import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Links,
  MainCompartment,
  Navbar,
  TopBanner,
  User
} from "./Sidebar.styles";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FunctionComponent<SidebarProps> = (props) => {
  return (
    <Container>
      <Navbar>
        <User>Photo</User>
        <Links>
          <Link to="/bestsellers">NYT Bestseller</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/settings">Settings</Link>
        </Links>
      </Navbar>
      <MainCompartment>
        <TopBanner>RADICAL</TopBanner>
        {props.children}
      </MainCompartment>
    </Container>
  );
};

export default Sidebar;
