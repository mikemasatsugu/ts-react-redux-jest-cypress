import React, {useState} from 'react';
import AddCountButton from './AddCountButton'

const App: React.FC = () => {
  const [count, setCount] = useState(0);

const addClickHandler = (): void => {
  setCount(count + 1);
}

  return (
    <div>
      <h1>Count: {count}</h1>
      <AddCountButton addClickHandler={addClickHandler}/>
    </div>
  )
};

export default App;