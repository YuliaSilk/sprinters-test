import {NavLink as RouterNavLink} from "react-router-dom";

const NavLink = ({to, children}: {to: string; children: React.ReactNode}) => (
 <RouterNavLink
  to={to}
  end
  className={({isActive}) =>
   [
    "relative flex items-center h-[78px] text-base font-semibold font-rubik transition-all duration-300",
    isActive ? "text-[#4640DE]" : "text-neutrals hover:text-[#4640DE]",
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:bg-[#4640DE] after:transition-all after:duration-300",
    isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
   ].join(" ")
  }
 >
  {children}
 </RouterNavLink>
);

export default NavLink;
