import React from "react";

const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" />
      <button onSubmit={submitHandler}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
