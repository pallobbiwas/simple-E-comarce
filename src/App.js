import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Paymet from './components/Payment/Paymet';
import Products from "./components/Products/Products";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-center">
      <Header></Header>

      <Routes>
        <Route path="/home" element={<Products />}></Route>
        <Route path="/payment" element={<Paymet />} />
      </Routes>
    </div>
  );
}

export default App;
