import { create } from "zustand";

const useCartStore = create((set, get:any) => ({
    price: 0,
    carts: [],
    addCart: (product: any) => set((state:any) => ({
        carts: [...state.carts, product]
    })),
    removeCart: (productId: string) => set((state:any) => ({
        carts: state.carts.filter((product:any) => product._id !== productId)
    })),
    getTotalPrice: () => {
        const { carts } :any= get();
        return carts.reduce((total:any, product:any) => total + product?.price, 0);
    },
    checkCart: (productId:string) => {
        const { carts } = get();
        return carts.some((product:any) => product._id === productId);
    }
}));

export default useCartStore;