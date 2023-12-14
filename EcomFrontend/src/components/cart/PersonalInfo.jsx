import { useForm } from "react-hook-form"
import { valibotResolver } from "@hookform/resolvers/valibot";
import { shippingInfo } from "../../utils/data"
import { shippingInfoSchema } from "../../utils/auth"
import Input from "../Forms/Input";
import Button from "../Button";
import { createOrder } from "../../redux/features/orders/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "sonner";
import { resetCart } from "../../redux/features/Product/cartSlice";
import ThankYou from "../ThankYou";

const PersonalInfo = () => {
    const { isSuccess, error, loading, message } = useSelector(state => state.order)
    const { products } = useSelector(state => state.cart);
    const { register, handleSubmit, formState } = useForm({
        resolver: valibotResolver(shippingInfoSchema),
        defaultValues: {
            address: "",
            city: "",
            phone: "",
        }
    })
    const dispatch = useDispatch();

    if (isSuccess) {
        toast.success(message);
        dispatch(resetCart());

        return <ThankYou />;
    }

    const handleInfo = (data) => {
        const orderItems = products.map(product => ({
            name: product?.name,
            qty: product?.qty,
            image: product.img,
            product: product?.id,
            price: product?.price
        }));

        const shippingAmount = 1;
        const totalAmount = products.reduce((current, product) => product.price * product.qty + current, 0);

        dispatch(createOrder({ shippingAmount, totalAmount, orderItems, shippingInfo: data }));

    }

    const errorsArray = Object.values(formState.errors);
    if (errorsArray.length) {
        toast.error(errorsArray[0].message);
    }

    return (
        <div className="form">
            {error && <p className="error">{error}</p>}
            <Toaster richColors position="top-center" />
            <form onSubmit={handleSubmit(handleInfo)}>
                {shippingInfo.map(input => <Input key={input.id}
                    {...input} register={register}
                />)}

                <Button className="btn btn-primary" text="Place Order" loading={loading} />
            </form>
        </div>
    )
}

export default PersonalInfo

