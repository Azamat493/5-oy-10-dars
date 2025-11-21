import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setItem(res));
  }, [id]);

  if (!item) return <div className="text-2xl">Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-xl">
      <h1 className="text-3xl font-bold mb-3">{item.title}</h1>
      <img src={item.thumbnail} className="w-full rounded mb-4" />
      <p className="text-gray-700">{item.description}</p>
    </div>
  );
};

export default ProductDetail;
