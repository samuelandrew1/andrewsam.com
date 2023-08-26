import { nav } from "./NavBar";
import { FcHome, FcAbout, FcNews, FcCellPhone } from "react-icons/fc";
import { AiFillProject } from "react-icons/ai";

 export const NavObject: nav[] = [
  {
    text: "About",
    tooltip: "all you need to know about andrew samuel",
    icon: FcAbout,
    id: 0,
    link: "about",
  },
  {
    text: "Blog",
    tooltip: "listen to latest news and trends",
    icon: FcNews,
    id: 1,
    link: "blog",
  },
  {
    text: "Contact",
    tooltip: "contact me",
    icon: FcCellPhone,
    id: 2,
    link: "contact",
  },
  {
    text: "Project",
    tooltip: "vew projects",
    icon: AiFillProject,
    id: 3,
    link: "project",
  },
  { text: "", tooltip: "go to home page", icon: FcHome, id: 4, link: "/" },
];
export default NavObject;
