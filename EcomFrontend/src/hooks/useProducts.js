import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { req } from "../utils/axios";
import { addToProducts } from "../redux/features/Product/productSlice";

const useProducts = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const controller = new AbortController();
        const getProducts = async () => {
            try {
                const { data } = await req.get("/products", { signal: controller.signal });
                if (data.success) {
                    dispatch(addToProducts(data.products));
                }
            } catch (error) {
                return error?.response?.data?.message || "Something went wrong";
            }
        }
        getProducts();

        return () => controller.abort();

    }, [])

}

export default useProducts