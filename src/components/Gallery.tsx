import ItemGalleryFirst from "../assets/images/leon.webp";
import ItemGallerySecond from "../assets/images/leon2.webp";
import ItemGalleryThird from "../assets/images/leon3.webp";
const Gallery: React.FC = () => {
 return (
  <div className="w-full flex flex-col gap-4">
   <img
    src={ItemGalleryFirst}
    alt="item gallery "
    className="w-full object-cover"
   />
   <img
    src={ItemGallerySecond}
    alt="item gallery"
   />
   <img
    src={ItemGalleryThird}
    alt="item gallery"
   />
  </div>
 );
};
export default Gallery;
