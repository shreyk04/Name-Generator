import React from "react";
import "./NameCard.css";

const nameUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";
function NameCard({ suggestedName }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={`${nameUrl}${suggestedName}`}
      class="result-link"
    >
      <div className="result-card">
        <p className="result-name">{suggestedName}</p>
      </div>
    </a>
  );
}
export default NameCard;
