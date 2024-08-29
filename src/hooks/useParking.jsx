import { useEffect, useState } from "react";
import nfts from "../services/nfts";
import useParkingTostify from "./useParkingTostify";
import 'react-toastify/dist/ReactToastify.css';


const useParking=()=>{
   
  const[cars, setCars]=useState([])
  const[visible, setVisible]=useState(false)
  const[currentCar, setCurrentCar]=useState({})
  const{noti}=useParkingTostify()

  useEffect(()=>{
    
    const rarity=localStorage.getItem('rarity')
    
    if (rarity){
      handleFilter(rarity)
    }else{
      setCars(nfts)
    }
  },[])

  const handleFilter = (name) => {
    const filtered=nfts.filter((nft)=>nft.name===name)
    setCars(filtered)
    localStorage.setItem('rarity', name)
  }

  const handleModal=(isVisible, nft)=>{
    setVisible(isVisible);
    setCurrentCar(nft);
  }

  const sold=()=>{
    handleModal(false, {})
    noti(`Sold successfully`);
  }


    return {visible,sold,currentCar,handleFilter,handleModal,cars}
    
}
export default useParking