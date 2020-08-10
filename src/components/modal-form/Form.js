import React from 'react'
import './form.css'

const Form = ({name, games, handleUpdatedForm}) => {
  
  const handleSubmit = e => {
    const {name, games} = e.currentTarget
    e.preventDefault()
    handleUpdatedForm(name.value, games.value)
  }

  return (
    <>
    
    <form className="modal-form" onSubmit={handleSubmit}>
    <h1>Enter your name</h1>
      <input type="text" name="name" required/>
      <input type="number" name="games" min="1" />
      <input className="submit" type="submit" value="Submit"/>
    </form>
    </>
  )
}

export default Form