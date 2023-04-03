import navigationLinks from "src/assets/navigationLinks";
import SeparatorIcon from "src/assets/SeparatorIcon";
import { useLocation } from "react-router-dom";
import {
  Links,
  LinkTile,
  NavigationContainer,
  OuterDiv,
  StyledLink
} from "./NavigationSidebar.styles";

const NavigationSidebar = () => {
  const location = useLocation();

  return (
    <NavigationContainer>
      <Links>
        {navigationLinks.map(({ path, icon }) => (
          <LinkTile key={path}>
            <OuterDiv isActive={location.pathname === path}>
              <StyledLink to={path}>{icon}</StyledLink>
            </OuterDiv>
            <SeparatorIcon />
          </LinkTile>
        ))}
      </Links>
    </NavigationContainer>
  );
};

export default NavigationSidebar;
