import React, {useState} from "react";
import Todo from "./Todo";
import TodoForm from './TodoForm'
const TodoList = () => {

    const [todos, setTodos] = useState([]);
    
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, newTodo]);
    }

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !==id))
    }

    return (
    <>
        <TodoForm addTodo={addTodo}/>
    <div>    <ul>
    {todos.map(todo => (
    <Todo
        remove={remove}
        key={todo.id}
        id={todo.id}
        task={todo.task}
    />
    ))
    }
    </ul>
    </div>
    </>

    )
}

export default TodoList;