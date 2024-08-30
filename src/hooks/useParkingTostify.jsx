import { toast } from "react-toastify"
import { ToastContainer } from "react-toastify";

const useParkingTostify=()=>{
    const noti=(text)=>{
        toast.error(text || "", {theme: "light"});
    }

    const noti2=(text2)=>{
        toast.warning(text2 || "", {theme: "colored"})
    }

    const noti3=(text3)=>{
        toast.info(text3 || "", {theme: "dark"})
    }

    return {
        ToastContainer,
        noti,
        noti2,
        noti3
    }
}


export default useParkingTostify