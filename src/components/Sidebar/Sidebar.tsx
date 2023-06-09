import { FunctionComponent } from "react";
import NavigationSidebar from "src/components/NavigationSidebar";
import profilePhoto from "src/assets/profile-photo.jpg";
import {
  Child,
  Container,
  MainCompartment,
  SidebarContainer,
  StyledLink,
  TopBanner,
  User
} from "./Sidebar.styles";

interface SidebarProps {
  children: React.ReactNode;
}

// A component that is used to wrap all other pages components in the app
// This component is always rendered
const Sidebar: FunctionComponent<SidebarProps> = (props) => {
  return (
    <Container>
      <SidebarContainer>
        <User>
          <img src={profilePhoto} alt="profile photo" />
        </User>
        <NavigationSidebar />
      </SidebarContainer>
      <MainCompartment>
        <TopBanner>
          <StyledLink to="/">
            RAD<span>ICAL</span>
          </StyledLink>
        </TopBanner>
        <Child>{props.children}</Child>
      </MainCompartment>
    </Container>
  );
};

export default Sidebar;
