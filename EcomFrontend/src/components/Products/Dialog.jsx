import { useState } from "react";
import { categories, productInputs } from "../../utils/data";
import Input from "../Forms/Input";
import ResponsiveDialog from "../ui/ResponsiveDialog";
import InputFile from "../Forms/InputFile";
import { toast } from "sonner";
import { productSchema } from "../../utils/auth";
import Textarea from "../Forms/Textarea";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, handleProductError } from "../../redux/features/Product/productSlice";
import Button from "../Button";

const Dialog = () => {
    const { error, message, isSuccess, loading } = useSelector(state => state.product);
    const { register, handleSubmit, formState, reset } = useForm({
        resolver: valibotResolver(productSchema),
        defaultValues: {
            name: "",
            price: "",
            stock: "",
            category: "decor",
            description: "",
        }
    })


    const dispatch = useDispatch()
    const [images, setImages] = useState([]);

    const handleImage = (e) => {
        setImages(prev => ([...prev, ...e.target.files]));
    }

    const addProductToDb = async (data) => {
        const formData = new FormData();
        Object.entries(data).map(item => formData.append(item[0], item[1]));
        images.forEach(item => formData.append("images", item));
        dispatch(addProduct(formData));
        reset();
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
        <>
            <ResponsiveDialog title="Add a New Product" >
                <form onSubmit={handleSubmit(addProductToDb)}>
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
                    <Button className="btn btn-primary" text="add" loading={loading} />
                </form>
            </ResponsiveDialog>
        </>
    )
}

export default Dialog