import React from 'react';
import "./App.css"
import Card from "./Card";

function Board (props) {
  return (
    <div className="Board">
      {
        props.pics.map((el, i) =>
            <Card card={el} key={el.id}/>
          )
      }
    </div>
  );
}

export default Board;