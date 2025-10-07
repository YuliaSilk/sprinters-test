import IconWeb from "../assets/icons/www_icon.svg";
import IconPhone from "../assets/icons/phone.svg";
const AdressData: React.FC = () => {
 return (
  <address className="not-italic  w-[390px] flex items-center justify-between mb-3">
   <div className="flex items-center gap-2">
    <img
     src={IconWeb}
     alt="Іконка вебсайту"
    />
    <a
     href="https://stripe.com"
     target="_blank"
     rel="noopener noreferrer"
     className="text-[#4640DE] font-rubik hover:underline"
    >
     https://stripe.com
    </a>
   </div>

   <div className="flex items-center gap-2">
    <img
     src={IconPhone}
     alt="Іконка телефону"
    />
    <a
     href="tel:+380735555555"
     className="text-[#4640DE] font-rubik hover:underline"
    >
     +38 (073) 555 55 55
    </a>
   </div>
  </address>
 );
};
export default AdressData;
