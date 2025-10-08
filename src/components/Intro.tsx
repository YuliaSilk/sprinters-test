import BackgroundPattern from "../assets/patterns.svg";
import StripeLogo from "../assets/images/stripe_logo.png";

import BreadCrunbs from "../components/ui/BreadCrunbs";

import Metrics from "../components/Metrics";
import AdressData from "../components/Adressdata";
const Intro = () => {
 return (
  <div>
   <div className="bg-[#F8F8FD] h-[446px] w-full p-0 absolute top-[78px] left-0 -z-10">
    <img
     src={BackgroundPattern}
     alt="geometric violet lines"
     className="object-cover w-full h-full"
    />
   </div>
   <div className="container  mx-auto absolute inset-x-0 top-[78px] ">
    <BreadCrunbs />
    <div>
     <div className="flex gap-6 items-center">
      <img
       className="h-[170px] w-auto object-cover"
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
   </div>
  </div>
 );
};
export default Intro;
