import classNames from "classnames";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [todoItem, setTodoItem] = useState("");
  const [items, setItems] = useState([
    {
      id: "0",
      message: "Hey stoopid!",
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
    <div className="w-1/2 h-screen mx-auto text-center bg-[url('../styles/78.jpg')] bg-cover ">
      <h1 className="text-4xl pt-12">toDoosh</h1>

      <div className="pt-12">
        <input
          type="text"
          className="text-gray-900 px-4 py-2 rounded text-center w-3/4"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
          onKeyDown={handleEnter}
        />
      </div>

      <ul className="pt-12 px-4">
        {items
          .filter(({ done }) => !done)
          .map(({ id, message }) => (
            <li
              key={id}
              onClick={() => handleToggle(id)}
              className={classNames(styles.item)}
            >
              {message}
            </li>
          ))}

        {items
          .filter(({ done }) => done)
          .map(({ id, message }) => (
            <li
              key={id}
              onClick={() => handleToggle(id)}
              className={classNames(styles.item, styles.done)}
            >
              {message}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
