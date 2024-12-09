import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('orange');

  return (
    <div className="main" style={{ backgroundColor: color }}>
      <p>Background Changer</p>
      <div className="colorHolder">
        <button style={{backgroundColor:"red"}} onClick={() => setColor('red')}>Red</button>
        <button style={{backgroundColor:"blue",color:"white"}} onClick={() => setColor('blue')}>Blue</button>
        <button style={{backgroundColor:"green"}} onClick={() => setColor('green')}>Green</button>
        <button style={{backgroundColor:"pink"}} onClick={() => setColor('pink')}>Pink</button>
        <button style={{backgroundColor:"purple"}} onClick={() => setColor('purple')}>Purple</button>
        <button style={{backgroundColor:"orange"}} onClick={() => setColor('orange')}>Reset</button>
      </div>
    </div>
  );
}

export default App;
