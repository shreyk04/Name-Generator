import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultContainer.css";
function Results({ suggestedNames }) {
  const suggestedNamesList = suggestedNames.map((suggestedName) => {
    return <NameCard suggestedName={suggestedName} />;
  });
  return <div class="result-container">{suggestedNamesList}</div>;
}
export default Results;
