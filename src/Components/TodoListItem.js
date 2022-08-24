import { useState } from "react";
import { FiEdit2, FiX } from 'react-icons/fi';
import ItemPriority from "./ItemPriority";
import '../styles/todo.css';

const TodoListItem = ({ details, deleteItem, changeTitle, togglecompletedItem}) => {

    const [didCompleted, setDidCompleted] = useState(false);
    const [editMode, setEditMode] = useState(false);

    // Completed Todo Item Handler
    const completedItemHandler = (id) => {
         setDidCompleted(!didCompleted);
         togglecompletedItem(id);
    }

    // Toggle Edit Mode
    const toggleMode = () =>{
        setEditMode(!editMode);
    }

    return (
        // Todo Item
        <li className="todo-item-container" style={ {display : details.display ? 'block' : 'none'} } >
            <header>
                <div className='header-text-container'>
                    <span>{ details.completed ? '✅' : <ItemPriority priority={ details.priority }/> }</span>
                    {
                        editMode ? 
                        <form>
                            <input type="text" value={details.text}  onChange={ e => changeTitle(e ,details.id, e.target.value)}/>
                        </form> :
                        <h3 className={details.completed ? 'item-completed' : '' } onClick={() => completedItemHandler (details.id)}>{details.text}</h3>
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