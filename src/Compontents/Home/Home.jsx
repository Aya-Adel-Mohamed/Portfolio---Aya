import React, { useEffect, useRef } from "react";
import styles from './Home.module.css';
import Typed from 'typed.js';
import AboutMe from "../AboutMe/AboutMe";
import Education from "../Education/Education";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

const Home = () => {
    const el = useRef(null);
    const socialIcons = [
        { href: 'mailto:aya90318@gmail.com', icon: 'fa fa-envelope' },
        { href: 'https://github.com/Aya-Adel-Mohamed', icon: 'fab fa-github' },
        { href: 'https://www.linkedin.com/in/aya-adel-11476623b', icon: 'fab fa-linkedin' },
        { href: 'https://www.facebook.com/aya.adel.18062', icon: 'fab fa-facebook' }
    ]
    useEffect(() => {

        const typed = new Typed(el.current, {
            strings: ['Front-end Developer React JS'],
            typeSpeed: 70,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true,
            backDelay: 700,
            backSpeed: 70,
            loop: true,
            loopCount: Infinity,

        });
        return () => {
            typed.destroy();
        };


    }, []);
    return (
        <>
            <section className={styles.background}>
                <div className={styles.homeContent}>
                    <h1>Aya Adel</h1>
                    <div>
                        <span ref={el}>F</span>
                    </div>
                    <div className={`social-icons d-flex justify-content-center ${styles.icons}`}>
                        {socialIcons?.map((ele, index) =>

                            <div key={index} className={`${styles.portfolioicons} d-flex align-items-center justify-content-center`} >
                                <button className={`${styles.btn} btn`}>
                                    <a href={ele.href} className='text-white' target={'_blank'} rel="noreferrer"><i className={ele.icon}></i></a>
                                </button>
                            </div>

                        )}
                    </div>
                </div>
            </section>
            <AboutMe />
            <Education />
            <Portfolio/>
            <Contact/>
        </>
    );
}

export default Home;