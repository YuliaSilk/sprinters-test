import Drivers from "../components/Drivers";
import Description from "../components/Description";
import Services from "../components/Services";
import TestimonialsSection from "../components/Testimonials";
import Intro from "../components/Intro";

const ProfilePage: React.FC = () => {
 return (
  <div>
   <Intro />
   <Description />
   <Drivers />
   <Services />
   <TestimonialsSection />
  </div>
 );
};
export default ProfilePage;
