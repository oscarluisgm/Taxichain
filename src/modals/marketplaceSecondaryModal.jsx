

export const SecondaryModalMarketplace=({confirm, handleSecondaryModal})=>{

    return <>
        <div className="secondary-modal-bg">
            <div className="secondary-modal-container card">
                <p className="secondary-title">You are about to buy this car. Do you confirm this action?</p>
                <div className="secondary-modal-buttons">
                    <button className="confirm bg-success" onClick={confirm}>OK</button>
                    <button className="cancel bg-danger" onClick={()=>handleSecondaryModal(false)}>Cancel</button>
                </div>
            </div>
        </div>
    </>

}