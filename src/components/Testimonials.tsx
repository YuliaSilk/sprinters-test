// src/components/TestimonialsSection.tsx

import React from "react";
import TestimonialCard from "./TestimonialCard";
import {testimonials} from "../data/testimonials";
import BackgroundPattern from "../assets/images/testemotion/Pattern.svg";
import BagroundImg from "../assets/images/testemotion/bg.webp";
import Button from "./ui/Button";

const TestimonialsSection: React.FC = () => {
 return (
  <section className="relative  h-[580px] ">
   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full -z-10">
    <div className="absolute top-0 left-0 w-full h-full">
     <img
      src={BagroundImg}
      alt="Фігурний фоновий елемент"
      className="w-full h-full "
     />
    </div>

    <div className="absolute top-0 right-0 w-full h-full">
     <img
      src={BackgroundPattern}
      alt="Фоновий патерн"
      className="w-full h-full "
     />
    </div>
   </div>

   <div className="container  relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
     <div className="lg:col-span-6 pr-0 lg:pr-8 ">
      <h3 className="text-4xl md:text-[48px]   font-extrabold text-neutrals mb-6">
       Що <span className="text-accent whitespace-nowrap">кажуть люди?</span>
      </h3>

      <p className="text-base text-text-gray mb-[42px] max-w-[520px]">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
       magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
       consequat.
      </p>

      <Button className="bg-primary text-white px-6 py-3 rounded-[6px] font-semibold shadow-md">Залишити відгук</Button>
     </div>

     <div className="lg:col-span-6">
      <div className="hidden lg:flex items-start justify-end gap-8 mb-8">
       {" "}
       {testimonials.slice(0, 2).map((t) => (
        <TestimonialCard
         key={t.id}
         {...t}
        />
       ))}
      </div>
      <div className="flex items-center gap-3 justify-center  ">
       <span className="w-3 h-3 rounded-full bg-primary"></span>
       <span className="w-3 h-3 rounded-full bg-gray-300"></span>
       <span className="w-3 h-3 rounded-full bg-gray-300"></span>
       <span className="w-3 h-3 rounded-full bg-gray-300"></span>
       <span className="w-3 h-3 rounded-full bg-gray-300"></span>
       <span className="w-3 h-3 rounded-full bg-gray-300"></span>
       <span className="w-3 h-3 rounded-full bg-gray-300"></span>
       <span className="w-3 h-3 rounded-full bg-gray-300"></span>
       <span className="w-3 h-3 rounded-full bg-gray-300"></span>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default TestimonialsSection;
