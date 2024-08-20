


export const NftModal=({handleModal, currentCar, buy})=>{
    return<>
    <div className="bg-modal">
        <div className="body-modal card gap-4">
          <div className="text-end close-box w-100">
          <button onClick={()=>handleModal(false,{})}><i className="bi bi-x-square-fill close-button"></i></button>
          </div>
          <div className="img-modal">
            <img src={currentCar?.img} className="img-modal" />
          </div>   
          <div className="info-modal gap-3">
            <div>This NFT provides an estimated ROI of {currentCar?.roi} months.</div>
            <div>Price: {currentCar?.price} BNB</div>
          </div>
          <button className="card-button buy-button" onClick={buy}>Buy ({currentCar?.price} BNB)</button>
        </div>
      </div>    
    </>
}