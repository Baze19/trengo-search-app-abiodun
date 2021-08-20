
import './App.css';
import React  from 'react'
import Home from './components/Home/home'
import Input from './components/Input/input';
import Listing from './components/list/List'
import {Context} from './components/context/Context'

function App() {

  return (
    <Context>
       <div className="App">
      <div className='main'>
       <Home/>
      </div>
    </div>
    </Context>
   
  );
}

export default App;
