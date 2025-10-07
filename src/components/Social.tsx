import IconTwitter from "../assets/icons/twitter1.svg";
import IconFacebook from "../assets/icons/fb.svg";

const socialsDtata = [
 {
  icon: IconTwitter,
  link: "https://twitter.com/stripe",
  text: "twitter.com/stripe",
 },
 {
  icon: IconFacebook,
  link: "https://facebook.com/StripeHQ",
  text: "facebook.com/StripeHQ",
 },
];
const Social: React.FC = () => {
 return (
  <div className="flex gap-4 items-center">
   {socialsDtata.map((social) => (
    <a
     href={social.link}
     className="flex items-center  h-10 gap-2 px-6 py-3  text-primary  hover:bg-purple-100 transition font-medium border border-solid border-1-primary "
    >
     <img
      src={social.icon}
      alt="twitter icon"
     />
     <span>{social.text}</span>
    </a>
   ))}
  </div>
 );
};
export default Social;
