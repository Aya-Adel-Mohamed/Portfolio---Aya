import React, { useEffect } from 'react'
import styles from './Card.module.css'
import AOS from "aos";
import "aos/dist/aos.css";

const PortfolioCard = ({data}) => {
  useEffect(() => {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
}, []);
  return (
    <>

      <div className={`col-lg-4 position-relative ${styles.paddingCard}`} data-aos="zoom-in">
        <div className={`d-flex ${styles.icon}`} >
          <a href={data.liveDemo} target='_blank' rel="noreferrer"> <i className="fa-solid fa-eye"></i></a>
          <a href={data.Github} target='_blank' rel="noreferrer"> <i className="fa-solid fa-link"></i></a>
        </div>
        <div className={`card ${styles.card}`} >
          <a href={data.liveDemo} target='_blank' rel="noreferrer">
            <img src={data.image} className={`card-img-top ${styles.imageCard}`} alt="..." />
          </a>
          <div className={`card-body ${styles.cardBody}`}>
            <div className={`card-text ${styles.content}`}>
              <p className={styles.cardText}>{data.title}</p>
              <div className={`${styles.cardBadge}`}>
                <span>{data.skillBadge}</span>
                {data.skillBadge_2 ?
                  <span>{data.skillBadge_2}</span>
                  : ''}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioCard;