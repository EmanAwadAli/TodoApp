import { useState } from "react";
import { FiEdit2, FiX } from 'react-icons/fi';
import ItemPriority from "./ItemPriority";
import '../styles/todo.css';

const TodoListItem = ({ details, deleteItem, changeTitle, togglecompletedItem}) => {

    const [didCompleted, setDidCompleted] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const completedItemHandler = (id) => {
         setDidCompleted(!didCompleted);
         togglecompletedItem(id);
    }

    const toggleMode = () =>{
        setEditMode(!editMode);
    }

    return (
        <li className="todo-item-container">
            <header>
                <div className='header-text-container'>
                    <span>{didCompleted || details.completed  ? '✅' : <ItemPriority priority={ details.priority }/> }</span>
                    {
                        editMode ? 
                        <form>
                            <input type="text" value={details.text}  onChange={ e => changeTitle(e ,details.id, e.target.value)}/>
                        </form> :
                        <h3 className={didCompleted || details.completed ? 'item-completed' : '' } onClick={() => completedItemHandler (details.id)}>{details.text}</h3>
                    }
                </div>
                <button className='btn remove-btn' onClick={() => deleteItem(details.id)}>   
                    <FiX />
                </button>
            </header>
            <button className='btn' onClick={toggleMode}>
                <FiEdit2 />
            </button>
        </li>
    )
} 

export default TodoListItem;