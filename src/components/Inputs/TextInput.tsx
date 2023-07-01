import React from "react";

interface Params {
  text: string;
  length: number;
}

function TextInput({ text, length }: Params) {
  const inputName = text.toLowerCase().replace(/[^A-Z0-9]+/gi, "");
  const textToShow = text[0].toUpperCase() + text.substring(1) + ":";

  return (
    <div>
      <label htmlFor={inputName}>{textToShow}</label>
      <input
        pattern=".{3,}"
        id={inputName}
        name={inputName}
        minLength={length}
      />
    </div>
  );
}

export default TextInput;
