import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "http://localhost:5000/products",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message;
    toast.error(message);
    return Promise.reject(error);
  }
);

export const getProducts = async () => {
  const response = await api.get("/");
  return response.data;
};

export const addProduct = async (productData) => {
  const response = await api.post("/", productData);
  toast.success("Product added successfully");
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const response = await api.put(`/${id}`, productData);
  toast.success("Product updated successfully");
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/${id}`);
  toast.success("Product deleted successfully");
  return response.data;
};

export const getLowStockProducts = async () => {
  const response = await api.get("/low-stock");
  return response.data;
};