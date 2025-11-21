import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Home – Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <Link
            key={item.id}
            to={`/products/${item.id}`}
            className="bg-white border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={item.thumbnail}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-medium mt-3">{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
