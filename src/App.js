import React from 'react';
import './css/App.scss';
import logo from './img/img.jpeg'



function App() {
  return (
    
    <div className="App">
        <div className="FirstPage">
          <div className="LeftContainer">
            <img src={logo} alt='acceuil'></img>
          </div>
          <div className="RightContainer">
            <div className="Nom">
              <h1>Vince Mielcarek</h1>
            </div>
            <div className="Titre">
              <h2>Professeur de musique</h2>
            </div>
            <div className="Coordonnees">
              <div className="Adresse">
                <h3>Coordonnées :</h3>
                <h3>45 rue de Pont-à-Mousson</h3>
                <h3>57950 Montigny-lès-Metz</h3>
                <h3>06 56 48 49 30</h3>
                <h3>Vincent.Mielcarek@gmail.com</h3>
              </div>      
            </div>

          </div>
        </div>
    </div>
  );
}

export default App;