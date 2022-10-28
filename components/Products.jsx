import { useQuery } from "react-query";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const { isLoading, error, data } = useQuery(["repoData"], () =>
    fetch("/api/items").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="w-3/4 grid grid-cols-3 xl:grid-cols-4 gap-8 m-auto py-8">
      {data.map((e) => {
        return <ProductCard key={e.id} {...e} />;
      })}
    </div>
  );
};
