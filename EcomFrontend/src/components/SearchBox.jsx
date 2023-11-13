import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
    const [search, setSearch] = useState("");
    const getProducts = () => {
        console.log("search");
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