import { axiosInstance } from "../../api/axiosInstance";

export const getAllProducts = async (category, title) => {
  try {
    const params = { title, categoryId: category };
    const res = await axiosInstance.get("products/", {
      params,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
