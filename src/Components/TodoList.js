import TodoListItem from "./TodoListItem";
import '../styles/todo.css';

const TodoList = ( { items, deleteItem, changeTitle, togglecompletedItem }) => {
    const priority = ['URGENT', 'HIGH', 'MEDIUM', 'LOW'];
    
    return (
        
            priority.map( p =>
                (
                    <div key={p} className='todo-list-container'>
                        <h4>{p}</h4>
                        <ul>
                            {
                                items.filter(item => item.priority === p).map(item => 
                                <TodoListItem key={item.id} details={item} deleteItem={deleteItem} changeTitle={changeTitle} togglecompletedItem={togglecompletedItem}/>)
                            }
                        </ul>
                    </div>
                )
                
            )
        
    )
}

export default TodoList;