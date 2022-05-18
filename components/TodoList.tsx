import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoItemProps from "./TodoItemType";

type TodoListProps = {
    data: Array<TodoItemProps>,
    fnSave: Function
}

const TodoList: React.FC<TodoListProps> = ({ data, fnSave }) => {
    return (
        <>
            <h2>todoList</h2>
            <TodoInput fnSave={fnSave}/>
            <ul>
                {data.map(item => <TodoItem key={item.id} id={item.id} content={item.content}/>)}
            </ul>
        </>
    )
}

export default TodoList;