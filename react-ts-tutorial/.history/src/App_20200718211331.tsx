import React from 'react';
import './App.css';

type Item = {
  id: number,
  title: string
}

function App() {
  const message: string = 'hello';
  const item: Item
  return (
    <div className="App">
      <p>{ message }</p>
    </div>
  );
}

export default App;
