import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
const TodoForm = ({ addTodo }) => {
    const [task, setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value);
        };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({task, id: uuid()});
        setTask("");
    }


    return (
    <form onSubmit={handleSubmit}>
    <label htmlFor='task'>Add Task</label>
    <input type="text"
        name="task"
        placeholder="Enter Todo item"
        id="task"
        onChange ={handleChange}
        value = {task}
    />
    <button>Add To List</button>
    </form>

    )
}

export default TodoForm;