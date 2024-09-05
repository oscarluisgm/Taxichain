
export const SecondaryParking=({buttonAction, handleParking, handleCancel})=>{

    return <>
        <div className="secondary-modal-bg">
            <div className="secondary-modal-container card">
                <div>You are about to {buttonAction} this car. Do you confirm this?</div>
                <div className="secondary-modal-buttons">
                    <button className="confirm bg-success" onClick={handleParking} >OK</button>
                    <button className="cancel bg-danger" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>  
        </>
}