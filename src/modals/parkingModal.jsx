export const ParkingModal=({handleModal, currentCar, buy})=>{
    return<>
    <div className="parking-bg-modal">
        <div className="parking-body-modal card gap-4">
          <div className="text-end parking-close-box w-100">
          <button onClick={()=>handleModal(false,{})}><i className="bi bi-x-square-fill close-button"></i></button>
          </div>
          <div className="parking-img-modal">
            <img src={currentCar?.img} className="img-modal" />
          </div>   
          <div className="parking-info-modal gap-3">
            <div>This NFT provides an estimated ROI of {currentCar?.roi} months.</div>
            <div>Price: {currentCar?.price} BNB</div>
          </div>
          <button className="parking-card-button sell-button" onClick={buy}>Sell ({currentCar?.price} BNB)</button>
          <button className="parking-card-button rent-button" onClick={buy}>Rent ({currentCar?.rent} BNB)</button>
          <button className="parking-card-button drive-button" onClick={buy}>Drive </button>
        </div>
      </div>    
    </>
}

