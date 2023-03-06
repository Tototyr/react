
import React from 'react'
import './App.scss';
import close from './close.png'

function App() {

  const [open, setOpen] = React.useState(false);
  
  return (
    <div className="App">
      <button onClick={() =>setOpen(true)} className='open-modal-btn'>Открой меня</button>
      { open && (
        <div className='overlay'>
        <div className='modal'>
          <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, et totam. Molestiae dignissimos ea numquam unde, animi alias accusantium odio libero aperiam error, nisi ut voluptas iste quibusdam, quidem illo!</p>
          <img className='close-modal' src={close} alt='' onClick={() =>setOpen(false)} />
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
