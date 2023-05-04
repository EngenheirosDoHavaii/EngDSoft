import React, { useState, useEffect } from 'react';
import './style/App.css';

function App() {
  const [ sampleText, setSampleText ] = useState('sei la o que ta escrito aqui');

  useEffect(() => {
    fetch('/hello-world', {
        method: "GET",
    })
    .then((res) => res.json())
    .then((data) => setSampleText(data))
  }, []);
  

  return (
    <div className="App">
      <header className="App-header">
        {sampleText}
      </header>
    </div>
  );
}

export default App;
