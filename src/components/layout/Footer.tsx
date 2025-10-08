import React from "react";
import Logo from "../../assets/images/logof.png";
import Facebook from "../../assets/icons/facebookf.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Dribbble from "../../assets/icons/Dribbble.svg";
import Linkedin from "../../assets/icons/linkedIn.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Phone from "../../assets/icons/phonef.svg";
import Mail from "../../assets/icons/sms.svg";
import Button from "../ui/Button";

const Footer: React.FC = () => {
 const clientLinks = ["Головна", "Про нас", "Ціни", "Маршрути", "Політика приватності"];
 const carrierLinks = ["Help Docs", "Особистий кабінет", "Оновлення", "Контакти"];

 return (
  <footer className="bg-[#202430]  w-full">
   <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
     <div>
      <div className="flex items-center gap-2 mb-4">
       <img
        src={Logo}
        alt="Sprinters Logo"
        className="w-[160px] h-auto"
       />
      </div>
      <p className="text-[#D6DDEB] text-sm">Платформа пошуку перевізників та бронювання поїздок</p>
     </div>

     <div>
      <h3 className="text-white font-bold mb-4">Клієнтам</h3>
      <ul className="space-y-2">
       {clientLinks.map((link, index) => (
        <li key={index}>
         <a
          href="#"
          className="text-[#D6DDEB] hover:text-white transition text-sm"
         >
          {link}
         </a>
        </li>
       ))}
      </ul>
     </div>

     <div>
      <h3 className="text-white font-bold mb-4">Перевізникам</h3>
      <ul className="space-y-2">
       {carrierLinks.map((link, index) => (
        <li key={index}>
         <a
          href="#"
          className="text-[#D6DDEB] hover:text-white transition text-sm"
         >
          {link}
         </a>
        </li>
       ))}
      </ul>
     </div>

     <div>
      <h3 className="text-white font-bold mb-4">Зворотній зв'язок</h3>
      <p className="text-[#D6DDEB] text-sm mb-4">Маєш пропозиції щодо покращення сервісу - пиши нам!</p>
      <div className="flex gap-2 mb-5 h-[50px]">
       <input
        type="email"
        placeholder="Email Address"
        className="flex-1 px-4 py-3 w-[223px] bg-white border border-gray-600 text-white placeholder-[#A8ADB7] text-sm focus:outline-none focus:border-primary"
       />
       <Button className="bg-primary text-white px-6 py-2 font-semibold hover:bg-primary/90 transition">
        Надіслати
       </Button>
      </div>
      <div className="space-y-2">
       <a
        href="tel:+380735555555"
        className="flex items-center gap-2 text-[#A8ADB7] hover:text-white transition text-sm"
       >
        <img
         src={Phone}
         alt="phone icon"
        ></img>
        <span>+ 38 (073) 555 55 55</span>
       </a>
       <a
        href="mailto:gmail@gmail.com"
        className="flex items-center gap-2 text-[#A8ADB7] hover:text-white transition text-sm"
       >
        <img
         src={Mail}
         alt="mail icon"
        ></img>
        <span>gmail@gmail.com</span>
       </a>
      </div>
     </div>
    </div>

    <div className="border-t border-gray-700 pt-[42px] flex flex-col md:flex-row justify-between items-center gap-4">
     <p className="text-white text-[16px] font-medium">2024 © Sprinters. All rights reserved.</p>
     <div className="flex gap-4">
      {[Facebook, Instagram, Dribbble, Linkedin, Twitter].map((icon, index) => (
       <a
        key={index}
        href="#"
        className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition"
       >
        <img
         src={icon}
         alt="social icon"
         className="w-auto h-3"
        />
       </a>
      ))}
     </div>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
