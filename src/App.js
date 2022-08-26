import './styles/layout.css';
import './App.css';
import Todo from './Pages/Todo';
import Home from './Pages/Home';
import About from './Pages/About';
import Logo from './Components/LogoComponent';
import { Routes, Route, Link } from "react-router-dom";
import NotFound from './Pages/404';
import SingleTodo from './Pages/SingleTodo';

function App() {
  return (
    <main className='App main-layout'>
      <section className='side-navbar-section'>
        <Logo />
        <nav className='flex-column'>
          <Link to='/'>Home</Link>
          <Link to='/Todo'>Todos</Link>
          <Link to='/About'>About</Link>
        </nav>
      </section>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/About' element={ <About/ > }/>
        <Route path='/Todo' element={ <Todo /> }/>
        <Route path='/Todo/:todoId' element={ <SingleTodo /> }/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
