import { createContext } from "react";

export const ApiContext = createContext({
  products: [],
});

export const productsData = [
  { id: 1, name: "Red Coral", color: "#FF5733", year: 2021, pantone_value: "18-1664" },
  { id: 2, name: "Ocean Blue", color: "#1E90FF", year: 2022, pantone_value: "19-4052" },
  { id: 3, name: "Sunshine Yellow", color: "#FFD700", year: 2023, pantone_value: "13-0858" },
];
