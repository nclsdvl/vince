import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


// TODO --> importer le CSS ici
//      --> retravailler le css
//      --> onHover --> display span
const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        float: 'left',
        position: 'fixed',
        background: 'transparent',
        top: '45vh'
    }
});



class NavBar extends Component {

    constructor(props) {
        console.log('dans le constructeur')
        super(props)
        this.state = {
            page: 1
        }

    }



    render() {
        const { classes } = this.props
        let page = this.state.page

        setTimeout(() => {
            console.log('je rerender page = ' + page)
        }, 2000)


        // Recuperation de la taille de la fenetre pour le scroll
        var hauteurFenetre = (window.innerHeight);
        // Adaptation de la taille lors du changement de taille de fenetre
        window.addEventListener('resize', () => {
            hauteurFenetre = (window.innerHeight);
        })


        //Detection de la molette pour defillement

            //TODO : --> pas sur que la logique soit la plus simple
            //       --> rajouter des conditions pour la page 3



        window.addEventListener("wheel", event => {
            if (event.deltaY === -3 && this.state.page !== 1) {
                window.scrollTo({ top: -hauteurFenetre, behavior: 'smooth' })
                //rerender des radioButtons
                this.setState({ page: page -= 1 })
                document.getElementById('home').checked = true
            }
            else if (event.deltaY === 3 && this.state.page !== 2) {
                window.scrollTo({ top: hauteurFenetre, behavior: 'smooth' })
                this.setState({ page: page += 1 })
                //rerender des radioButtons
                document.getElementById('presentation').checked = true
            }
        })


        return (
            <div className={classes.root} id='root'>
                <label className="container">
                    <input type="radio" name="radio" id='home' checked='true'></input>
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    <input type="radio" name="radio" id='presentation'></input>
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    <input type="radio" name="radio"></input>
                    <span className="checkmark"></span>
                </label>


            </div>
        )
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(NavBar);

