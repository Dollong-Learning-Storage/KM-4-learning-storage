import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      {products?.map((item) => (
        <button
          key={item.id}
          onClick={() => (window.location.href = `product/${item.id}`)}
        >
          <h2>{item.title}</h2>
        </button>
      ))}
    </div>
  );
};

export default Product;
