import { useSelector } from "react-redux";
import { useGetTodosQuery } from "../features/api/apiSlice";
import Todo from './Todo'

export default function TodoList() {
    const { data: todos, isLoading, isError, error } = useGetTodosQuery();
    const { status, colors } = useSelector((state) => state.filters);



    const filterByStatus = (todo) => {
        switch (status) {
            case "complete":
                return todo.completed;

            case "incomplete":
                return !todo.completed;

            default:
                return true;
        }
    };

    const filterByColors = (todo) => {
        if (colors.length > 0) {
            return colors.includes(todo?.color);
        }
        return true;
    };

    // decide what to render
    let content = null;

    if (isLoading) {
        content = <div className="text-slate-600">Loading...</div>;
    };

    if (!isLoading && isError) {
        content = <div className="text-red-600">{error}</div>;
    };

    if (!isError && !isLoading && todos?.length === 0) {
        content = <div className="text-slate-600">No task found!</div>;
    };

    if (!isError && !isLoading && todos?.length > 0) {

        content = todos
            .filter(filterByStatus)
            .filter(filterByColors)
            .map((todo) => <Todo key={todo.id} todo={todo} />)

    }
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {content}
        </div>
    );

};




