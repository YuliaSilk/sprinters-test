import {Header} from "../components/layout/Header";
import {Outlet} from "react-router-dom";

export default function AdminLayout() {
 return (
  <div className="flex-1 flex flex-col">
   <Header />

   <main className="flex-1 w-[1320px]">
    <Outlet />
   </main>
   {/* <Footer/> */}
  </div>
 );
}
