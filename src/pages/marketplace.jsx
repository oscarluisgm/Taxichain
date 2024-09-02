
import useMarketplace from "../hooks/useMarketplace";
import { NftModal } from "../modals/nftModals";
import {SecondaryModalMarketplace} from "../modals/marketplaceSecondaryModal";


export default function Marketplace(){
  
  const{visible,confirm,currentCar, handleFilter, handleModal,cars, secModal, handleSecondaryModal}=useMarketplace()
  
  return (
    <>
      
      {visible && <NftModal handleModal={handleModal} confirm={confirm} currentCar={currentCar} handleSecondaryModal={handleSecondaryModal}/>}
      {secModal && <SecondaryModalMarketplace  confirm={confirm} handleSecondaryModal={handleSecondaryModal}/>}



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
