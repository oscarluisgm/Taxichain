import { useEffect, useState } from "react";
import nfts from "../services/nfts";
import useParkingTostify from "./useParkingTostify";
import 'react-toastify/dist/ReactToastify.css';


const useParking=()=>{
   
  const[cars, setCars]=useState([])
  const[visible, setVisible]=useState(false)
  const[currentCar, setCurrentCar]=useState({})
  const[parkModalButtons, setparkModalButtons]=useState("")
  const{noti, noti2, noti3}=useParkingTostify()

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


  //con esta función va a desaparecer el modal y va a mostrar el toast correspondiente
  const handleParking=(option)=>{
    handleModal(false, {})
    
    if (option==="sell"){
      setparkModalButtons("sell")
      noti("This car has been sold!");
    }
    if (option==="rent"){
      setparkModalButtons("rent")
      noti2("This car has been rented");
    }
    if (option==="drive"){
      setparkModalButtons("drive")
      noti3("Enjoy your driving");
    }
  }


    return {visible, currentCar,handleFilter,handleModal,cars, handleParking, parkModalButtons}
    
}
export default useParking