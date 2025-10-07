import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import {Home} from "./pages/Home";
import CarrierPriofile from "./pages/CarrierProfile";
function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route
     path="/"
     element={<Layout />}
    >
     <Route
      path="carrierse"
      element={<div>Перевізникам</div>}
     />
     <Route
      index
      element={<Home />}
     />
     <Route
      path="about"
      element={<div>Про нас</div>}
     />
     <Route
      path="profile"
      element={<CarrierPriofile />}
     ></Route>
    </Route>
   </Routes>
  </BrowserRouter>
 );
}

export default App;
