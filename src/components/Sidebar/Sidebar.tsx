import { FunctionComponent } from "react";
import NavigationSidebar from "src/components/NavigationSidebar";
import profilePhoto from "src/assets/profile-photo.jpg";
import {
  Child,
  Container,
  MainCompartment,
  SidebarContainer,
  TopBanner,
  User
} from "./Sidebar.styles";

interface SidebarProps {
  children: React.ReactNode;
}

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
          RAD<span>ICAL</span>
        </TopBanner>
        <Child>{props.children}</Child>
      </MainCompartment>
    </Container>
  );
};

export default Sidebar;
