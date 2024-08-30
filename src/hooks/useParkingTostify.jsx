import { toast } from "react-toastify"
import { ToastContainer } from "react-toastify";

const useParkingTostify=()=>{
    const noti=(text)=>{
        toast.info(text || "", {theme: "light"});
        
    }

    return {
        ToastContainer,
        noti
    }
}


export default useParkingTostify