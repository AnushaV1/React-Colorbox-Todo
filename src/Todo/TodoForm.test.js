import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from './TodoForm';

it('renders without crashing', function() {
    render (<TodoForm />);
})

it('Matches snapshot', function () {
    const {asFragment} =  render (<TodoForm />);
    expect(asFragment()).toMatchSnapshot();
})

it("test create function on form submit", function() {
    const createMock = jest.fn();
    const { getByText } = render(<TodoForm addTodo={createMock} />);
    const btn = getByText("Add To List");
    fireEvent.click(btn);
    expect(createMock).toHaveBeenCalled();
});