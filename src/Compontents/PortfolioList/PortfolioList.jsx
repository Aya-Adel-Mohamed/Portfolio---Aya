import React, { useEffect, useState } from "react";
import styles from './PortfolioList.module.css'
import business from '../../assets/icons/business_contact.png';
import comvzhssmyverizon from '../../assets/icons/comvzhssmyverizon.png';
import graduation from '../../assets/icons/graduation_cap.png';
import chart from '../../assets/icons/pie_chart.png';
import safe from '../../assets/icons/safe.png';
import envelope from '../../assets/icons/envelope.png';
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const PortfolioList = () => {
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      },2000);
    },[]);
    const list = [
        { path: '/', image: business, text: 'Home' },
        { path: '/about', image: comvzhssmyverizon, text: 'About' },
        { path: '/education', image: graduation, text: 'Education' },
        { path: '/skills', image: chart, text: 'Skills' },
        { path: '/portfolio', image: safe, text: 'Portfolio' },
        { path: '/contact', image: envelope, text: 'Contact' },
    ]

    return (
        <>
        {loading?<Loading/>:
        <>
                    <section className={styles.listBg}>
                <div className="container">
                    <div className="row my-lg-0 my-5">
                        {list?.map((item,index)=>
                                 <div className="col-lg-4 col-md-6 col-12" key={index}>
                                 <Link to={item.path} className={styles.container}>
                                     <div className={styles.imgContainer}>
                                         <img src={item.image} alt="" />
                                     </div>
                                     <span>{item.text}</span>
                                 </Link>
                             </div>
                        )}
                    </div>
                </div>
            </section>
        </>
        }

        </>
    );
}

export default PortfolioList;