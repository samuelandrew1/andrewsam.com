import { nav } from "./NavBar";
import { FcAbout, FcCellPhone, FcNews } from "react-icons/fc";
import { AiFillProject } from "react-icons/ai";

 export const NavObject: nav[] = [
  {
    text: "About",
    tooltip: "all you need to know about andrew samuel",
     icon: <FcAbout />,
    id: 0,
     link: '/about'
  },
   {
     text: "blog",
     tooltip: "listen to latest news and trends",
     icon: <FcNews />,
     id: 1,
     link: "/blog",
   },
  {
    text: "contact",
    tooltip: "contact me",
    icon: <FcCellPhone />,
    id: 2,
    link: '/contact'

  },
  {
    text: "Project",
    tooltip: "vew projects",
    icon: <AiFillProject />,
    id: 3,

    link: '/project'

  },

];
export default NavObject;
