// src/components/DriverCard.tsx
import React from "react";
import InstagramIcon from "../assets/icons/instagram.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";

interface DriverCardProps {
 name: string;
 experience: string;
 imageUrl: string;
 isHighlighted?: boolean;
 className?: string;
}

const DriverCard: React.FC<DriverCardProps> = ({name, experience, imageUrl, className = ""}) => {
 const cardClasses = `p-6 flex flex-col items-center text-center rounded-1 border border-[#D6DDEB] h-full transition-all duration-300 ${className}`;

 return (
  <div className={cardClasses}>
   <img
    src={imageUrl}
    alt={`Водій ${name}`}
    className="w-[120px] h-[120px] rounded-full object-cover mb-4"
   />

   <h4 className="text-lg font-semibold text-neutrals mb-1">{name}</h4>
   <p className="text-sm font-normal text-text-gray mb-4">{experience}</p>

   <div className="flex space-x-3 mt-auto">
    <a
     href="#"
     aria-label="Instagram"
    >
     <img
      src={InstagramIcon}
      alt="Instagram"
      className="w-5 h-5 opacity-60 hover:opacity-100 transition"
     />
    </a>
    <a
     href="#"
     aria-label="LinkedIn"
    >
     <img
      src={LinkedinIcon}
      alt="LinkedIn"
      className="w-5 h-5 opacity-60 hover:opacity-100 transition"
     />
    </a>
   </div>
  </div>
 );
};

export default DriverCard;
