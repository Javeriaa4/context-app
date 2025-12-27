import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Loading products...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ marginBottom: 20 }}>Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 20,
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`)}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 16,
              cursor: "pointer",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ height: 150, objectFit: "contain", marginBottom: 10 }}
            />
            <h3 style={{ fontSize: 16 }}>{p.title}</h3>
            <p style={{ color: "#2563eb", fontWeight: "bold" }}>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListScreen;
