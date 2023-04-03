import ChartIcon from "src/assets/ChartIcon";
import { FunctionComponent } from "react";
import HeartIcon from "src/assets/HeartIcon";
import profilePhoto from "src/assets/profile-photo.jpg";
import SeparatorIcon from "src/assets/SeparatorIcon";
import SettingsIcon from "src/assets/SettingsIcon";
import {
  Container,
  Links,
  LinkTile,
  MainCompartment,
  Navbar,
  Navigation,
  OuterDiv,
  StyledLink,
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
        <User>
          <img src={profilePhoto} alt="profile photo" />
        </User>
        <Navigation>
          <Links>
            <LinkTile>
              <OuterDiv isActive>
                <StyledLink to="/bestsellers">
                  <ChartIcon />
                </StyledLink>
              </OuterDiv>
              <SeparatorIcon />
            </LinkTile>
            <LinkTile>
              <OuterDiv>
                <StyledLink to="/favorites">
                  <HeartIcon />
                </StyledLink>
              </OuterDiv>
              <SeparatorIcon />
            </LinkTile>
            <LinkTile>
              <OuterDiv>
                <StyledLink to="/settings">
                  <SettingsIcon />
                </StyledLink>
              </OuterDiv>
              <SeparatorIcon />
            </LinkTile>
          </Links>
        </Navigation>
      </Navbar>
      <MainCompartment>
        <TopBanner>
          RAD<span>ICAL</span>
        </TopBanner>
        {props.children}
      </MainCompartment>
    </Container>
  );
};

export default Sidebar;
