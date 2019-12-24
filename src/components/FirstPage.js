import React, { Component, useRef, useEffect } from 'react'
import logo from '../img/img.jpeg'
import Name from './Name'
import gsap, {TweenMax} from 'gsap'


function FirstPage() {

    let monImage = document.getElementsByTagName('img')
    let monTitre = document.getElementsByTagName('h2')
    let monAdresse = document.getElementsByClassName('Adresse')


    useEffect(() => {
        gsap.from(monImage, {
            duration: 4,
            x:-100,
            scale: 0,
            opacity: 0,
            delay: .5,
            ease: 'elastic',
        });



        TweenMax.to(monImage, 0.5, { css:{ "filter": "drop-shadow(0px 0px 70px #a0a0ff)"},});

        gsap.from(monTitre, {
            duration: 2,
            scale: 0,
            opacity: 0,
            rotation: 360,
            ease: 'power3',
        });

        gsap.from(monAdresse, {
            duration: 2,
            y:500,
            opacity: 0,
            ease: 'powwer3',
        });


    })




    return (

        <div className="FirstPage">
            <div className="LeftContainer">
                <img src={logo} alt='acceuil'></img>
            </div>
            <div className="RightContainer">
                <Name></Name>
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




    )

}

export default FirstPage;