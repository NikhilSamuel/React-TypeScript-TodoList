import React from "react";

import TodoItem from "./TodoItem";
import Todo from "../models/Todo";
import classes from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  removeTodoHandler: (id: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.removeTodoHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
