import React from 'react';
import './App.css';

type Item = {
  id: number,
  title: string
}

type Props = {
  message: string;
  children: React.ReactNode;
}

const Child: React.FC<Props> = ({ message, children }) => {
  return (
    <div>
      <p>{ message }</p>
      { children }
    </div>
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
      <Child message = "prop value">prop child component</Child>
    </div>
  );
}

export default App;
