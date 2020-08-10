import React from "react"
import ReactDom from 'react-dom'
import Button from '../src/components/button/Button'

const MODAL_STYLES = {
  position: 'fixed',
  minWidth: '700px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'gray',
  padding: '50px',
  zIndex: 1000,
  color: "white",
  borderRadius: "10px",
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .9)'
}

const Modal = ({open, children, handleClose}) => {
  if(!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        {children}
      </div>
    </>,
    document.getElementById('portal'))
}

export default Modal