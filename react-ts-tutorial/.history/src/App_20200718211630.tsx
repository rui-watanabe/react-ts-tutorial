import React from 'react';
import './App.css';

type Item = {
  id: number,
  title: string
}

function App() {
  const message: string = 'hello';
  const items: Item[] = [
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
      <ul>
        { items.map((item: Item) => (
          
        ))}
      </ul>
    </div>
  );
}

export default App;
