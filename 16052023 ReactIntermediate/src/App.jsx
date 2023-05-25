import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ProductDetail from "./pages/Product/ProductDetail";
import { useSelector } from "react-redux";
import TodoList from "./pages/TodoList";
import Login from "./pages/Login";

function App() {
  const state = useSelector((state) => state);

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
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>Total CartItem: {state?.length || 0}</li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
