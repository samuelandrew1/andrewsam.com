import { nav } from "./NavBar";
import {  FcAbout, FcCellPhone } from "react-icons/fc";
import { AiFillProject } from "react-icons/ai";

 export const NavObject: nav[] = [
  {
    text: "About",
    tooltip: "all you need to know about andrew samuel",
    icon: FcAbout,
    id: 0,
     link: "",
     hashLink: '#about'
  },
  // {
  //   text: "Blog",
  //   tooltip: "listen to latest news and trends",
  //   icon: FcNews,
  //   id: 1,
  //   link: "blog",
  //   hashLink: ''
  // },
  {
    text: "contact",
    tooltip: "contact me",
    icon: FcCellPhone,
    id: 2,
    link: "",
    hashLink: '#contact'

  },
  {
    text: "Project",
    tooltip: "vew projects",
    icon: AiFillProject,
    id: 3,
    link: "",
    hashLink: '#project'

  },

];
export default NavObject;
