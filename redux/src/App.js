
import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
function App() {
  return (
    <div className="App">
      <h1>Redux App Todos</h1>
      <div className='container'>
        <Navbar />
        <Todos />
      </div>
    </div>
  );
}

export default App;
