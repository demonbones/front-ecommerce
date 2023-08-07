import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { addProdutToCart } from "../../services/cart/addProductToCart";

export const useAddProductToCart = () => {
  const token = useSelector((store) => store.auth.token);

  const queryCLient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ quantity, productId }) =>
      addProdutToCart({ token, quantity, productId }),
    onSuccess: async () => {
      await queryCLient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return mutation;
};
