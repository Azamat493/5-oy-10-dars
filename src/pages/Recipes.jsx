import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((res) => setData(res.recipes));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Recipes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((item) => (
          <Link
            key={item.id}
            to={`/recipes/${item.id}`}
            className="bg-white border p-4 rounded-lg shadow hover:shadow-xl transition"
          >
            <img
              src={item.image}
              className="w-full h-40 rounded object-cover"
            />
            <h3 className="text-lg font-medium mt-2">{item.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
