import { toast } from "react-toastify"
import { ToastContainer } from "react-toastify";

const useTostify=()=>{
    const notify=(text)=>{
        toast.success(text || "");
    }

    return {
        ToastContainer,
        notify
    }
}
export default useTostify