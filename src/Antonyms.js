import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  if (props.antonyms.length === null) {
    return null;
  } else {
    return (
      <div className="Antonyms">
        <h6>antonym: {props.antonyms}</h6>
      </div>
    );
  }
}
