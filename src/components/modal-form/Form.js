import React from 'react'

const Form = ({name, games, handleUpdatedForm}) => {

  const handleSubmit = e => {
    e.preventDefault()
    handleUpdatedForm(e.target.name.value, e.target.games.value)
  }

  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <label name="Name">Enter your name!
        <input type="text" name="name"/>
      </label>
      <label name="Name">Number of games?
        <input type="number" name="games"/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default Form