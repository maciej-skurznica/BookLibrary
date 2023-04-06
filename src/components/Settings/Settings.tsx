import { SettingsProps } from "./Settings.interfaces";
import { ThemeButton } from "./Settings.styles";

const Settings = ({ handleTheme, theme }: SettingsProps) => {
  return (
    <ThemeButton onClick={handleTheme}>
      {theme ? "Dark Theme | Off" : "Dark Theme | On"}
    </ThemeButton>
  );
};

export default Settings;
