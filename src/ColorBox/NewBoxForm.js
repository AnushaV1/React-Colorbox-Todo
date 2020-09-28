import React, {useState} from "react";


const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        backgroundColor:''
        };
    const [formData,  setFormData] = useState(INITIAL_STATE);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name] : value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData });
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor='width'>Width</label>
        <input type="text"
            name="width"
            id="width"
            placeholder="Width"
            onChange={handleChange}
            value={formData.width}
        />
        <label htmlFor='height'>Height</label>
        <input type="text"
            name="height"
            id="height"
            placeholder="Height"
            onChange={handleChange}
            value={formData.height}
        />
        <label htmlFor='backgroundColor'>Background Color</label>
        <input type="text"
            name="backgroundColor"
            id="backgroundColor"
            placeholder="Background Color"
            onChange={handleChange}
            value={formData.backgroundColor}
            />
        <button>Add Box</button>
        
        </form>

    )
}

export default NewBoxForm;