import { create } from "zustand";
import http from "../../config";
import { product_request } from "../../interfaces/products";

const useProductStore = create<product_request>(() => ({
    getData: async (data) => {
        try{
            const response = await http.get(`/products?limit=${data?.limit}&skip=${data?.skip}`)
            return response?.data?.payload || []
        }catch(err){
            console.log(err);
        }
    },
    getDatabyId: async (data) => {
        try{
            const response = await http.get(`/product/${data}`)
            return response?.data?.payload || []
        }catch(err){
            console.log(err);
        }
    }
}))

export default useProductStore