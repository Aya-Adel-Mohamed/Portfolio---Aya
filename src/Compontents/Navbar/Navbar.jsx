import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Navbar/Navbar.module.css';
import business from '../../assets/icons/business_contact.png';
import comvzhssmyverizon from '../../assets/icons/comvzhssmyverizon.png';
import graduation from '../../assets/icons/graduation_cap.png';
import chart from '../../assets/icons/pie_chart.png';
import safe from '../../assets/icons/safe.png';
import envelope from '../../assets/icons/envelope.png';

export default function Navbar() {
const navbar = [
    {link:'', image:business, text:'Home'}, 
    {link:'about', image:comvzhssmyverizon, text:'About'}, 
    {link:'education', image:graduation, text:'Education'}, 
    {link:'skills', image:chart, text:'Skills'}, 
    {link:'portfolio', image:safe,text:'Portfolio'}, 
    {link:'contact', image:envelope,text:'Contact'}, 
]
  return (
    <>
    <div className={`${styles.sidebar} text-center d-flex`}>
        {navbar?.map((nav,index)=>
                <button className={`btn ${styles.button}`} key={index} >
                <Link to={nav.link} className='position-relative '><img src= { nav.image } alt="" />
                <span className=' py-1 px-3 mb-1 text-white position-absolute translate-middle rounded-2 '>{nav.text}</span>
                </Link>
            </button>
        ).slice(0,3)}
        <button className={`${styles.fingerprint} rounded-circle`}>
            <Link to='portfolioList'><i  className={`text-white fa-solid fa-fingerprint ${styles.icon} fa-beat-fade`}></i></Link>
        </button>
        {navbar?.map((nav,index)=>
                <button className={`btn ${styles.button}`} key={index} >
                <Link to={nav.link} className='position-relative'><img src= { nav.image } alt="" />
                <span className=' py-1 px-3 mb-1 text-white position-absolute translate-middle rounded-2'>{nav.text}</span>
                </Link>
            </button>
        ).slice(3,6)}
    </div>
    </>
   
  )
}