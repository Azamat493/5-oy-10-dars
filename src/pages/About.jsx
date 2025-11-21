import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=6")
      .then((res) => res.json())
      .then((res) => setRecipes(res.recipes));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">About – Recipes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((item) => (
          <Link
            key={item.id}
            to={`/recipes/${item.id}`}
            className="bg-white border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-medium mt-3">{item.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
