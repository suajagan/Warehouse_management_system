import axiosClient from "./axiosClient";
import type { Product } from "./Product.ts";
export const productApi = {

    getAll: async () => {
        const result = await axiosClient.get("/api/products");
        return result.data;
    },

    getById: async (id: string) => {
        const result = await axiosClient.get(`/api/products/${id}`);
        return result.data;
    },

    create: async (product: Omit<Product, "id">) => {
        const result = await axiosClient.post("/api/products", product);
        return result.data;
    },

    delete: async (id: string) => {
        await axiosClient.delete(`/api/products/${id}`);
    },

    update: async (id: string, product: Product) => {
        const result = await axiosClient.put(`/api/products/${id}`, product);
        return result.data;
    }
};

