import {File} from "./types";
import chromeIcon from "./public/assets/icons/chrome.png";
import folderIcon from "./public/assets/icons/folder.png";

export const DESKTOP_FILES: File[] = [
  {
    icon: chromeIcon,
    name: "Post de ejemplo",
    path: "/chrome/post-de-ejemplo",
  },
  {
    icon: chromeIcon,
    name: "Otro post de ejemplo",
    path: "/chrome/otro-post",
  },
  {
    icon: folderIcon,
    name: "Social networks",
    path: "/finder/social",
  },
];
