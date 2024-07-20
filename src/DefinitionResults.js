import React from "react";
import Meaning from "./Meaning";
import "./DefinitionResults.css";
import Phonetic from "./Phonetic";

export default function DefinitionResults(props) {
  if (props.results) {
    return (
      <div className="DefinitionResults">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
