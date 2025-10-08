import React from "react";
import Facebook from "../../assets/icons/Facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Dribbble from "../../assets/icons/Dribbble.svg";
import Linkedin from "../../assets/icons/linkedIn.svg";
import Twitter from "../../assets/icons/twitter.svg";
// import Phone from "../../assets/icons/phone.svg";
// import Mail from "../../assets/icons/sms.svg";

const Footer: React.FC = () => {
 const clientLinks = ["Головна", "Про нас", "Ціни", "Маршрути", "Політика приватності"];
 const carrierLinks = ["Help Docs", "Особистий кабінет", "Оновлення", "Контакти"];
 return (
  <footer className="bg-[#1F2937]  w-full">
   <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
     <div>
      <div className="flex items-center gap-2 mb-4">
       <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">S</span>
       </div>
       <span className="text-white font-bold text-xl">PRINTERS</span>
      </div>
      <p className="text-gray-400 text-sm">Платформа пошуку перевізників та бронювання поїздок</p>
     </div>

     <div>
      <h3 className="text-white font-bold mb-4">Клієнтам</h3>
      <ul className="space-y-2">
       {clientLinks.map((link, index) => (
        <li key={index}>
         <a
          href="#"
          className="text-gray-400 hover:text-white transition text-sm"
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
          className="text-gray-400 hover:text-white transition text-sm"
         >
          {link}
         </a>
        </li>
       ))}
      </ul>
     </div>

     <div>
      <h3 className="text-white font-bold mb-4">Зворотній зв'язок</h3>
      <p className="text-gray-400 text-sm mb-4">Маєш пропозиції щодо покращення сервісу - пиши нам!</p>
      <div className="flex gap-2 mb-4">
       <input
        type="email"
        placeholder="Email Address"
        className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary"
       />
       <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition">
        Надіслати
       </button>
      </div>
      <div className="space-y-2">
       {/* <a
        href="tel:+380735555555"
        className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
       >
        <Phone />
        <span>+ 38 (073) 555 55 55</span>
       </a>
       <a */}
       {/* href="mailto:gmail@gmail.com"
        className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
       >
        <Mail />
        <span>gmail@gmail.com</span>
       </a> */}
      </div>
     </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
     <p className="text-gray-500 text-sm">2024 © Sprinters. All rights reserved.</p>
     <div className="flex gap-4">
      {[Facebook, Instagram, Dribbble, Linkedin, Twitter].map((icon, index) => (
       <a
        key={index}
        href="#"
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition"
       >
        <img
         src={icon}
         alt="social icon"
         className="w-5 h-5"
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
