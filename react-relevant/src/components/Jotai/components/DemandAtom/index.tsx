
import { useState, FormEvent } from "react";
import { atom, useAtom, PrimitiveAtom } from "jotai";

type Todo = {
  title: string;
  completed: boolean;
};

const TodoItem: React.FC<{
  todoAtom: PrimitiveAtom<Todo>;
  remove: () => void;
}> = ({ todoAtom, remove }) => {
  const [item, setItem] = useAtom(todoAtom);
  const toggleCompleted = () => {
    setItem((prev) => ({ ...prev, completed: !prev.completed }));
  };
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={toggleCompleted}
        />
        <span style={{ textDecoration: item.completed ? "line-through" : "" }}>
          {item.title}
        </span>
        {item.completed && <button onClick={remove}>Remove</button>}
      </label>
    </li>
  );
};

const todosAtom = atom<PrimitiveAtom<Todo>[]>([]);

const TodoList: React.FC = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useAtom(todosAtom);
  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoAtom = atom<Todo>({ title, completed: false });
    setTodos((prev) => [...prev, todoAtom]);
    setTitle("");
  };
  const removeTodo = (todoAtom: PrimitiveAtom<Todo>) => {
    setTodos((prev) => prev.filter((item) => item !== todoAtom));
  };
  return (
    <ul>
      {todos.map((todoAtom, key) => (
        <TodoItem
          key={key}
          todoAtom={todoAtom}
          remove={() => removeTodo(todoAtom)}
        />
      ))}
      <li>
        <form onSubmit={addTodo}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title..."
          />
        </form>
      </li>
    </ul>
  );
};



export default TodoList;