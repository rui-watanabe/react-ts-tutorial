import React from 'react';
import './App.css';

type Item = {
  id: number,
  title: string
}

function App() {
  const message: string = 'hello';
  const item: Item[] = [
    {
      id: 1,
      title: 'highest price'
    },
    {
      id: 2,
      title: 'lowest price'
    }
  ]
  return (
    <div className="App">
      <p>{ message }</p>
    </div>
  );
}

export default App;
