import { create } from "zustand";

const useLikeStore = create((set, get:any) => ({
    likes: [],
    addLike: (product: any) => {
        set((state: any) => ({
            likes: [...state.likes, product]
        }));
    },
    removeLike: (productId: string) => {
        set((state: any) => ({
            likes: state.likes.filter((product: any) => product._id!== productId)
        }));
    },
    isLiked: (productId: string) => {
        const { likes } = get();
       
        return likes.some((product: any) => product._id === productId);
    }
}));

export default useLikeStore;