import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p style={{ padding: 20 }}>Loading product...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{ maxHeight: 300, objectFit: "contain" }}
      />
      <p style={{ marginTop: 10, fontWeight: "bold", color: "#2563eb" }}>
        ${product.price}
      </p>
      <p>{product.description}</p>
      <p style={{ fontStyle: "italic", color: "#64748b" }}>{product.category}</p>
    </div>
  );
};

export default ProductDetailsScreen;
