import Social from "../components/Social";
import Gallery from "../components/Gallery";
import Countries from "../components/Countries";
import Calendar from "../components/Calendar";
const Description: React.FC = () => {
 return (
  <section className="container w-full pt-[524px] md:pt-[440px] xl:pt-[524px] gap-16 flex flex-col xl:flex-row">
   <div className=" w-full xl:w-[752px] flex flex-col gap-6">
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
   <div className="xl:pt-[72px] flex flex-col md:flex-row justify-between xl:flex-col gap-6 md:gap-12 xl:gap-6 w-[376px] md:w-full xl:w-[376px]">
    <Countries />
    <Calendar />
   </div>
  </section>
 );
};
export default Description;
