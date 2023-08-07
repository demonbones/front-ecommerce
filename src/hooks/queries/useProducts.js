import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/products/getAllProducts";

export const useProducts = (categories, title) => {
  // use Query se usa ara hacer peticiones de tipo get
  const query = useQuery({
    queryKey: ["products", { categories, title }],
    queryFn: () => getAllProducts(categories, title),
  });
  return query;
};
