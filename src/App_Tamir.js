import React from 'react';
import logo from './logo512.png';
import './App.css';
import Age from './Components/Age';
import Gender from './Components/Gender';
import Submit from './Components/Submit';

function App() {

return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>     
          <Gender></Gender>    
       <p></p>

<Age></Age>
         <p></p>

         <Submit></Submit>

       </p>
      </header>

    </div>
  );
}

export default App;
