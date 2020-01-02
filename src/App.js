import React, { Fragment } from 'react';
import './css/App.scss';

import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage';
import NavBar from './components/NavBar.js'
import NavBarTest from './components/NavBarTest'


// TODO 
//      -->compatibilité des navigateur (IE principalement)
//      --> onResize parfois la page se retrouve entre deux scrolls
//      --> placer des ancres et repositionner la page lors d'une actualisation?

// replace à l'accueil lors de l'actualisation de la page
window.addEventListener("load", function (event) {
  window.scrollTo({ top: 0 })
});


function App() {

  return (
    <Fragment>

      <div className="App">
        <div id="outer-container" style={{ height: '100%' }}>
          <NavBarTest pageWrapId={"page-wrap"} ></NavBarTest>
          <NavBar></NavBar>
          <main id="page-wrap" outerContainerId={"App"}>

            <FirstPage id='maPage'></FirstPage>
            <SecondPage></SecondPage>
          </main>

        </div>
      </div>

    </Fragment>
  );
}

export default App;