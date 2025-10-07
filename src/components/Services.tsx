import IconTV from "../assets/icons/tv.svg";
import IconWifi from "../assets/icons/wifi.svg";
import IconToilet from "../assets/icons/wc.svg";
import IconBed from "../assets/icons/weekend.svg";
import IconConditioner from "../assets/icons/mode_fan.svg";
import IconPet from "../assets/icons/hands.svg";

const servicesItems = [
 {icon: IconConditioner, label: "Кондиціонер"},
 {icon: IconWifi, label: "Wi-Fi"},
 {icon: IconTV, label: "TV"},
 {icon: IconToilet, label: "Туалет"},
 {icon: IconBed, label: "Зручні сидіння"},
 {icon: IconPet, label: "Перевозимо тварин"},
];
const Services: React.FC = () => {
 return (
  <section className="container w-full ">
   <h3>Сервіс</h3>
   <p className="mb-6 text-neutrals/80">Найкращі умови для вашого комфорту</p>
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
    {servicesItems.map((item, index) => (
     <div
      key={index}
      className="flex  items-center justify-center gap-3 "
     >
      <div className="flex w-[64px] h-[64px] items-center justify-center ">
       <img
        src={item.icon}
        alt={item.label}
        className="sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
       />
      </div>
      <p className="text-sm text-neutrals sm:text-[18px] lg:text-[24px] font-lato font-extrabold">{item.label}</p>
     </div>
    ))}
   </div>
  </section>
 );
};
export default Services;
