import React, { useState, useEffect } from 'react';
import './style/App.css';

function App() {
  const [ sampleText, setSampleText ] = useState('sei la o que ta escrito aqui');

  useEffect(() => {
    fetch('/hello-world')
    .then((res) => res.json())
    .then((data) => setSampleText(data.init));
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
