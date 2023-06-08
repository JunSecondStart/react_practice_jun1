import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  const [count_A, setCount_A] = useState(2);
  const [count_B, setCount_B] = useState(5);
  const [count_plus, setPlus]= useState(0);

  const handleClick_A = () => {
    setCount_A(count_A + 1);
    alert("Aに1が加算されます。")
  };

  const handleClick_B = () => {
    setCount_B(count_B + 2);
    alert("Bに2が加算されます。")
  };

  const handleClick_plus = () => {
    setPlus(count_A+count_B);
  }

  return (
    <div>
      <h1>UseState</h1>
      <div>
        <button onClick={handleClick_A}>A+1</button>
        <p>{count_A}</p>
      </div>
      <div>
        <button onClick={handleClick_B}>B+2</button>
        <p>{count_B}</p>        
      </div>
      <div>
        <button onClick={handleClick_plus}>A+B</button>
      </div>
      <p>{count_plus}</p>
    </div>
  );
}

export default App;
