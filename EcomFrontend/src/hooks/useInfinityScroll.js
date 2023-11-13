import { useDispatch } from "react-redux";
import { req } from "../utils/axios";
import { useEffect, useState } from "react";
import { addToProducts } from "../redux/features/Product/productSlice";

const useInfinityScroll = (pageNumber) => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // Initialize with true to load initial data.
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const query = `?page=${pageNumber}`;
        const getData = async (query) => {
            try {
                setIsLoading(true);
                const { data } = await req.get(`/products${query}`);
                if (data.success) {
                    dispatch(addToProducts(data.products));
                    setHasMore(data.products.length > 0);
                }
            } catch (error) {
                setError(error?.response?.data?.message || "Something went wrong");
            } finally {
                setIsLoading(false);
            }
        };


        pageNumber > 1 && getData(query);


    }, [pageNumber]);
    return { hasMore, isLoading, error };
};

export default useInfinityScroll;
