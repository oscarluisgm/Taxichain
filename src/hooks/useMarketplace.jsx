import { useEffect, useState } from "react";
import nfts from "../services/nfts";
import useTostify from "./useTostify";
import 'react-toastify/dist/ReactToastify.css';

const useMarketplace=()=>{
   
  const[cars, setCars]=useState([])
  const[visible, setVisible]=useState(false)
  const[currentCar, setCurrentCar]=useState({})
  const{notify}=useTostify()

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

  const buy=()=>{
    handleModal(false, {})
    notify("Bought successfully");
  }


    return {visible,handleModal,buy,currentCar,handleFilter,handleModal,cars}
    
}
export default useMarketplace