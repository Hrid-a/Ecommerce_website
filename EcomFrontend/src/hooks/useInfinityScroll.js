import { req } from "../utils/axios";
import { useEffect, useState } from "react";

const useInfinityScroll = (pageNumber, searchValue) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    let query = "";
    if (searchValue) {
        query += "?search=" + searchValue;
    } else if (pageNumber) {
        query += "?page=" + pageNumber;
    }

    const getData = async () => {
        try {
            const { data } = await req.get(`/products${query}`);
            setIsLoading(false);
            setHasMore(data.products.length > 0);
            if (data?.success) {
                setProducts(prev => [...prev, ...data.products])
            }
        } catch (error) {
            return error?.response?.data?.message || "someThing went wrong";

        }
    }

    useEffect(() => {
        setProducts([]);
    }, [searchValue])
    useEffect(() => {
        setIsLoading(true);
        getData();
    }, [pageNumber, searchValue]);


    return { hasMore, isLoading, products };
}

export default useInfinityScroll