import BackgroundPattern from "../assets/patterns.svg";
import StripeLogo from "../assets/images/stripe_logo.png";

import BreadCrunbs from "../components/ui/BreadCrunbs";

import Metrics from "../components/Metrics";
import AdressData from "../components/Adressdata";
const Intro = () => {
 return (
  <div>
   <div className="bg-[#F8F8FD] h-[470px] md:h-[364px] xl:h-[446px] w-full p-0 absolute top-[78px] left-0 -z-10">
    <img
     src={BackgroundPattern}
     alt="geometric violet lines"
     className="object-cover w-full h-full"
    />
   </div>
   <div className="container  mx-auto absolute inset-x-0 top-[78px] ">
    <BreadCrunbs />
    <div>
     <div className="hidden lg:flex gap-5 xl:gap-6 items-center">
      <img
       className="lg:h-[100px] xl:h-[170px] w-auto object-cover"
       src={StripeLogo}
       alt="Stripe logo"
      />
      <div className="flex flex-col gap-3">
       <div className="w-[264px] flex justify-between items-center gap-3">
        <h2 className="text-[48px] font-extrabold font-lato">Stripe</h2>
        <p className=" flex h-[26px]  justify-center items-center border-1 border-color-[#4640DE] text-[#4640DE] px-3 ">
         43 Поїздок
        </p>
       </div>
       <AdressData />
       <Metrics />
      </div>
     </div>
    </div>
    <div className="flex flex-col gap-6 lg:hidden">
     <div className="lg:flex xl:gap-6 items-center ">
      <div className="flex gap-5 items-center  mb-4 ">
       <img
        className="h-[80px] lg:h-[100px] xl:h-[170px] w-auto object-cover"
        src={StripeLogo}
        alt="Stripe logo"
       />
       <div className="flex flex-col gap-3">
        <div className="w-[242px] flex flex-col md:flex-row justify-between items-center gap-3">
         <h2 className="text-[32px] xl:text-[48px] font-extrabold font-lato">Stripe</h2>
         <p className=" flex h-[26px]  justify-center items-center border-1 border-color-[#4640DE] text-[#4640DE] px-3 ">
          43 Поїздок
         </p>
        </div>
        <AdressData />
       </div>
      </div>
      <Metrics />
     </div>
    </div>
   </div>
  </div>
 );
};
export default Intro;
