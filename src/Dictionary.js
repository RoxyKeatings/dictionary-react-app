import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import DefinitionResults from "./DefinitionResults";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation:https://api.dictionaryapi.dev/api/v2/entries/en/<word>
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    //documentation: https://www.shecodes.io/learn/apis/imageshttps://www.pexels.com/
    let apiKey = "89b05tfca20b16d5f5e3c646e1oa37db";
    let apiSheCodesUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(apiSheCodesUrl).then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
