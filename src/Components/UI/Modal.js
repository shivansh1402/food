
import React from 'react'
import classes from './Modal.module.css'

const Modal = props => {

    return (
        <div>

            <div className={classes.overlay} onClick={props.onClick}></div>
            <div className={classes.modalContainer}>{props.children}</div>
            
        </div>
    )
}

export default Modal