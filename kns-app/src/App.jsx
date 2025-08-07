import logo from './5.png';
import './App.css';
import Hello from './components/Hello';
import Goodbye from './components/Goodbye';
import JSXExamples from './components/JSXExamples';

function App() {
  return (
    <div className="App">
      
      <Hello/>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Quad.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Goodbye/>
      </header>
    </div>
  );
}

export default App;
