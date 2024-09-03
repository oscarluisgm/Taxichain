import { useEffect, useState } from "react";
import nfts from "../services/nfts";
import useParkingTostify from "./useParkingTostify";
import 'react-toastify/dist/ReactToastify.css';


const useParking=()=>{
   
  const[cars, setCars]=useState([])
  const[visible, setVisible]=useState(false)
  const[secondaryVisible,setSecondaryVisible]=useState(false)
  const[currentCar, setCurrentCar]=useState({})
  const[buttonAction, setButtonAction]=useState("")
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

  const secondaryModalParking=(ok, actionButton)=>{
    setSecondaryVisible(ok)
    setButtonAction(actionButton)
  }

  const handleParking=()=>{
    handleModal(false, {})
    secondaryModalParking(false, "")
    
    if (buttonAction==="sell"){
      noti("This car has been sold!");
    }
    if (buttonAction==="rent"){
      noti2("This car has been rented");
    }
    if (buttonAction==="drive"){
      noti3("Enjoy your driving");
    }
  }

  const handleCancel=()=>{
    setSecondaryVisible(false)
  }


    return {visible, currentCar,handleFilter,handleModal,cars, handleParking, secondaryVisible, secondaryModalParking,handleCancel}
    
}
export default useParking