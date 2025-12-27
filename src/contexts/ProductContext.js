import React, { createContext, useState, useContext, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Sample products
    setProducts([
      { id: 1, name: "Red", color: "#FF0000", year: 2021, pantone_value: "19-1664" },
      { id: 2, name: "Blue", color: "#0000FF", year: 2022, pantone_value: "19-4052" },
      { id: 3, name: "Green", color: "#00FF00", year: 2023, pantone_value: "17-6153" },
    ]);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
