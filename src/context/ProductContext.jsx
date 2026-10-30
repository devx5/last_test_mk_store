import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';



// 1. إنشاء الكونتكست
export const ProductsContext = createContext();

// 2. إنشاء الـ Provider المسؤول عن جلب وتخزين المنتجات وتوزيعها
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};