import React from 'react'
import './Style.css'

function DeleteModel(props) {
    function yesHandler(){
        props.onConfirm();
    }
    function noHandler(){
        props.onCancel();
    }
    return (
        
            <div className='modal-body'>
                <p>Are you Sure Want to delete?</p>
                <div className="btn-actions">
                <button className="viewBtn" onClick={yesHandler}>Yes</button>
                <button className="deleteBtn" style={{marginLeft:'10px'}} onClick={noHandler}>No</button>
                </div>
            </div>
       
    )
}

export default DeleteModel