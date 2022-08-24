import { useState } from "react";
import AddTodoForm from "../Components/AddTodoForm";
import TodoList from "../Components/TodoList";
import '../styles/todo-page.css';

const Todo = () => {

    const [todoListItems, setTodoList] = useState(
        [
            {
              id: 1,
              text: 'Learn React',
              completed: false,
              priority: 'LOW'
            },
            {
              id: 2,
              text: 'Learn JS',
              completed: false,
              priority: 'URGENT'
            },
            {
              id: 3,
              text: 'Learn Anything',
              completed: true,
              priority: 'MEDIUM'
            },
        ]
    );

    const addItemHandler = (text, priority) => {
      setTodoList([...todoListItems, {
        id : new Date().toString(),
        text,
        completed: false,
        priority

      }]);
    }

    const deleteItemHandler = (id) => {
      setTodoList(todoListItems.filter(item => item.id !== id));
    }

    const togglecompletedItemHandler = (id) => {
      setTodoList(todoListItems.map( item => {
        if (item.id === id) {
          item.completed = !item.completed 
        }
        return item;
      }
      ))
    }

    const changeTodoTitleHandler  = (e, id, newTitle) => {
        e.preventDefault();
        setTodoList(todoListItems.filter(item => item.id === id ? item.text = newTitle : item ))
    }

    const fitlterCompletedTodoHandler = () => {
      setTodoList(todoListItems.filter(item => item.completed ? item : ""))
    }

    return (
        <div className="dashboard-page main-page">
          <header className='page-header-container'>
            <h1>Todo List 📌</h1>
          </header>
          <button className="completed-todo-btn" onClick={() => fitlterCompletedTodoHandler ()}>Display All Completed Todo</button>
          <AddTodoForm addItem = { addItemHandler }/>
          <div className="todo-lists-container">
            <TodoList items = { todoListItems} deleteItem={ deleteItemHandler } changeTitle={changeTodoTitleHandler} togglecompletedItem={togglecompletedItemHandler}/>
          </div>
        </div>
    )
};

export default Todo;