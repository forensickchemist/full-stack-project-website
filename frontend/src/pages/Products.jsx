import React from "react";

const Products = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-7xl font-bold text-gray-900">404</h1>

      <p className="mt-4 text-xl font-semibold text-gray-800">Page Not Found</p>

      <p className="mt-2 max-w-md text-sm text-gray-600">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <a
        href="/"
        className="mt-6 inline-flex items-center rounded-md bg-gray-900 px-6 py-2 text-sm font-medium text-white hover:bg-gray-800"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default Products;
