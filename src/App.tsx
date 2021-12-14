import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  return (
    <div>
      <Todos items={["Learn React", "Learn Typescript"]} />
    </div>
  );
}

export default App;
