import React,{useState,useCallback} from 'react';
import './App.css';
import {Mission} from './components/Mission';
import {Missioninfo} from './components/Missioninfo'

function App() {

  const [id, setId] = useState(0);
  
  const handleIdChange = useCallback(newId => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <Mission handleIdChange={handleIdChange}/>
      <Missioninfo id={id}/>
    </div>
  );
}

export default App;
