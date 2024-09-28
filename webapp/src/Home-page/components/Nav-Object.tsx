
import { FcAbout, FcCellPhone, FcNews } from "react-icons/fc";
import { AiFillProject } from "react-icons/ai";


interface NavItem {
  id: number;
  text: string;
  link: string;
  icon: JSX.Element;
}


// interface NavBarProps {
//   navbar: NavItem[];
// }

export const NavObject: NavItem[] = [
  {
    text: "About",
    icon: <FcAbout />,
    id: 0,
    link: '#about'
  },
  {
    text: "Blog",

    icon: <FcNews />,
    id: 1,
    link: "blog",
  },
  {
    text: "Contact",
    icon: <FcCellPhone />,
    id: 2,
    link: '#contact'
  },
  {
    text: "Project",
    icon: <AiFillProject />,
    id: 3,
    link: '/project'
  },
];

export default NavObject;
