import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todoItem, setTodoItem] = useState("");
  const [items, setItems] = useState([
    {
      id: "0",
      message: "Buy 2 seggs",
      done: false,
    },
  ]);

  const handleAdd = () => {
    if (todoItem) {
      setItems([
        {
          id: uuidv4(),
          message: todoItem,
          done: false,
        },
        ...items,
      ]);
      setTodoItem("");
    }
  };

  return (
    <div>
      <h1>toDoosh</h1>

      <div>
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul>
        {items.map(({ id, message }) => (
          <li key={id}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
