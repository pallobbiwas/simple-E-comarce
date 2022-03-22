import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
function App() {
  return (
    <div className="text-center">
      <Header></Header>
      <Products></Products>
    </div>
  );
}

export default App;

