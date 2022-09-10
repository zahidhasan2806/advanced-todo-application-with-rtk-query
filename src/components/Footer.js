import { useDispatch, useSelector } from "react-redux";
import { useGetTodosQuery } from "../features/api/apiSlice";
import { updateColors, updateStatus } from "../features/filters/filtersSlice";

export default function Footer() {
    const { data: todos } = useGetTodosQuery();
    const { status, colors } = useSelector(state => state.filters)
    const dispatch = useDispatch()
    const todosRemaining = todos?.filter((todo) => !todo.completed).length;

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

    const handleUpdateStatus = (status) => {
        dispatch(updateStatus(status));
    };
    const handleUpdateColors = (color) => {
        if (colors.includes(color)) {
            dispatch(updateColors({ color, updateType: "removed" }));
        }
        else {
            dispatch(updateColors({ color, updateType: "added" }));
        };
    };


    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p className="font-bold">{numberOfTodos(todosRemaining)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li
                    className={`cursor-pointer ${status === "all" && "font-bold"}`}
                    onClick={() => handleUpdateStatus("all")}
                >
                    All
                </li>
                <li>|</li>
                <li
                    className={`cursor-pointer ${status === "incomplete" && "font-bold"}`}
                    onClick={() => handleUpdateStatus("incomplete")}
                >
                    Incomplete
                </li>
                <li>|</li>
                <li
                    className={`cursor-pointer ${status === "complete" && "font-bold"}`}
                    onClick={() => handleUpdateStatus("complete")}
                >
                    Complete
                </li>
                <li></li>
                <li></li>
                <li
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes("green") && "bg-green-500"}`}
                    onClick={() => handleUpdateColors("green")}
                >
                </li>
                <li
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && "bg-red-500"}`}
                    onClick={() => handleUpdateColors("red")}
                >
                </li>
                <li
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes("yellow") && "bg-yellow-500"}`}
                    onClick={() => handleUpdateColors("yellow")}
                >
                </li>
            </ul>
        </div>
    );
}
