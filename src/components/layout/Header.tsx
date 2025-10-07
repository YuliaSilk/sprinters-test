import LogoIcon from "../../assets/icons/logo_header.svg";
import Button from "../ui/Button";
import {ButtonGroup} from "../ui/ButtonGroup";
import NavLink from "../ui/NavLink";
export const Header: React.FC = () => {
 return (
  <header className="w-full h-[78px] pl-[124px] px-[124px] flex justify-between items-center fixed z-10 top-0 left-0">
   <img
    src={LogoIcon}
    alt="Logo"
    className="h-[56px] w-auto"
   />
   <nav className="flex items-center space-x-6 h-full">
    <NavLink to="/">Головна</NavLink>
    <NavLink to="/carriers">Перевізникам</NavLink>
    <NavLink to="/about">Про нас</NavLink>
    <NavLink to="/profile">Профіль перевізника</NavLink>
   </nav>
   <ButtonGroup
    buttons={[
     <Button
      backgroundClass="bg-transparent"
      textClass="text-[#4640DE] font-bold"
     >
      Створити профіль
     </Button>,
     <Button
      backgroundClass="bg-[#4640DE]"
      textClass="text-white font-bold"
     >
      Увійти
     </Button>,
    ]}
   />
  </header>
 );
};
