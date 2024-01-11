import React from "react";
import styles from './Contact.module.css';

const Contact = () => {
    const socialIcons = [
        { href: 'https://github.com/Aya-Adel-Mohamed', icon: 'fa-brands fa-github-alt' },
        { href: 'https://www.linkedin.com/in/aya-adel-11476623b', icon: 'fab fa-linkedin' },
        { href: 'https://www.facebook.com/aya.adel.18062', icon: 'fa-brands fa-square-facebook' }
    ]
    return ( 
        <>
        <section className={styles.bgFooter}>
            <div className="container">
                <div className="row">
                <h4 className={styles.contactTitle}>Contact</h4>
                    <div className={`col-lg-6 ${styles.paddingTop}`}>
                     <div className={`${styles.contact} d-flex flex-column mt-4`}>
                     <span>GET IN TOUCH</span>
                        <span>GET REAL</span>
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
                    <div className={`${styles.contactIcons} mt-5 mb-2`}>
                    <i className="fa-solid fa-envelope"></i><a href="mailto:aya90318@gmail.com">aya90318@gmail.com</a>
                    </div>
                    <div className={`${styles.contactIcons} mb-2`}>
                    <i className="fa-solid fa-phone"></i><span>+2 01115262756</span>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Contact;