import React from 'react';
import "./App.css"

function Card(props) {
  return (
    <button className="Card">
      {props.card.visible ? props.card.pic: null}
    </button>
  );
}

export default Card;