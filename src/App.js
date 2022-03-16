import React, { useEffect, useState } from "react";
import './App.css';

function App() {

  const [all, setAll] = useState([]);
  const API = "http://localhost:3001/pictures";

  const handleSeePictures = () => {
    fetch(`${API}`)
    .then((response) => response.json())
    .then((data) => setAll(data))
  }

  useEffect(() => {
    handleSeePictures();
  },[]);

  const [counter, setCounter] = useState(0);
  
  const handleClick = (id) => {
    setCounter(prevCounter => prevCounter +1);
    console.log(id)
    // if (id == id) {
    //   setCounter(prevCounter => prevCounter +1)
    //   console.log(id)
    }

  return (
    <div className="App">
        <div className ="App__box">
      {all.map ((picture) =>(
        <div className="App__box__pic" key={picture.id}>
         <img src={picture.pic}></img>
          <button onClick={() => {handleClick(picture.id)}}>{picture.status}{counter}</button>
          <button>NIE OK</button>
      
        </div>
        
        ))}
      
      </div>
    </div>
  );
}

export default App;
