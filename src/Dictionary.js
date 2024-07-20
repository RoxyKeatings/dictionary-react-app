import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import DefinitionResults from "./DefinitionResults";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // documentation:https://api.dictionaryapi.dev/api/v2/entries/en/<word>
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    //documentation:https://www.shecodes.io/learn/apis/dictionary
    //const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  }

  function handleKeywordchange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus
            onChange={handleKeywordchange}
            required
            className="inputForm text-capitalize w-75"
          />
          <input
            type="submit"
            value="Discover"
            className="submitBtn text-capitalize w-25"
          />
        </form>
        <div className="hint">
          example keywords: lexicon,magic,sunsets,inspired
        </div>
      </section>
      <DefinitionResults results={results} />
    </div>
  );
}
