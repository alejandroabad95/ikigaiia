import { useState } from 'react'

import './App.css'
import Navigation from './components/navigation'

function App() {
  return (
    <>
      <Navigation />
      <div className='mainContainer'>

        <div className='questionContainer1'>
        <div className='questionBall1'>
          <div>
            <h2>Te encanta hacer</h2>
            <form>
               <input type="text" id="answer" name="answer" required/>
            </form>
            </div>
          </div>
          
        </div>

        
        <div className='centeredContainer'>
          <div className='columnContainer'>
            <span>Encuentra tu camino</span>
            <button className='btnIkigai'>ikigai</button>
          </div>
        </div>




      </div>





    </>
  );
}

export default App;
