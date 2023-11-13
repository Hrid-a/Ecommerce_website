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
                const { data } = await req.get("/admin/products", { signal: controller.signal });
                if (data.success) {
                    console.log(data);
                    dispatch(addToProducts(data.products));
                }
            } catch (error) {
                return error.response.data.message;
            }
        }
        getProducts();

        return () => controller.abort();

    }, [])

}

export default useProducts