import React from 'react';
import './css/App.scss';

import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage';
import NavBar from './components/NavBar.js'



// TODO 
//      -->compatibilité des navigateur (IE principalement)
//      --> onResize parfois la page se retrouve entre deux scrolls
//      --> placer des ancres et repositionner la page lors d'une actualisation?

// replace à l'accueil lors de l'actualisation de la page
window.addEventListener("load", function(event) {
  window.scrollTo({top:0})
});


function App() {

  return (

    <div className="App">
      <NavBar></NavBar>
      <FirstPage id='maPage'></FirstPage>
      <SecondPage></SecondPage>
    </div>
  );
}

export default App;