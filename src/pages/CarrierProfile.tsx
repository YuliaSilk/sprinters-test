import BackgroundPattern from "../assets/Patterns.svg";
import StripeLogo from "../assets/images/stripe_logo.png";

import BreadCrunbs from "../components/ui/BreadCrunbs";

import Metrics from "../components/Metrics";
import AdressData from "../components/Adressdata";
import Social from "../components/Social";
import Gallery from "../components/Gallery";
import Countries from "../components/Countries";
import Calendar from "../components/Calendar";
import Drivers from "../components/Drivers";

const ProfilePage: React.FC = () => {
 return (
  <div>
   <div className="bg-[#F8F8FD] h-[446px] w-full p-0 absolute top-[78px] left-0 -z-10">
    <img
     src={BackgroundPattern}
     alt="geometric violet lines"
     className="object-cover w-full h-full"
    />
   </div>
   <div className="w-[1320px] pl-[124px] mx-auto absolute top-[78px] left-0 ">
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
   {/* main content */}
   <div className="w-full pt-[524px]  gap-16 flex">
    <div className=" w-[752px] flex flex-col gap-6">
     <div className="w-full pt-[72px] gap-4">
      <h3 className="font-lato text-[32px] font-extrabold">Опис перевізника</h3>
      <p className="font-rubic text-[16px] text-[#515B6F] mt-3">
       Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on
       Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been
       at the forefront of expanding internet commerce, powering new business models, and supporting the latest
       platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a
       problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on
       solving the hard technical problems necessary to build global economic infrastructure—from designing highly
       reliable systems to developing advanced machine learning algorithms to prevent fraud.
      </p>
     </div>
     <div className="w-full flex flex-col gap-4">
      <h3 className="font-lato text-[32px] font-extrabold">Ми у соц. мережах</h3>
      <Social />
     </div>
     <Gallery />
    </div>
    <div className="pt-[72px] flex flex-col gap-6 w-[376px]">
     <Countries />
     <Calendar />
    </div>
   </div>
   <Drivers />
  </div>
 );
};
export default ProfilePage;
