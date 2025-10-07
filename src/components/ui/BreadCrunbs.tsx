import {Link} from "react-router-dom";
const BreadCrunbs: React.FC = () => {
 return (
  <div className=" mt-10 mb-10 ">
   <nav className="text-sm text-gray-500 py-4">
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
    <Link
     to="/profile/stripe"
     className="text-bold"
    >
     {" "}
     <span className="ml-1 ">Stripe</span>{" "}
    </Link>
   </nav>
  </div>
 );
};
export default BreadCrunbs;
