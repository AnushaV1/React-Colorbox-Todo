import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from './BoxList';

function addBox(list) {
    const width = list.getByLabelText('Width');
    const height = list.getByLabelText('Height')
    const background = list.getByLabelText('Background Color');
    
    fireEvent.change(width, { target: { value: '100px' } });
	fireEvent.change(height, { target: { value: '100px' } });
    fireEvent.change(background, { target: { value: 'green' } });
    const btn = list.queryByText('Add Box');
    fireEvent.click(btn);
    
}

it("renders without crashing", function() {
    render(<BoxList />);
});

it("matches snapshot", function() {
    const {asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("add box to list", function() {
    const addTolist = render(<BoxList />);
    addBox(addTolist);
    expect(addTolist.getByText('X')).toBeInTheDocument();
});

it('delete a box on click', function() {
    const list = render(<BoxList />);
    addBox(list);
    fireEvent.click(list.getByText('X'));
    expect(list.queryByText("green")).not.toBeInTheDocument();
})

