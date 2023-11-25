import Card from "./Card"
import { useCallback, useRef, useState } from "react";
import useInfinityScroll from "../../hooks/useInfinityScroll";
import SkItem from "../../skeleton/SkItem";
import { Toaster, toast } from "sonner";
import { useSelector } from "react-redux";
import SearchBox from "../SearchBox";

const ProductList = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const { isLoading, hasMore, error } = useInfinityScroll(pageNumber);
    const products = useSelector(state => state.product.products);
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
            <Toaster richColors position="top-center" />
            <SearchBox />
            <div className="cards-container">

                {products.map((card, index) => {
                    if (products.length === index + 1) {
                        return <Card ref={lastElement} key={card._id} data={card} />
                    } else {

                        return <Card key={card._id} data={card} />
                    }
                })}

                {isLoading && <>
                    {SkItem()}
                    {SkItem()}
                    {SkItem()}
                    {SkItem()}
                    {SkItem()}
                </>
                }
                {!hasMore && <p>No more data</p>}
            </div>
        </>
    )
}

export default ProductList