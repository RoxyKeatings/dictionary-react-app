import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import DefinitionResults from "./DefinitionResults";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

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
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h4>What word do you want to look up</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              defaultValue={props.defaultKeyword}
              onChange={handleKeywordchange}
              required
              className="inputForm text-capitalize w-75"
              autoFocus
            />
            <input
              type="submit"
              value="🔎"
              className="submitBtn text-capitalize"
            />
          </form>
          <div className="hint">
            example keywords: alchemy,developer,inspired,lexicon...
          </div>
        </section>
        <DefinitionResults results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
