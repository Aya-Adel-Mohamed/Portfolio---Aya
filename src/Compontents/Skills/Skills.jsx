import React from "react";
import styles from './Skills.module.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import bootstrap from '../../assets/bootstrap.png';
import javascript from '../../assets/javascript.png';
import jquery from '../../assets/jquery.png';
import sass from '../../assets/sass.png';
import reactJs from '../../assets/react.png';
import redux from '../../assets/redux.jpg';

const Skills = () => {
    const Profesional=[
        {image: html , text: 'HTML & HTML5'},
        {image: css , text: 'CSS'},
        {image: bootstrap , text: 'BOOTSTRAP'},
        {image: javascript , text: 'JavaScript & ES6'},
        {image: jquery , text: 'jQuery'},
        {image: sass , text: 'Sass'},
        {image: reactJs , text: 'React JS'},
        {image: redux , text: 'Redux & Redux toolkit'},
    ]
    return ( 
        <>
        {/* <section className={styles.centerContent}>
            <div className="container">
            <h4 className={styles.skillsTitle}>Skills</h4>
                <div className="row">
                
                        {Profesional?.map((ele,index)=>
                            <div className={`col-3 ${styles.professional}`}>
                        <div className={`${styles.skills}`}>
                            <img src={ele.image} alt="" className="w-100" />
                            <span>{ele.text}</span>
                        </div>
                        </div>
                        )}
       
                </div>
            </div>
        </section> */}
        
        </>
     );
}
 
export default Skills;