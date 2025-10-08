import ICONS_SPRITE_URL from "../assets/icons/sprite.svg";

const servicesItems = [
 {iconId: "icon-conditioner", label: "Кондиціонер"},
 {iconId: "icon-wifi", label: "Wi-Fi"},
 {iconId: "icon-tv", label: "TV"},
 {iconId: "icon-toilet", label: "Туалет"},
 //  {iconId: "icon-bed", label: "Зручні сидіння"},
 //  {iconId: "icon-pet", label: "Перевозимо тварин"},
 // ✅ Використовуємо <br/> для примусового перенесення
 {
  iconId: "icon-bed",
  label: (
   <>
    Зручні <br />
    сидіння
   </>
  ),
 },

 {
  iconId: "icon-pet",
  label: (
   <>
    Перевозимо <br />
    тварин
   </>
  ),
 },
];
const Services: React.FC = () => {
 return (
  <section className="container w-full ">
   <h3>Сервіс</h3>
   <p className="mb-6 text-neutrals/80">Найкращі умови для вашого комфорту</p>
   <div className="flex flex-wrap gap-8 justify-between">
    {servicesItems.map((item, index) => (
     <div
      key={index}
      className="flex items-center justify-start gap-3"
     >
      <div
       className="flex flex-shrink-0 items-center justify-center 
                   w-[40px] h-[40px] md:w-[44px] md:h-[44px] lg:w-[48px] lg:h-[48px] 
                   text-[#4640DE]"
      >
       <svg
        className="w-full h-full"
        viewBox="0 0 48 48"
       >
        <use href={`${ICONS_SPRITE_URL}#${item.iconId}`} />
       </svg>
      </div>
      <p className="text-sm text-neutrals sm:text-[18px] lg:text-[24px] font-lato font-extrabold flex-shrink-1">
       {item.label}
      </p>
     </div>
    ))}
   </div>
  </section>
 );
};
export default Services;
