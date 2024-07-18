import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for definition of ${keyword}...`);
  }
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "89b05tfca20b16d5f5e3c646e1oa37db";
  // documentation:https://www.shecodes.io/learn/apis/dictionary
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  function handleKeywordchange(event) {
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
    </div>
  );
}
