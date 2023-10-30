import { req } from "../utils/axios";
import { useEffect, useState } from "react";

const useInfinityScroll = (pageNumber, searchValue) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // Initialize with true to load initial data.
    const [error, setError] = useState(null);
    let query = "";

    const getData = async (query) => {
        try {
            const { data } = await req.get(`/products${query}`);
            if (data.success) {
                setProducts((prevProducts) => [...prevProducts, ...data.products]);
                setHasMore(data.products.length > 0);
            }
        } catch (error) {
            setError(error?.response?.data?.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // Reset state when searchValue changes.
        setProducts([]);

    }, [searchValue])

    useEffect(() => {
        setError(null);
        if (searchValue) {
            query += `?search=${searchValue}`;
        }
        const timer = setTimeout(() => {

            getData(query);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchValue]);

    useEffect(() => {
        if (!isLoading && hasMore && pageNumber > 1) {
            query = `?page=${pageNumber}`;
            setIsLoading(true);
            getData(query);
        }

    }, [pageNumber]);

    return { hasMore, isLoading, products, error };
};

export default useInfinityScroll;
