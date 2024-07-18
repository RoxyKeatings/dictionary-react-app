import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import DefinitionResults from "./DefinitionResults";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);

  function search(event) {
    event.preventDefault();
  }
  function handleResponse(response) {
    setDefinition(response.data);
  }
  let apiKey = "89b05tfca20b16d5f5e3c646e1oa37db";
  // documentation:https://www.shecodes.io/learn/apis/dictionary
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  function handleKeywordchange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="look up any word.."
          autoFocus
          onChange={handleKeywordchange}
          required
        />
        <input type="submit" value="search" />
      </form>
      <DefinitionResults results={definition} word={keyword} />
    </div>
  );
}
