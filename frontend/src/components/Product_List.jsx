import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../api/base";

const Product_List = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <Loading />;

  const isLandingPage = location.pathname === "/";
  const displayedProducts = isLandingPage ? products.slice(0, 6) : products;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {displayedProducts.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={`${BASE_URL}${product.image}`}
                src={`${BASE_URL}${product.image}`}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.product_name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    ₱{product.product_price}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.brand}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product_List;
