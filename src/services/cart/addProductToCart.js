import { axiosInstance } from "../../api/axiosInstance";

export const addProdutToCart = async ({ token, quantity, productId }) => {
  try {
    const Body = { quantity, productId };

    await axiosInstance.post("cart", Body, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    if (error.response)
      throw typeof error.response.data === "string"
        ? new Error(error.response.data)
        : error.response.data;
    else throw new Error("Algo salio mal con la peticion del carrito");
  }
};
