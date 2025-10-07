import Footer from "../components/layout/Footer";
import {Header} from "../components/layout/Header";
import {Outlet} from "react-router-dom";

export default function AdminLayout() {
 return (
  <div className="flex-1 flex flex-col">
   <Header />

   <main className="flex-1 ">
    <Outlet />
   </main>

   <Footer />
  </div>
 );
}
