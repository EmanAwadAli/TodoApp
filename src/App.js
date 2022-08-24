import './styles/layout.css';
import './App.css';
import Todo from './Pages/Todo';
import Logo from './Components/LogoComponent';

function App() {
  return (
    <main className='App main-layout'>
      <section className='side-navbar-section'>
        <Logo />
      </section>
      <Todo />
    </main>
  );
}

export default App;
