import React from "react";
import Meaning from "./Meaning";
import "./DefinitionResults.css";
import Phonetic from "./Phonetic";

export default function DefinitionResults(props) {
  if (props.results) {
    return (
      <div className="DefinitionResults">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
