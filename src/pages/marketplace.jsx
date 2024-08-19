import { useEffect, useState } from "react";
import nfts from "../services/nfts";
export default function Marketplace() {
  
  
  const[cars, setCars]=useState([])
  const[visible, setVisible]=useState(false)
  const[currentCar, setCurrentCar]=useState({})

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

  return (
    <>
      {visible && <div className="bg-modal">
        <div className="body-modal card gap-4">
          <div className="text-end">
          <button onClick={()=>handleModal(false,{})}><i className="bi bi-x-square-fill close-button"></i></button>
          </div>
          <img src={currentCar.img} className="w-100" />
          This NFT provides an estimated ROI of {currentCar.roi} months.
          <button className="card-button buy-button">Buy</button>
        </div>
      </div>}



      <div className="container bg-container">
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
                  
                  <img src={nft.img} className="img-nft w-100 " />
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
