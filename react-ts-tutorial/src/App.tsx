import React from 'react';
import './App.css';

type Item = {
  id: number,
  title: string
}

type Props = {
  message: string;
}

const Child: React.FC<Props> = ({ message }) => {
  return (
    <p>{ message }</p>
  )
}

const App: React.FC = () => {
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
          <li key={ item.id }>{ item.title }</li>
        )) }
      </ul>
      <Child message = "prop value"/>
    </div>
  );
}

export default App;
