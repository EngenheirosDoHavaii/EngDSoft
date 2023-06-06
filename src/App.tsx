import React, { useState, useEffect } from 'react';
import './style/App.css';
import ProductListView from './components/ProductListView';

function App() {
  return (
    <div className="App">
      <ProductListView/>
    </div>
  );
}

export default App;
