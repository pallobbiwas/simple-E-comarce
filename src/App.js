import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-center">
      <Header></Header>
      <Products></Products>
    </div>
  );
}

export default App;
