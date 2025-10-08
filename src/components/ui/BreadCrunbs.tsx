import {Link} from "react-router-dom";
const BreadCrunbs: React.FC = () => {
 return (
  <div className=" mb-10 ">
   <nav className="text-sm text-gray-500">
    <Link
     to="/"
     className="hover:underline"
    >
     Головна
    </Link>{" "}
    <span className="mx-2">/</span>
    <Link
     to="/profile"
     className="hover:underline"
    >
     {" "}
     <span className="ml-1">Профіль перевізника</span>{" "}
    </Link>
    <span className="mx-2">/</span>
    <span className="ml-1 text-semibold ">Stripe</span>{" "}
   </nav>
  </div>
 );
};
export default BreadCrunbs;
