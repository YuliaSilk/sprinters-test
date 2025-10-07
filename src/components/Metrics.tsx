import IconFire from "../assets/icons/fire.svg";
import IconPeople from "../assets/icons/people.svg";
import IconTrain from "../assets/icons/train.svg";
import IconPin from "../assets/icons/pin.svg";
import IconBuild from "../assets/icons/building.svg";

const stats = [
 {icon: IconFire, label: "На ринку від", value: "Травень 31, 2011"},
 {icon: IconPeople, label: "Перевезених пасажирів", value: "4000+"},
 {icon: IconTrain, label: "Автопарк", value: "8 бусів"},
 {icon: IconPin, label: "Обслуговуємо", value: "8 країн"},
 {icon: IconBuild, label: "Місто", value: "Львів"},
];

const Metrics: React.FC = () => {
 return (
  <div className="flex justify-between gap-8">
   {stats.map((stat, index) => (
    <div
     key={index}
     className="text-start text-nowrap flex items-center gap-4"
    >
     <div className="flex w-[44px] h-[44px] justify-center mb-2 p-2.5 rounded-[50%] bg-[#FFF]">
      <img
       src={stat.icon}
       alt={stat.label}
       className="w-6 h-6 text-[#26A4FF]"
      />
     </div>
     <div className="flex flex-col">
      <p className="text-xs text-[#515B6F] mb-1 font-rubic  ">{stat.label}</p>
      <p className="text-sm font-semibold text-[#25324B] font-rubic">{stat.value}</p>
     </div>
    </div>
   ))}
  </div>
 );
};
export default Metrics;
