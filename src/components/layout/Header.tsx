import {useState} from "react";

import LogoIcon from "../../assets/icons/logo_header.svg";
import Button from "../ui/Button";
import {ButtonGroup} from "../ui/ButtonGroup";
import NavLink from "../ui/NavLink";
import {Menu, X} from "lucide-react";
export const Header: React.FC = () => {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 return (
  <header className="bg-white w-full h-[78px]  flex justify-between items-center fixed z-100 top-0 left-0">
   <div className=" container flex items-center justify-between ">
    <img
     src={LogoIcon}
     alt="Logo"
     className="h-[40px] sm:h-[48px] lg:h-[56px] w-auto"
    />
    <nav className="hidden xl:flex items-center justify-between gap-6 px-8 h-full">
     <NavLink to="/">Головна</NavLink>
     <NavLink to="/carriers">Перевізникам</NavLink>
     <NavLink to="/about">Про нас</NavLink>
     <NavLink to="/profile">Профіль перевізника</NavLink>
    </nav>
    <div className="hidden lg:flex">
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
    </div>

    <button
     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
     className="lg:hidden p-2 text-gray-700 hover:text-primary transition"
     aria-label="Toggle menu"
    >
     {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
   </div>

   {isMobileMenuOpen && (
    <div
     className="fixed inset-0 bg-black/50 z-40 lg:hidden"
     onClick={() => setIsMobileMenuOpen(false)}
    />
   )}

   <div
    className={`fixed top-[78px] right-0 w-full sm:w-80 h-[calc(100vh-78px)] bg-white z-40 lg:hidden transform transition-transform duration-300 ease-in-out shadow-xl ${
     isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
    }`}
   >
    <nav className="flex flex-col p-6 space-y-4">
     <NavLink
      to="/"
      className="py-3 border-b border-gray-100"
      onClick={() => setIsMobileMenuOpen(false)}
     >
      Головна
     </NavLink>
     <NavLink
      to="/carriers"
      className="py-3 border-b border-gray-100"
      onClick={() => setIsMobileMenuOpen(false)}
     >
      Перевізникам
     </NavLink>
     <NavLink
      to="/about"
      className="py-3 border-b border-gray-100"
      onClick={() => setIsMobileMenuOpen(false)}
     >
      Про нас
     </NavLink>
     <NavLink
      to="/profile"
      className="py-3 border-b border-gray-100"
      onClick={() => setIsMobileMenuOpen(false)}
     >
      Профіль перевізника
     </NavLink>

     <div className="pt-4 space-y-3">
      <Button
       backgroundClass="bg-transparent border border-primary"
       textClass="text-primary"
       className="w-full"
      >
       Створити профіль
      </Button>
      <Button
       backgroundClass="bg-primary"
       textClass="text-white"
       className="w-full"
      >
       Увійти
      </Button>
     </div>
    </nav>
   </div>
  </header>
 );
};
