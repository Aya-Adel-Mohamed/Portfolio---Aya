import React from "react";
import styles from './AboutMe.module.css';

const AboutMe = () => {
    const aboutMe = [
        { icon: 'fa fa-envelope', href: 'mailto:aya90318@gmail.com', text: 'aya90318@gmail.com' },
        { icon: 'fa-brands fa-github', href: 'https://github.com/Aya-Adel-Mohamed', text: 'https://github.com/Aya-Adel-Mohamed' },
        { icon: 'fa-solid fa-phone', text: '+20 1115262756' },
        { icon: 'fa-solid fa-location-dot', text: '4 Khalid Bin EL-Waleed from EL-Zhoor, Alexandria, Egypt' },
    ]
    return (
        <>
            <section className={styles.aboutBg}>
                <div className={`container-fluid ${styles.padding} my-md-5 my-0 py-5`}>
                    <div className="row justify-content-center align-items-center py-md-5 py-0">
                        <div className="col-xl-6 col-lg-12 ">
                            <h4 className={styles.aboutTitle}>BIT MORE ABOUT ME</h4>
                            <p className={styles.aboutContent}>Hello! i'm <strong>Aya Adel</strong>. junior Front-end developer with experience in building and maintaining responsive websites. Experienced with all stages of the development cycle for dynamic web projects. <br />Having an in-depth knowledge including advanced <strong>HTML5 - CSS - CSS3 - SASS - Bootstrap 5 - material UI -JavaScript - ES6 - jQuery - React Js - Redux and Redux toolkit</strong>.</p>
                            <div className={styles.social}>
                                {aboutMe?.map((about, index) =>
                                    <div className={`${styles.socialContent}`} key={index}>
                                        <i className={about.icon}></i>
                                        {about.href ? <a href={about.href} className={`${styles.paragraph} text-dark text-decoration-none`}>{about.text}</a> :
                                            <span className='text-dark'>{about.text}</span>
                                        }

                                    </div>
                                )}
                            </div>

                        </div>
                        <div className="col-xl-6 col-lg-12  overflow-hidden">
                            <div className={`position-relative ${styles.circle}`}>
                                <div className={styles.circleTwo}>

                                </div>
                                <div className={styles.circleOne}>

                                </div>
                                <div className={styles.circleThree}>
         <a href="https://drive.google.com/file/d/1r_25jJOa_CoxlnmF8KUlj_h2XYsPtNRr/view?usp=sharing" rel="noreferrer" target={'_blank'}className='text-decoration-none'>
                            <div className={`d-flex ${styles.download}`}>
                            <i className="fa-solid fa-arrow-down"></i>
                            <p>Download CV</p>
                            </div>
                            </a>
                                </div>

                            </div>
                   
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;