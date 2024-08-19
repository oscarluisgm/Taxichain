import { useEffect, useState } from "react";
import nfts from "../services/nfts";
import useTostify from "../hooks/useTostify";
import 'react-toastify/dist/ReactToastify.css';
import { NftModal } from "../modals/nftModals";

export default function Marketplace() {
  
  
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
    notify(`Bought successfully`);
  }

  return (
    <>
      
      {visible && <NftModal handleModal={handleModal} buy={buy} currentCar={currentCar}/>}



      <div className="container-fluid bg-container">
        <div className="row">
          <div className="col-12 filter-buttons gap-3 p-2">
            <button className="btn-filter common" onClick={()=>handleFilter('Common')}>common</button>
            <button className="btn-filter epic" onClick={()=>handleFilter('Epic')} >epic</button>
            <button className="btn-filter legendary" onClick={()=>handleFilter('Legendary')} >legendary</button>
          </div>
        </div>
        
        <div className="row">
          {cars?.map((nft, key) => {
            return (
              <div key={key} className="col-12 p-3 col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="p-2 frames" onClick={()=>handleModal(true, nft)}>
                  
                  <img src={nft.img} className="img-nft" />
                  <div className="description mt-2 px-2">
                    <h6 className="text-light">
                      This NFT provides an estimated ROI of {nft.roi} months.
                    </h6>
                  </div>
                  <div className="nft-texts">
                    <div className="rarity">
                      <h6 className="text-secondary rarity-text">Rarity: </h6>
                      <h6 className="text-light rarity-text">{nft.name}</h6>
                    </div>
                    <div className="price">
                      <h6 className="text-secondary price-text">Price: </h6>
                      <h6 className="text-light price-text">{nft.price} BNB</h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
