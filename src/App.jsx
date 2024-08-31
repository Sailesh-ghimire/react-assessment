import { useState } from 'react';
import './App.css';
import Child from './components/Child';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <h1>{count}</h1>
      <Child setCount={setCount} />
      {count < 0 && <p>Why so negative?</p>}
    </div>
  );
};

export default App;
