import { req } from "../../../../utils/axios";

export const getAllUsers = async () => {

    try {
        const { data } = await req.get("/users");
        const users = data.users.map((user, index) => {
            return { ...user, id: index };
        })

        return users;
    } catch (error) {
        const errorMessage = error.response.data.message || "something wrong happened";
        return errorMessage;
    }
}  