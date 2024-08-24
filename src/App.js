//import logo from './logo.svg';
import './App.css';
import BookComponent from './components/BookComponent/BookComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img  className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BookComponent />
      </header>
    </div>
  );
}

export default App;