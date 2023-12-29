

// import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React, { useState } from 'react';
import { Typography } from 'antd';
import { Button } from 'antd/es/radio';

const { Title } = Typography;
function App() {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber(number + 1);
  }

  const decreaseNumber = () => {
    setNumber(number - 1);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Title level = {1} style = {{color: 'blue'}}>Заголовок</Title>
        <p>{number}</p>
        <Button onClick={increaseNumber}>Увеличить</Button>
        <Button onClick={decreaseNumber}>Уменьшить</Button>
      </header>

    </div>
  )
}




export default App;
