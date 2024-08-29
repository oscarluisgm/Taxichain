import { toast } from "react-toastify"
import { ToastContainer } from "react-toastify";

const useParkingTostify=()=>{
    const noti=(text)=>{
        toast.success(text || "");
    }

    return {
        ToastContainer,
        noti
    }
}
export default useParkingTostify