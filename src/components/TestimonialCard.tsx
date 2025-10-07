import React from "react";

interface Props {
 avatar: string;
 name: string;
 route: string;
 date: string;
 text: string;
 rating?: number;
}

const Star: React.FC<{filled?: boolean}> = ({filled}) => (
 <svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill={filled ? "#4640DE" : "none"}
  xmlns="http://www.w3.org/2000/svg"
 >
  <path
   d="M12 17.3L5.6 20l1.2-7L1.6 9.2l7.1-.6L12 2l3.3 6.6 7.1.6-5.2 3.8 1.2 7z"
   stroke="#4640DE"
   strokeWidth="0.5"
  />
 </svg>
);

const TestimonialCard: React.FC<Props> = ({avatar, name, route, date, text, rating = 5}) => {
 return (
  <div className="bg-white rounded-xl shadow-lg px-5 py-7 w-[300px] md:w-[353px] h:-[360px] md:h-[411px] flex flex-col justify-between">
   <div>
    <div className="flex items-center gap-4 mb-4">
     <img
      src={avatar}
      alt={`${name} avatar`}
      className="w-12 md:w-18 h-12 md:h-18 rounded-full object-cover"
     />
     <div>
      <h4 className="text-base md:text-[24px] font-semibold text-neutrals">{name}</h4>
      <p className="text-xs md:text-sm text-primary font-medium">{route}</p>
      <p className="text-[10px] md:text-xs text-neutrals/60">{date}</p>
     </div>
    </div>

    <p className="text-sm md:text-base text-neutrals ">{text}</p>
   </div>
   <div className="flex items-center gap-1 h-4 ">
    {Array.from({length: 5}).map((_, i) => (
     <span
      key={i}
      className="inline-block"
     >
      <Star filled={i < rating} />
     </span>
    ))}
   </div>
  </div>
 );
};

export default TestimonialCard;
