import React from "react";
import DriverCard from "./DriverCard";

import driverDef1 from "../assets/images/drivers/def1.webp";
import driverDef2 from "../assets/images/drivers/def2.webp";
import driverYulia from "../assets/images/drivers/yulia.webp";

const defaultImages = [driverDef1, driverDef2, driverDef1, driverDef2];

const drivers = [
 {id: 1, name: "Олександр", experience: "Досвід роботи: 5 років", isHighlighted: false},
 {id: 2, name: "Володимир", experience: "Досвід роботи: 7 років", isHighlighted: false},
 {id: 3, name: "Ірина", experience: "Досвід роботи: 1 рік", isHighlighted: false},
 {id: 4, name: "Михайло", experience: "Досвід роботи: 1 рік", isHighlighted: false},
 {id: 5, name: "Юлія", experience: "Досвід роботи: 2 роки", isHighlighted: true},
 {id: 6, name: "Дмитро", experience: "Досвід роботи: 4 роки", isHighlighted: false},
 {id: 7, name: "Світлана", experience: "Досвід роботи: 3 роки", isHighlighted: false},
];

const DriversSection: React.FC = () => {
 const cardWidthClass = "w-[240px]";
 return (
  <section className="container w-full py-16">
   <div className="flex justify-between items-center mb-10">
    <h3>Наші водії</h3>
    <a
     href="#"
     className="text-primary font-semibold text-base hover:text-accent transition duration-150"
    >
     Усі водії ({drivers.length})
    </a>
   </div>

   <div className="overflow-x-auto pb-4 snap-x snap-mandatory">
    <div
     className="flex space-x-6 w-max"
     //  className="grid gap-6"
     style={{gridTemplateColumns: `repeat(${drivers.length}, minmax(220px, 1fr))`}}
    >
     {drivers.map((driver, index) => (
      <DriverCard
       key={driver.id}
       name={driver.name}
       experience={driver.experience}
       isHighlighted={driver.isHighlighted}
       imageUrl={driver.isHighlighted ? driverYulia : defaultImages[index % defaultImages.length]}
       className={`snap-start flex-shrink-0 ${cardWidthClass}`}
      />
     ))}
    </div>
   </div>
  </section>
 );
};

export default DriversSection;
