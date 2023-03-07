import axios from "axios";
import { toast } from "react-hot-toast";
import { userRoute } from "./APIRoutes";

export const handleDelete = async (id, refetch) => {
    await axios.delete(`${userRoute}/${id}`).then(res => {
        if (res.data.acknowledged === true) {
            toast.success('add success');
            refetch();
        } else { toast.error('failed'); }

    }).catch(err => console.log(err));
};
