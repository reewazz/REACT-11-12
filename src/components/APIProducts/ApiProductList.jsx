import React, { useEffect, useState } from 'react'

const ApiProductList = () => {
 const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(
      "http://localhost:5000/products",
    );
    const finalResponse = await response.json();
    setProducts(finalResponse);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  console.log(products)
  return (
    <div>
          <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {products.map((item, index) => (
    <div
      key={index}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full mb-3">
          {item.category}
        </span>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
          {item.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {item.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-3 text-yellow-500">
          ⭐⭐⭐⭐☆
          <span className="text-gray-500 text-sm ml-2">(4.5)</span>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-5">
          <h3 className="text-2xl font-bold text-green-600">
            ${item.price}
          </h3>

          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
    </div>
  )
}

export default ApiProductList