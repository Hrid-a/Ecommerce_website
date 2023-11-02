import { useEffect, useState } from "react"
import { req } from "../utils/axios";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const { data } = await req.get("/admin/products");
            console.log(data);
            if (data.success) {
                setProducts((prevProducts) => [...prevProducts, ...data.products]);
            }
        } catch (error) {
            console.log(error);
            return error.response.data.message;
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return products;
}

export default useProducts