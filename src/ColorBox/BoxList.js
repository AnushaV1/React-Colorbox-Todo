import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import "./BoxList.css"

const BoxList =() => {
    // const INITIAL_STATE = [
    //     {id: uuid(), width:'30', height:'30',backgroundColor:'Red'}
    // ]
    const [boxes, setBoxes] = useState([])
    const addBox = (newBox) => {
        setBoxes((box) => [...boxes, {...newBox, id: uuid() }]);
    }
    
    const handleDelete = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    return (
        <>
        <NewBoxForm addBox = {addBox} />
        <div className='BoxList'>
        {boxes.map((box) => (
        <Box 
            id = {box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            key={box.id}
            handleRemove = {handleDelete}
        />
        ))}
    </div>
    
        </>
    )
}

export default BoxList;