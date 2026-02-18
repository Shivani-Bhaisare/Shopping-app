import React, { useState } from "react";

const WomenCollection = () => {
  // Products state
  const [womenProducts, setWomenProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Add product
  const handleAdd = () => {
    if (searchTerm.trim() === "") return;

    const newProduct = {
      id: Date.now(),
      title: searchTerm,
    };

    setWomenProducts([...womenProducts, newProduct]); // add in list
    setSearchTerm(""); // clear input
  };

  // Delete product
  const handleDelete = (id) => {
    const updatedProducts = womenProducts.filter((item) => item.id !== id);
    setWomenProducts(updatedProducts);
  };

  return (
    <div className="min-h-screen bg-[#f6f6f6] py-28 px-5 sm:px-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-black text-center mb-6">
        Women’s Collection
      </h1>

      {/* Input + Add button */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter product name"
          className="px-4 py-2 border w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#f5bd63]"
        />
        <button
          onClick={handleAdd}
          className="px-6 py-2 bg-[#f5bd63] text-white font-semibold active:scale-95"
        >
          Add Product
        </button>
      </div>

      {/* Responsive Grid for Products */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {womenProducts.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center bg-[#3f1700] px-4 py-6 text-white "
          >
            <span className="text-lg font-medium break-words">
              {product.title}
            </span>
            <button
              onClick={() => handleDelete(product.id)}
              className="px-3 py-1 bg-red-500 text-white text-sm sm:text-base "
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenCollection;
