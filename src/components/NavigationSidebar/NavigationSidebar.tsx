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

// A component that renders navigation buttons
// The buttons are rendered based on the navigationLinks array
// The buttons are rendered as active if the current location matches the path of the button
const NavigationSidebar = () => {
  const location = useLocation();

  return (
    <NavigationContainer>
      <Links>
        {navigationLinks.map(({ path, icon }) => (
          <LinkTile key={path}>
            <OuterDiv isActive={location.pathname === path}>
              <StyledLink to={path} data-testid={path}>
                {icon}
              </StyledLink>
            </OuterDiv>
            <SeparatorIcon />
          </LinkTile>
        ))}
      </Links>
    </NavigationContainer>
  );
};

export default NavigationSidebar;
