import React from "react";
import TodoItem from "./TodoItem";
import TodoItemProps from "./TodoItemType";


type TodoListProps = {
    data: Array<TodoItemProps>
}

const TodoList: React.FC<TodoListProps> = ({ data }) => {
    return (
        <>
            <h2>todoList</h2>
            <ul>
                {data.map(item => <TodoItem id={item.id} content={item.content}/>)}
            </ul>
        </>
    )
}

export default TodoList;