import { categories, iproducts } from "@/data";
import React, { useState } from "react";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("TABLET");

  const filteredProducts =
    selectedCategory == "All categories"
      ? iproducts
      : iproducts.filter((product) => product.category == selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white shadow-sm">
        <div className="mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-[#5eb8b2] text-center">
            Related Products
          </h1>
        </div>
      </div>

      <div className="mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">All categories</h2>
              <nav className="flex flex-wrap gap-2 lg:flex-col">
                {categories.map((category,i) => (
                  <button
                  key={i}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded ${
                      selectedCategory === category
                        ? "bg-gray-200 text-gray-900"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white rounded-lg overflow-hidden">
                <div className="min-w-screen">
              <div className="bg-[#ef6c00] text-white">
                <div className="grid grid-cols-12 gap-4 px-6 py-4">
                  <div className="col-span-3 min-w-[100px]">
                    <h3 className="font-semibold text-white">Images</h3>
                  </div>
                  <div className="col-span-4 min-w-[150px]">
                    <h3 className="font-semibold text-white">Name</h3>
                  </div>
                  <div className="col-span-5 min-w-[200px]">
                    <h3 className="font-semibold text-white">Composition</h3>
                  </div>
                </div>
                </div>
              </div>
              <div className="divide-y">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-12 gap-4 px-6 py-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="col-span-3 flex items-center justify-center">
                        <div>
                          {product.img ? (
                            <img
                            src={product.img}
                            alt={product.name}
                            className="w-full max-h-32 object-contain rounded-lg"/>
                          ) : (
                            <span className="w-full h-full object-cover rounded-lg">
                                No Image
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-span-4 flex items-center justify-center">
                        <h4 className="font-semibold text-gray-900">
                          {product.name}
                        </h4>
                      </div>
                      <div className="col-span-5 flex items-center">
                        <p className="text-sm text-gray-700">
                          {product.composition}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No Products found in this category.</div>
                )}
              </div>
            </div>

            {filteredProducts.length > 0 && (
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} products in{" "}
                  {selectedCategory}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
