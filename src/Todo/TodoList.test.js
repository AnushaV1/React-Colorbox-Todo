import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from './TodoList';


function addTodo(todoList, task = "write tests") {
    const taskInput = todoList.getByLabelText("Add Task");
    fireEvent.change(taskInput, {target: { value: task }});
    const submitBtn = todoList.getByText("Add To List");
    fireEvent.click(submitBtn);
}


it("renders without crashing", function() {
    render(<TodoList />);
});

it("matches snapshot", function() {
    const {asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("add a todo to list", function() {
    const list = render(<TodoList />);
    addTodo(list);

    expect(list.getByLabelText('Add Task')).toHaveValue('');
    expect(list.getByText('write tests')).toBeInTheDocument();
    expect(list.getByText('X')).toBeInTheDocument();
});

it('delete on click a todo', function() {
    const list = render(<TodoList />);
    addTodo(list);
    fireEvent.click(list.getByText('X'));
    expect(list.queryByText("write tests")).not.toBeInTheDocument();
})