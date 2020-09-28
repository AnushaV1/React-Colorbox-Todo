import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from './Todo';

it('renders  without crashing', function() {
  render(<Todo />);
})

it('matching snapshot', function() {
    const {asFragment} = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
});

it('delete function on button click ', function() {
    const deleteMock = jest.fn();
    const { getByText } =  render(<Todo remove={deleteMock} />);
    const deleteBtn = getByText('X');
    fireEvent.click(deleteBtn);
    expect(deleteMock).toHaveBeenCalled();
});