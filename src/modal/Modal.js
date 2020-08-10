import React from "react"
import ReactDOM from 'react-dom'
import './modal.css'


const Modal = ({open, children, handleClose}) => {
  if(!open) return null

  return ReactDOM.createPortal(
    <>
      <div className="overlay" />
      <div className="modal-wrapper">
        {children}
      </div>
    </>,
    document.getElementById('portal'))
}

export default Modal