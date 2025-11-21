import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((item) => (
          <Link
            key={item.id}
            to={`/products/${item.id}`}
            className="bg-white border p-4 rounded-lg shadow hover:shadow-xl transition"
          >
            <img
              src={item.thumbnail}
              className="w-full h-40 rounded object-cover"
            />
            <h3 className="text-lg font-medium mt-2">{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
