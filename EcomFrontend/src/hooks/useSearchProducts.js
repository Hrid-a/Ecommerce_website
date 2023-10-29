import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { req } from "../utils/axios";
import { addToProducts } from "../redux/features/Product/productSlice";


const useSearchProducts = (searchValue) => {
    const dispatch = useDispatch();
    const getData = async (search) => {
        try {
            const { data } = await req.get(`/products?search=${search}`);
            if (data?.success) {
                dispatch(addToProducts(data.products));
            }
        } catch (error) {
            return error.response.data.message || error.response;
        }
    }
    useEffect(() => {

        const timer = setTimeout(() => {
            getData(searchValue);
        }, 300);
        return () => clearTimeout(timer);

    }, [searchValue]);
}

export default useSearchProducts