import React, { useRef } from "react";

const NewTodo = () => {
  const todoInputRef = useRef<HTMLInputElement>(null); //we have to specify the input type and declare an initial value for the ref.

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value; // ? if you are not sure if the connectiobn with the ref is established or !

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
  };
  return (
    <form>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button onSubmit={submitHandler}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
