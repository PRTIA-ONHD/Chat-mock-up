import React from 'react'
import "./App.css"
import { Messenger } from './pages/messenger/Messenger'

// function handleEvent(e){
//   alert('กด ok ไปซะ');
//   console.log(e);
// }

function App() {

  return (
    <div>
      <Messenger/>
      {/* <button onClick={handleEvent}>ปุ่มมมมมมมมมม!!!!</button> */}
    </div>
  );
}

export default App;
