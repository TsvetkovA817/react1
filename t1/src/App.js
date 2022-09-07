import './App.css';
import Mess from './Message';

const varInApp = 4;

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lorem ipsum dolor sit amet 1</h1>
      </header>
      <p>Lorem ipsum dolor sit amet 2</p>
      <p>Переданное через пропс значение = {props.varInIndex} из index.js</p>

      <Mess varInApp={varInApp} />
    </div>
  );
}

export default App;
