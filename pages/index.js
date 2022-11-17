import classNames from "classnames";
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

  const handleEnter = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  const handleToggle = (id) => {
    const _items = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }

      return item;
    });

    setItems(_items);
  };

  return (
    <div className="w-3/4 mx-auto text-center">
      <h1 className="text-4xl pt-12">toDoosh</h1>

      <div className="pt-12">
        <input
          type="text"
          className="text-gray-900 px-4 py-2 rounded text-center w-full"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
          onKeyDown={handleEnter}
        />
      </div>

      <ul>
        {items
          .filter(({ done }) => !done)
          .map(({ id, message, done }) => (
            <li
              key={id}
              onClick={() => handleToggle(id)}
              className={classNames("item", { done })}
            >
              {message}
            </li>
          ))}

        {items
          .filter(({ done }) => done)
          .map(({ id, message, done }) => (
            <li
              key={id}
              onClick={() => handleToggle(id)}
              className={classNames("item", { done })}
            >
              {message}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
