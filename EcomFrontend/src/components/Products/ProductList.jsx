import Card from "./Card"
import { useCallback, useRef, useState } from "react";
import useInfinityScroll from "../../hooks/useInfinityScroll";
import SkItem from "../../skeleton/SkItem";
import { FaSearch } from "react-icons/fa";
import { Toaster, toast } from "sonner";

const ProductList = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    const { isLoading, hasMore, products, error } = useInfinityScroll(pageNumber, search);

    const observer = useRef();
    const lastElement = useCallback((node) => {
        if (isLoading) return;
        if (observer.current) return observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1);
            }
        })

        if (node) observer.current.observe(node);

    }, [isLoading, hasMore]);

    if (error) {
        toast.error(error);
    }
    return (
        <>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <span><FaSearch /></span>
            </div>
            <Toaster richColors position="top-center" />
            <div className="cards-container">

                {!isLoading ? products.map((card, index) => {
                    if (products.length === index + 1) {
                        return <Card refElement={lastElement} key={card._id} data={card} />
                    } else {

                        return <Card key={card._id} data={card} />
                    }
                }) : <>
                    {SkItem()}
                    {SkItem()}
                    {SkItem()}
                    {SkItem()}
                    {SkItem()}
                </>
                }
            </div>
        </>
    )
}

export default ProductList