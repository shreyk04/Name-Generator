import React from "react";
import "./SearchBox.css";
export default function SearchBox({ onInputChange }) {
  return (
    <div className="search-box">
      <input
        onChange={(event) => onInputChange(event.target.value)}
        type="text"
        name=""
        id="search-input"
        placeholder="Enter Keywords"
      />
    </div>
  );
}
