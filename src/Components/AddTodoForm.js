import { useState } from "react";
import '../styles/add-todo-form.css';

const AddTodoForm = ({ addItem }) => {

    const [text, setText] = useState('');
    const [priority, setPriority] = useState('LOW');
    
    const changeValueHandler = (e) => {
        setText(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        addItem(text, priority);
        setText('')
    }

    const changePriorityHandler = (e) => {
        setPriority(e.target.value)
    }

    return (
        <form className="add-todo-form-container" onSubmit={(e) => onSubmitHandler (e)}>
            <input 
                type='text' 
                value={text} 
                placeholder="New Todo"
                onChange={(e) => changeValueHandler(e)  }
            />
            <div className="select-component-container">
                <label>Priority : </label>
                <select onChange={(e) => changePriorityHandler(e)}>
                    <option>LOW</option>
                    <option>MEDIUM</option>
                    <option>HIGH</option>
                    <option>URGENT</option>
                </select>
            </div>
        </form>
    )
}

export default AddTodoForm;