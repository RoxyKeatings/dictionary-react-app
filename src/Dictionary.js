import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for definition of ${keyword}...`);
  }

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
