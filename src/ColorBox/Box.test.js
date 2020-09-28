import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from './Box';

it('renders  without crashing', function() {
  render(<Box />);
})

it('matching snapshot', function() {
    const {asFragment} = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});

it('delete function on button click ', function() {
    const deleteMock = jest.fn();
    const { getByText } =  render(<Box handleRemove={deleteMock} />);
    const deleteBtn = getByText('X');
    fireEvent.click(deleteBtn);
    expect(deleteMock).toHaveBeenCalled();
});