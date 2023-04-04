import ChartIcon from "./ChartIcon";
import HeartIcon from "./HeartIcon";
import SettingsIcon from "./SettingsIcon";

const navigationLinks = [
  {
    path: "/bestsellers",
    icon: <ChartIcon />
  },
  {
    path: "/favourites",
    icon: <HeartIcon />
  },
  {
    path: "/settings",
    icon: <SettingsIcon />
  }
];

export default navigationLinks;
