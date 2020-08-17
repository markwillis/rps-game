import React from "react";
import "./form.css";

const Form = ({ name, games, handleUpdatedForm }) => {
  const handleSubmit = (e) => {
    const { name } = e.currentTarget;
    e.preventDefault();
    handleUpdatedForm(name.value.toUpperCase());
  };

  return (
    <>
      <form className="modal-form" onSubmit={handleSubmit}>
        <h1>rock. paper. scissors.</h1>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          autoComplete="off"
          required
        />
        <input className="submit" type="submit" value="Start game" />
      </form>
    </>
  );
};

export default Form;
