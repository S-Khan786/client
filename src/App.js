import React from 'react'
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Register from './components/Register';
import Login from './components/Login';
import Userslist from './components/Userslist';

function App() {
  return (
    <div className="App">
      <h1>Mern Stack project</h1>

      <div className='row'>

        <div className='col-md-6'>

          <Register/>
          
        </div>

        <div className='col-md-6'>

          <Login/>

        </div>
        
      </div>

      <div className='row justify-content-center'>

        <div className='col-md-8'>

          <Userslist/>

        </div>
      </div>
    </div>
  );
}

export default App;
