import { useState } from "react";
import AddTodoForm from "../Components/AddTodoForm";
import TodoList from "../Components/TodoList";
import '../styles/todo-page.css';

const Todo = () => {

    // Todo default List
    const [todoListItems, setTodoList] = useState(
        [
            {
              id: 1,
              text: 'Learn React',
              completed: false,
              priority: 'LOW',
              display: true
            },
            {
              id: 2,
              text: 'Learn JS',
              completed: false,
              priority: 'URGENT',
              display: true
            },
            {
              id: 3,
              text: 'Learn Anything',
              completed: true,
              priority: 'MEDIUM',
              display: true
            },
        ]
    );

    // Add Todo Handler
    const addItemHandler = (text, priority) => {
      setTodoList([...todoListItems, {
        id : new Date().toString(),
        text,
        completed: false,
        priority,
        display:true
      }]);
    }

    // Delete Todo Items Handler
    const deleteItemHandler = (id) => {
      setTodoList(todoListItems.filter(item => item.id !== id));
    }

    // Toggle Completed Todo Items Handler
    const togglecompletedItemHandler = (id) => {
      setTodoList(todoListItems.map( item => {
        if (item.id === id) {
          item.completed = !item.completed 
        }
        return item;
      }
      ))
    }

    // Change Todo Items Title Handler
    const changeTodoTitleHandler  = (e, id, newTitle) => {
        e.preventDefault();
        setTodoList(todoListItems.filter(item => item.id === id ? item.text = newTitle : item ))
    }

    // Display All Todo Items Handler
    const displayAllTodoHandler = () => {
      setTodoList(todoListItems.map(item => {
          item.display = true;
          return item;
        }
      ))
    }

    // Display All Completed Todo Items Handler
    const displayCompletedTodoHandler = () => {
      setTodoList(todoListItems.map(item => {
        if (!item.completed) {
          item.display = false
        } else {
          item.display = true
        }
        return item;
        })
      )
    }

    // Dispaly All Completed Todo Items Handler
    const displayUnCompletedTodoHandler = () => {
      setTodoList(todoListItems.map(item => {
        if (item.completed) {
          item.display = false
        } else {
          item.display = true
        }
        return item;
        })
      )
    }

    return (
        <div className="dashboard-page main-page">
          <header className='page-header-container'>
            <h1>Todo List 📌</h1>
          </header>
          <AddTodoForm addItem = { addItemHandler }/>
          <div className="todo-lists-container">
            <TodoList items = { todoListItems} deleteItem={ deleteItemHandler } changeTitle={changeTodoTitleHandler} togglecompletedItem={togglecompletedItemHandler}/>
          </div>
          <div className="btns-control-todolist">
            <button className="completed-todo-btn" onClick={() => displayAllTodoHandler ()}>All</button>
            <button className="completed-todo-btn" onClick={() => displayCompletedTodoHandler ()}>Completed</button>
            <button className="completed-todo-btn" onClick={() => displayUnCompletedTodoHandler ()}>Un Completed</button>
          </div>
        </div>
    )
};

export default Todo;