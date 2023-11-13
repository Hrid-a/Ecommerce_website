import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { addSearchProducts } from "../redux/features/Product/productSlice";
import { useDispatch } from "react-redux";
import { req } from "../utils/axios";

const SearchBox = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const getProducts = async () => {
        try {
            const { data } = await req.get(`/products?search=${search}`);
            if (data.success) {
                dispatch(addSearchProducts(data.products));
            }
        } catch (error) {
            return error?.response?.data?.message || "Something went wrong";
        }
    }

    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Search..."
                value={search}
                name="search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <span onClick={getProducts}><FaSearch /></span>
        </div>
    )
}

export default SearchBox