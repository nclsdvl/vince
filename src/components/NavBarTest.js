import React from 'react'
import { scaleRotate as Menu } from 'react-burger-menu'
import '../css/NavBarTest.scss'

export default props => {








      return (
      <Menu {...props}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>

      </Menu>
    );
}


    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling


