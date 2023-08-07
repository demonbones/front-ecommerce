import { useQuery } from "@tanstack/react-query";
import { getAllCatergories } from "../../services/products/getAllCategories";

export const useCategories = () => {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCatergories,
  });

  return query;
};
