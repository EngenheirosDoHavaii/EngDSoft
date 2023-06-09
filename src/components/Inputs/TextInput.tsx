import React from "react";

interface Params {
  text: string;
}

function TextInput({ text }: Params) {
  const inputName = text.toLowerCase().replace(/[^A-Z0-9]+/gi, "");
  const textToShow = text[0].toUpperCase() + text.substring(1) + ":";

  return (
    <div>
      <label htmlFor={inputName}>{textToShow}:</label>
      <input name={inputName} />
    </div>
  );
}

export default TextInput;
