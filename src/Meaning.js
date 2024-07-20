import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <h3>
        {props.meaning.synonyms[0]}, {props.meaning.synonyms[1]},
        {props.meaning.synonyms[2]},{props.meaning.synonyms[3]}
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              {definition.definition}
            </p>
            <br />
            <em>
              <strong>Example:</strong>
              {definition.example}
            </em>
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
