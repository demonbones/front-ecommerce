import { axiosInstance } from "../../api/axiosInstance";

export const getAllCatergories = async () => {
  try {
    const res = await axiosInstance.get("categories");

    return res.data;
  } catch (error) {
    // la peticion llego hasta el backend pero el backend
    // no respondio satisfactoriamente (respondio algo fuera del estatus 200)
    if (error.response) throw error.response.data;
    else throw new Error("Algo salio mal con la peticion de categorias");
  }
};
