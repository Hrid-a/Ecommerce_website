import { req } from "../../../../utils/axios";
export const getAllOrders = async () => {

    try {
        const { data } = await req.get("/admin/orders");
        const orders = data?.orders.map((order, index) => {
            return { ...order, id: index }
        })
        return orders;

    } catch (error) {
        return error.response.data.message;
    }

}