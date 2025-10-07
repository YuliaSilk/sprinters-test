const countries = [
 {name: "Франція", flag: "🇫🇷"},
 {name: "Італія", flag: "🇮🇹"},
 {name: "Німеччина", flag: "🇩🇪"},
 {name: "Нідерланди", flag: "🇳🇱"},
 {name: "Іспанія", flag: "🇪🇸"},
];
const Countries: React.FC = () => {
 return (
  <div className="w-full border-b border-gray-200 pb-6 flex flex-col gap-6">
   <h3 className="  ">Обслуговуємо країни</h3>
   <div className="flex flex-col  gap-[14px]  ">
    {countries.map((country, index) => (
     <div
      key={index}
      className="flex items-center gap-4 hover:bg-gray-50 rounded-lg transition"
     >
      <span className="text-2xl">{country.flag}</span>
      <span className="text-gray-900 font-medium">{country.name}</span>
     </div>
    ))}
   </div>
   <button className="text-primary hover:underline text-base font-medium flex items-center gap-4">
    Усі країни
    <span>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
     >
      <path
       d="M15 1.5L8 8.5L1 1.5"
       stroke="currentColor"
       stroke-width="2"
       stroke-linecap="round"
       stroke-linejoin="round"
      />
     </svg>
    </span>
   </button>
  </div>
 );
};
export default Countries;
