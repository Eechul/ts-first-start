import React from "react";
import TodoItem from "./TodoItem";


type TodoListProps = {
    data: Array<string>
}

const TodoList: React.FC<TodoListProps> = ({ data }) => {
    return (
        <>
            <h2>todoList</h2>
            <ul>
                {data.map(item => <TodoItem content={item}/>)}
            </ul>
        </>
    )
}

export default TodoList;