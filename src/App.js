
import Dropdown from './Dropdown';
import './App.css';
import { useState } from 'react';

function App() {
  const [selected,setSelected] = useState("");

  return (
  <>
  <Dropdown selected={selected} setSelected={setSelected}/>
  
    </>
);
}

export default App;
