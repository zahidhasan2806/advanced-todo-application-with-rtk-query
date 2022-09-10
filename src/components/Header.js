import { useState } from "react";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { useAddTodoMutation, useDeleteTodoMutation, useEditTodoMutation, useGetTodosQuery } from "../features/api/apiSlice";


export default function Header() {
    const { data: todos } = useGetTodosQuery()
    const [addTodo] = useAddTodoMutation();
    const [editTodo] = useEditTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();
    const [todoTitle, setTodoTitle] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTodo({
            data: {
                text: todoTitle,
                completed: false,
            }
        })

        setTodoTitle("")

    };

    const handleAllComplete = () => {
        todos.forEach(todo => {
            editTodo({
                id: todo.id,
                data: { completed: true }
            })
        });
    }
    const handleClearAllCompleted = () => {
        todos.forEach(todo => {
            if (todo.completed) {
                deleteTodo({
                    id: todo.id,
                })
            }

        });
    }

    return (
        <>
            <div>
                <form
                    className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                    onSubmit={handleFormSubmit}
                >
                    <img
                        src={noteImage}
                        className="w-6 h-6"
                        alt="Add todo"
                    />
                    <input
                        type="text"
                        placeholder="Type your todo"
                        value={todoTitle}
                        onChange={(e) => setTodoTitle(e.target.value)}
                        className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    />
                    <button
                        type="submit"
                        className={`appearance-none w-8 h-8 bg-[url(${plusImage})] bg-no-repeat bg-contain`}
                    ></button>
                </form>

                <ul className="flex justify-between my-4 text-xs text-gray-500">
                    <li onClick={handleAllComplete} className="flex space-x-1 cursor-pointer">
                        <img
                            className="w-4 h-4"
                            src={tickImage}
                            alt="Complete"
                        />
                        <span>Complete All Tasks</span>
                    </li>
                    <li className="cursor-pointer" onClick={handleClearAllCompleted}>Clear completed</li>
                </ul>
            </div>
            <hr className="mt-4" />

        </>
    );
}
