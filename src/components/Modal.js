import React from 'react'

function Modal(props) {


    return (
        <div>
            <div className='modal-body'>
                <p>Viewing This Particular blog</p>
                <div className="btn-actions">
                    <button className="viewBtn" onCLick="">View</button>
                    <button className="deleteBtn">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Modal