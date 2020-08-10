import React from 'react'

const Form = ({name, games, handleUpdatedForm}) => {
  
  const handleSubmit = e => {
    const {name, games} = e.currentTarget
    e.preventDefault()
    handleUpdatedForm(name.value, games.value)
  }

  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <label name="Name">Enter your name!
        <input type="text" name="name" required/>
      </label>
      <label name="Name">Number of games?
        <input type="number" name="games" min="1" />
      </label>
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default Form