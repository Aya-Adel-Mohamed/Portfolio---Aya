import React from "react";
import styles from './Contact.module.css';

const Contact = () => {
    const socialIcons = [
        { href: 'https://github.com/Aya-Adel-Mohamed', icon: 'fa-brands fa-github-alt' },
        { href: 'https://www.linkedin.com/in/aya-adel-11476623b', icon: 'fab fa-linkedin' },
        { href: 'https://www.facebook.com/aya.adel.18062', icon: 'fa-brands fa-square-facebook' }
    ]
    const contactInput = [
        {name:"name", placeholder:'Your Name'},
        {name:"subject", placeholder:'Subject'},
        {name:"email", placeholder:'Your Email'},
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
                    <div className={`${styles.contactIcons} mt-3 mb-2`}>
                    <i className="fa-solid fa-envelope"></i><a href="mailto:aya90318@gmail.com">aya90318@gmail.com</a>
                    </div>
                    <div className={`${styles.contactIcons} mb-2`}>
                    <i className="fa-solid fa-phone"></i><span>+2 01115262756</span>
                    </div>
                    </div>
                    <div className="col-lg-6">
          <form className={` ${styles.bgForm} p-4 rounded-3 mb-lg-0 mb-5 mt-5`}>
                {contactInput?.map((contact,index)=>
            <div className="form-group mb-3">
                <div className="col-sm-12">
                <input type="text" key={index} name={contact.name} required className={`rounded-1 py-1 px-2 form-control ${styles.inputStyle}`} placeholder={contact.placeholder}/>
              </div>
            </div>
                
                )}
  
            <div className="form-group mb-3">
              <div className="col-sm-12">
               <textarea name="message"  rows="5" className={`rounded-1 py-1 px-2 form-control ${styles.inputStyle}`} required placeholder='Your Message'></textarea>
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="col-sm-12">
                <button type='submit' name='submit' value='submit' className={`btn px-3 py-2 fs-6 ${styles.submitBtn}`}>Submit</button>
              </div>
            </div>
          </form>
        </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Contact;