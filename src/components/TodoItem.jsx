import React from "react";
import { ClipboardCheckIcon, MinusCircleIcon } from "@heroicons/react/outline";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  const d = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[d.getMonth()];

  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="">
      <li className={`border rounded-lg p-3 relative mt-4 shadow-xl w-[400px] bg-white md:w-[600px] ${todo.completed ? "opacity-40 bg-slate-800 text-white line-through" : "opacity-100"}`}>
        <div className="flex">
          {todo.completed ? (
            <ClipboardCheckIcon className=" text-green-600 text-sm md:w-10 w-8" />
          ) : null}
          <p className="mt-2 pl-2 cursor-pointer" onClick={handleToggleComplete}>{todo.todoTask}</p>
          <div className="w-auto absolute right-3 top-6">
            <MinusCircleIcon className="text-red-500 text-sm md:w-8 cursor-pointer w-8" onClick={handleDeleteTodo} />
          </div>
        </div>

        <div className=" pl-2 text-slate-500">
          <p>
            {month} {d.getDate()}, {d.getFullYear()}
          </p>
        </div>
      </li>
    </div>
  );
}

export default TodoItem;
