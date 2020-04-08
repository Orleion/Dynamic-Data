import './App.css';
import Parent from './Components/Parent.jsx'
import React from 'react';
import License from './License.json'
import Misc from './Misc.json'
import Computers from './Computers.json'

function App() {
  
  return (
    <div>
      
        <Parent License ={License.data} Misc ={Misc.data} Computers={Computers.data}/>
      
    </div>
  );
}

export default App;
