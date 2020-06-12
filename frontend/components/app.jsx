import React from 'react';
import TodoList from "./todos/todo_list_container";

const App = (props) => {
    return <>
        <h1>Todo</h1>
        <TodoList />
        </>;
}

export default App;