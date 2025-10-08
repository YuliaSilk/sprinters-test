import {NavLink} from "react-router-dom";

export const Home = () => {
 return (
  <section className="container w-full flex flex-col items-center h-screen py-72">
   <h1 className="text-4xl font-bold">Home</h1>
   <p>
    It's a home page. You need to go to{" "}
    <NavLink
     to="/profile"
     className="py-3 border-b border-gray-100 text-primary"
    >
     Профіль перевізника
    </NavLink>
   </p>
  </section>
 );
};
