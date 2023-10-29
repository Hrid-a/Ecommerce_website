import { req } from "../../../../utils/axios";

export const getAllProducts = async () => {
    try {
        const { data } = await req.get("/admin/products");
        return data;
    } catch (error) {
        return error.response.data.message;
    }
}

export const getProducts = async () => {
    try {
        const { data } = await req.get("/products");
        return data;
    } catch (error) {
        return error.response.data.message;
    }
}