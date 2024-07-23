import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio === null) {
    return null;
  } else {
    return (
      <div className="Phonetic">
        <span className="text">{props.phonetic.text}</span>
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="listen">
          Listen 🔊
        </a>
      </div>
    );
  }
}
