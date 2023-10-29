import { useParams } from "react-router-dom"
import useSingleProduct from "../../hooks/useSingleProduct";
import { useSelector } from "react-redux";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
import { productSchema } from "../../utils/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleProductError, updateTheProduct } from "../../redux/features/Product/productSlice";
import { Toaster, toast } from "sonner";
import Input from "../Forms/Input";
import { categories, productInputs } from "../../utils/data";
import InputFile from "../Forms/InputFile";
import Textarea from "../Forms/Textarea";
import Button from "../Button";

const AdminProductPage = () => {
    const { productId } = useParams();

    const { error, message, isSuccess, loading } = useSelector(state => state.product);
    const dispatch = useDispatch();
    const values = useSingleProduct(productId);


    const { register, handleSubmit, formState } = useForm({
        resolver: valibotResolver(productSchema),
        values
    })
    const [images, setImages] = useState([]);

    const handleImage = (e) => {
        if (e.target.files.length) {
            setImages(prev => ([...prev, ...e.target.files]));
        }
    }

    const updateProduct = (data) => {
        const formData = new FormData();
        Object.entries(data).map(item => formData.append(item[0], item[1]));
        if (images.length) {
            images.forEach(item => formData.append("images", item));
        }
        dispatch(updateTheProduct({ id: productId, productData: formData }));
    }

    const errors = Object.values(formState.errors);
    if (errors.length) {
        dispatch(handleProductError(errors[0].message));
    } else {
        dispatch(handleProductError(""));
    }

    if (isSuccess) {
        toast.success(message);
    } else if (error) {
        toast.error(error);
    }



    return (
        <div>
            <section>
                <div className="form">
                    <Toaster richColors position="top-center" />
                    <form onSubmit={handleSubmit((data) => updateProduct(data))}>
                        {productInputs.map(input => <Input
                            key={input.id} {...input} register={register} />)}
                        <div className="inputFile">
                            <InputFile handleImage={handleImage} multiple />
                            {images.length && <span className="length">{images.length}</span>}
                        </div>
                        <div className="form-group">
                            <select name="category" {...register("category")}>
                                {categories.map(category => <option value={category} key={category}>{category}</option>)}
                            </select>
                        </div>
                        <Textarea register={register} label="description" />
                        <Button className="btn btn-primary" text="update" loading={loading} />
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AdminProductPage

