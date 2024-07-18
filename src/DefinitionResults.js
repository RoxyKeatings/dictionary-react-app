import React from "react";
export default function DefinitionResults(props) {
  if (props.results) {
    return (
      <div>
        <h3>Definition</h3>
      </div>
    );
  } else {
    return null;
  }
}
