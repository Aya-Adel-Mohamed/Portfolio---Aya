import React from "react";
import styles from './NotFound.module.css'
import notfound from '../../assets/notfound.jpg'
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <section className={`${styles.notfound}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 ">
              <div className={`${styles.content}`}>
              <h1 >404</h1>
                            <h3>Page Not Found</h3>
                            <p>We can't find the page you're looking for.</p>
                            <p>return to<Link to='/' className={styles.colorhome}>&nbsp;Home Page</Link></p>
              </div>
                        </div>
                        <div className="col-lg-6 ">
                            <img src={notfound} alt="" className="w-100" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default NotFound;