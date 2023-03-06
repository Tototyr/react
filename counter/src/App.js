import React from 'react'
import "./App.scss";

function App() {

  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
      setCount( count + 1 )
  }

  const onClickMinus = () => {
    setCount( count - 1 )
  }
  
  return (
    <div className="App">
      <div className='wrapper'>


          <h2 className='title'> Счетчик: </h2>
          <h1 className='counter'>{count}</h1>
          <button className='plus xs' onClick={onClickPlus}> + </button>
          <button className='minus xs' onClick={onClickMinus}> - </button>
      </div>
    </div>
  );
}

export default App;
