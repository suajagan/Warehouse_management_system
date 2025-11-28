import axiosClient from "./axiosClient.ts";
import type {Product} from "./Product.ts";

export const productApi ={
    getAll: async(): Promise<Product[]> =>{
        const result = await axiosClient.get("/");
        return result.data;
    },
    getById: async(id: string): Promise<Product> =>{
        const result = await axiosClient.get(`/${id}`);
       return  result.data;
    },

    create: async(product: Omit<Product, "id">): Promise<Product> =>{
        const result= await axiosClient.post("/", product);
        return result.data;
    },

    delete: async(id:string): Promise<void>=> {
        await axiosClient.delete(`/${id}`);
    },
};