import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  if (props.antonyms.length >= 1) {
    return (
      <div className="Antonyms">
        <h6>antonym(s): {props.antonyms}</h6>
      </div>
    );
  } else {
    return null;
  }
}
