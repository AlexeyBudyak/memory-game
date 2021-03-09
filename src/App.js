import React, {useState,useEffect} from 'react';
import "./App.css"
import Board from "./Board";
import GameLevel from "./GameLevel";

const iPics = ['🦊','🐶','🐻','😎','🐝','🐞','🦁','🐭','🦋','🦉','🌷','🍎','🍋',
               '🍔','⚽️','🚗','✈️','🚁','🏔','🏠','⏰','🔭','🎁','👞','🐟','🌎'];
const num = [52, 24, 12]; // Number of the cards
function App() {
  const [pics, setPics] = useState([]);
  const [lvl,setLvl] = useState(0);

  const fillPics = (size= lvl) => {
    // fill Array with two sets of pics
    let newPics = Array(num[size]).fill(1).map((_,i)=>({id: i, pic: iPics[~~(i/2)], visible: false}));
    for(let i = 0; i < 10 * num[size]; i++){
      let a = ~~(Math.random()*num[size]);
      let b = ~~(Math.random()*num[size]);
      [newPics[a],newPics[b]] = [newPics[b],newPics[a]];
    }
    setPics(newPics);
  }
  useEffect(()=>fillPics(0),[]);
  return (
    <div className='App'>
      <h1>Memory</h1>
       <GameLevel level={[lvl, setLvl]} restart={fillPics}/>
      <button onClick={() => fillPics()}> Start</button> <br/><br/>
      <Board pics={pics} setPics={setPics} lvl={lvl}/>
    </div>
  );
}

export default App;