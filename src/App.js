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
  
  const handleClick2 = (id) => {
    setCounter(prevCounter => prevCounter +1);
    console.log(id)
    // if (id == id) {
    //   setCounter(prevCounter => prevCounter +1)
    //   console.log(id)
    }

    const [color, setColor] = useState('');
    const handleClick = () => {
      setColor(color ===`` ? `orange` : ``)
    }

  return (
    <div className="App">
        <div className ="App__box">
      {all.map ((picture) =>(
        <div className="App__box__pic" key={picture.id}>
         <img src={picture.pic}></img>
         <div className="App__box__btn">
          <div className="App__box__buttonlike" style = {{ background: color}} onClick={() => {handleClick(picture.id)}}></div>
          <div className="App__box__buttonunlike"></div>
          </div>
        </div>
        
        ))}
      
      </div>
    </div>
  );
}

export default App;
