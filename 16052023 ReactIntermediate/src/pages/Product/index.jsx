import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setIsLoading(false);
        setProducts(response.data);
      } catch (error) {
        setIsLoading(false);
      }
    };

    getAPI();
  }, []);

  if (isLoading)
    return (
      <div className="product-container">
        <h2>Loading....</h2>
      </div>
    );

  return (
    <div className="product-container">
      <h1>Skilvul Product</h1>
      <br />
      <br />
      {products?.map((item) => (
        <button key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
          <h2>{item.title}</h2>
        </button>
      ))}
    </div>
  );
};

export default Product;
