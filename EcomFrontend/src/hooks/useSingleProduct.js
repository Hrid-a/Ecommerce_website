import { useEffect, useState } from "react";
import { req } from "../utils/axios";

const useSingleProduct = (id) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const getSingleProduct = async () => {
            try {
                const { data } = await req.get(`/product/${id}`);

                const product = Object.fromEntries(
                    Object.entries(data.product).map(entry => typeof entry[1] === "number" ? [entry[0], entry[1].toFixed()] :
                        [entry[0], entry[1]])
                );

                setProduct({ ...product });
            } catch (error) {
                console.log(error.response);
            }
        }

        !Object.keys(product).length && getSingleProduct(id);
    }, [id, product]); // Include id as a dependency

    return product;
}

export default useSingleProduct;
