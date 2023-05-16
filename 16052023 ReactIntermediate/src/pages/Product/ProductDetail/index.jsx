import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${params.productId}`
        );
        setIsLoading(false);
        setProduct(response.data);
      } catch (error) {
        setIsLoading(false);
      }
    };

    getAPI();
  }, [params.productId]);

  if (isLoading)
    return (
      <div className="product-container">
        <h2>Loading....</h2>
      </div>
    );

  return (
    <div className="product-container">
      <h1>Skilvul Product</h1>
      <div>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
