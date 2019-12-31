import React, { Component, useRef, useEffect } from 'react'
import gsap from 'gsap'

// TODO à retravailler pour transformer le H1 en multiple span


function Name() {

    let mesSpan = document.getElementsByTagName('span')

    useEffect(() => {
        gsap.from(mesSpan, {
            duration: 1.9,
            rotation: 290,
            //x: 700,
            color: "red",
            scale: 15,
            opacity: 0,
            stagger: .05,
            ease: 'elastic',
            force3D: true
        });
    })

    return (
        <div className="Nom" id="Nom">
            <h1>
                <span>V</span>
                <span>i</span>
                <span>n</span>
                <span>c</span>
                <span>e</span>
                <span>n</span>
                <span>t</span>
                <p> </p>
                <span>M</span>
                <span>i</span>
                <span>e</span>
                <span>l</span>
                <span>c</span>
                <span>a</span>
                <span>r</span>
                <span>e</span>
                <span>k</span>
            </h1>
        </div>
    )
}

export default Name;