import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ProductDetail from "./pages/Product/ProductDetail";

// const RouteModule = ({ path, element }) => {
//   if (window.location.href === path) return element;
// };

function App() {
  // useState

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink> <br />
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
