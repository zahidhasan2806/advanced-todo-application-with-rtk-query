import { useGetTodosQuery } from "../features/api/apiSlice";

export default function Footer() {
    const { data: todos } = useGetTodosQuery();
    const todosRemaining = todos?.filter((todo) => !todo.completed).length;
    console.log(todos)

    const numberOfTodos = (no_of_todos) => {
        switch (no_of_todos) {
            case 0:
                return "No task";
            case 1:
                return "1 task";
            default:
                return `${no_of_todos} tasks`;
        }
    };

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(todosRemaining)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className="cursor-pointer font-bold">All</li>
                <li>|</li>
                <li className="cursor-pointer">Incomplete</li>
                <li>|</li>
                <li className="cursor-pointer">Complete</li>
                <li></li>
                <li></li>
                <li
                    className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"
                ></li>
                <li
                    className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"
                ></li>
                <li
                    className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"
                ></li>
            </ul>
        </div>
    );
}
